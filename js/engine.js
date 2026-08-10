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
  }

  _langKey(lang) {
    return (lang || "").toLowerCase().replace("_", "-").split("-")[0];
  }

  _pickDefaults() {
    this.defaults = {};
    const langCodes = ["en", "hi", "sa", "kn", "ta"];
    for (const code of langCodes) {
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
    return this.voicesByLang[this._langKey(langCode)] || [];
  }

  getDefaultVoice(langCode) {
    if (!this.ready) this._pickDefaults();
    return this.defaults[this._langKey(langCode)] || null;
  }

  getVoiceByURI(uri) {
    return this.voices.find((v) => v.voiceURI === uri) || null;
  }

  speak(text, { langCode, voiceURI, rate }) {
    if (!this.synth) return Promise.resolve();
    return new Promise((resolve) => {
      const u = new SpeechSynthesisUtterance(text);
      const voice = this.getVoiceByURI(voiceURI) || this.getDefaultVoice(langCode);
      if (voice) {
        u.voice = voice;
        u.lang = voice.lang;
      } else {
        u.lang = langCode;
      }
      u.rate = rate || 1;
      this.currentUtterance = u;
      u.onend = () => resolve();
      u.onerror = (e) => resolve(e.error || "error");
      this.synth.speak(u);
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
