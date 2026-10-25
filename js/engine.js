class SpeechEngine {
  constructor() {
    this.synth = window.speechSynthesis || null;
    this.voices = [];
    this.voicesByLang = {};
    this.ready = false;
    this.defaults = {};
    this.currentUtterance = null;
    this._bindVoiceLoad();
  }

  available() {
    return !!this.synth;
  }

  _bindVoiceLoad() {
    if (!this.synth) return;
    const load = () => {
      this.voices = this.synth.getVoices() || [];
      this.voicesByLang = {};
      for (const v of this.voices) {
        const key = this._langKey(v.lang);
        if (!this.voicesByLang[key]) this.voicesByLang[key] = [];
        this.voicesByLang[key].push(v);
      }
      this.ready = true;
      this._pickDefaults();
      if (this.onvoiceschanged) this.onvoiceschanged(this.voices);
    };
    load();
    if (typeof this.synth.onvoiceschanged !== "undefined") {
      this.synth.onvoiceschanged = load;
    }
    // Some browsers expose voices late; force a re-check shortly after load.
    const retry = () => {
      if (this.voices.length === 0 && this.synth.getVoices) {
        load();
      }
    };
    if (typeof window !== "undefined") {
      window.setTimeout(retry, 200);
      window.setTimeout(retry, 1000);
    }
  }

  _langKey(lang) {
    return (lang || "").toLowerCase().replace("_", "-").split("-")[0];
  }

  _pickDefaults() {
    this.defaults = {};
    // Also include "" so an explicit language-agnostic fallback can be chosen.
    for (const code of ["en", "hi", "kn", "ta"]) {
      const list = this.voicesByLang[code] || [];
      if (list.length === 0) {
        this.defaults[code] = null;
        continue;
      }
      const sysDefault = list.find((v) => v.default);
      this.defaults[code] = sysDefault || list[0];
    }
  }

  getVoicesForLang(langCode) {
    const key = this._langKey(langCode);
    const exact = this.voicesByLang[key] || [];
    return exact;
  }

  getDefaultVoice(langCode) {
    if (!this.ready) this._pickDefaults();
    return this.defaults[this._langKey(langCode)] || null;
  }

  getVoiceByURI(uri) {
    if (!uri) return null;
    return this.voices.find((v) => v.voiceURI === uri) || null;
  }

  speak(text, { langCode, voiceURI, rate }) {
    if (!this.synth) return Promise.resolve();
    return new Promise((resolve) => {
      const u = new SpeechSynthesisUtterance(text);
      // Prefer an explicit saved voice, then the language default.
      const voice = this.getVoiceByURI(voiceURI) || this.getDefaultVoice(langCode);
      if (voice) {
        u.voice = voice;
        u.lang = voice.lang;
      } else {
        u.lang = langCode;
      }
      u.rate = rate || 1;
      // Keep the utterance alive across the async onend/onerror handlers.
      this.currentUtterance = u;
      let settled = false;
      const settle = (val) => {
        if (settled) return;
        settled = true;
        resolve(val);
      };
      let started = false;
      u.onend = () => settle(null);
      u.onerror = (e) => settle(e.error || "error");
      u.onstart = () => {
        started = true;
        window.clearTimeout(startWatchdog);
      };
      // If speech never actually begins (e.g. no usable voice), do not hang.
      const startWatchdog = window.setTimeout(() => {
        if (!started) settle("no-start");
      }, 2500);
      this.synth.speak(u);
      // Hard safety net so playback never stalls indefinitely.
      window.setTimeout(() => settle("timeout"), 60000);
    });
  }

  cancel() {
    if (this.synth) this.synth.cancel();
    this.currentUtterance = null;
  }

  pause() {
    if (this.synth) this.synth.pause();
  }

  resume() {
    if (this.synth) this.synth.resume();
  }
}
