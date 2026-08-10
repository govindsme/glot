const engine = new SpeechEngine();

const $ = (sel) => document.querySelector(sel);

const STORAGE_KEY = "glot-settings";

const state = {
  chapters: [],
  phrases: [],
  current: 0,
  playing: false,
  stopToken: 0,
  activeLang: null,
  settings: loadSettings(),
};

function defaultSettings() {
  const enabled = {};
  const voices = {};
  for (const key of Object.keys(CONFIG.languages)) {
    enabled[key] = CONFIG.languages[key].enabled;
    voices[key] = "";
  }
  voices.en = "";
  return {
    enabled,
    voices,
    theme: "dark",
    speed: CONFIG.speed,
    pauseBetweenLanguages: CONFIG.pauseBetweenLanguages,
    pauseBeforeNextEnglish: CONFIG.pauseBeforeNextEnglish,
  };
}

function loadSettings() {
  const base = defaultSettings();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return base;
    const saved = JSON.parse(raw);
    return {
      enabled: { ...base.enabled, ...(saved.enabled || {}) },
      voices: { ...base.voices, ...(saved.voices || {}) },
      theme: saved.theme || base.theme,
      speed: saved.speed ?? base.speed,
      pauseBetweenLanguages: saved.pauseBetweenLanguages ?? base.pauseBetweenLanguages,
      pauseBeforeNextEnglish: saved.pauseBeforeNextEnglish ?? base.pauseBeforeNextEnglish,
    };
  } catch (e) {
    return base;
  }
}

function saveSettings() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.settings));
}

function enabledLangs() {
  return Object.keys(CONFIG.languages)
    .filter((k) => state.settings.enabled[k])
    .sort((a, b) => CONFIG.languages[a].order - CONFIG.languages[b].order);
}

function translationsFor(englishText, langKey) {
  const entry = TRANSLATIONS[englishText];
  return entry ? entry[langKey] || null : null;
}

async function init() {
  $("#versionTag").textContent = "v" + CONFIG.version;
  applyTheme(state.settings.theme);
  buildSpeedSelect();
  bindEvents();
  engine.onvoiceschanged = () => {
    renderSettings();
  };
  await loadData();
}

function applyTheme(theme) {
  if (theme === "light") {
    document.documentElement.setAttribute("data-theme", "light");
    $("#btnTheme").textContent = "\u25D1";
    $("#btnTheme").title = "Switch to dark theme";
  } else {
    document.documentElement.removeAttribute("data-theme");
    $("#btnTheme").textContent = "\u25D0";
    $("#btnTheme").title = "Switch to light theme";
  }
}

async function loadData() {
  try {
    const res = await fetch(CONFIG.dataFile);
    if (!res.ok) throw new Error(res.status);
    const text = await res.text();
    const chapters = parseGlot(text);
    if (!chapters.length) throw new Error("empty");
    state.chapters = chapters;
    state.phrases = chapters.flatMap((ch) => ch.phrases.map((p) => ({ text: p, chapter: ch.title })));
    renderChapterList();
    if (state.phrases.length) {
      state.current = 0;
      renderPhrase(0);
    } else {
      showToast("No phrases found in " + CONFIG.dataFile);
    }
  } catch (e) {
    showToast("Could not load " + CONFIG.dataFile);
    $("#phraseDisplay").innerHTML =
      '<div class="placeholder">Could not load ' + CONFIG.dataFile + ".</div>";
  }
}

function renderChapterList() {
  const list = $("#chapterList");
  list.innerHTML = "";
  let idx = 0;
  for (const ch of state.chapters) {
    const head = document.createElement("div");
    head.className = "chapter-head";
    head.innerHTML =
      '<span>' + escapeHtml(ch.title) + '</span><span class="count">' + ch.phrases.length + "</span>";
    const listEl = document.createElement("div");
    listEl.className = "phrase-list";
    for (const p of ch.phrases) {
      const item = document.createElement("div");
      item.className = "phrase-item";
      item.textContent = p;
      item.dataset.idx = idx;
      const phraseIdx = idx;
      item.addEventListener("click", () => {
        stopPlayback();
        state.current = phraseIdx;
        renderPhrase(phraseIdx);
        updateTransport();
      });
      listEl.appendChild(item);
      idx++;
    }
    head.addEventListener("click", () => {
      const hidden = listEl.style.display === "none";
      listEl.style.display = hidden ? "" : "none";
    });
    list.appendChild(head);
    list.appendChild(listEl);
  }
}

function renderPhrase(idx) {
  const phrase = state.phrases[idx];
  const langs = enabledLangs();
  const english = phrase.text;
  const enPron = null;

  let html =
    '<div class="english-card" id="card-en">' +
    '<div class="chapter-tag">' + escapeHtml(phrase.chapter) + "</div>" +
    '<div class="en">' + escapeHtml(english) + "</div>" +
    (enPron ? '<div class="en pron">' + escapeHtml(enPron) + "</div>" : "") +
    "</div>";

  html += '<div class="lang-grid">';
  for (const key of langs) {
    const tr = translationsFor(english, key);
    const cfg = CONFIG.languages[key];
    html +=
      '<div class="lang-card" id="card-' + key + '">' +
      '<div class="lang-label"><span class="dot"></span>' +
      escapeHtml(cfg.native + " · " + cfg.label) +
      "</div>";
    if (tr) {
      html += '<div class="text">' + escapeHtml(tr.text) + "</div>";
      html += '<div class="pron">" ' + escapeHtml(tr.pron) + '"</div>';
    } else {
      html += '<div class="no-data">No translation available yet.</div>';
    }
    html += "</div>";
  }
  html += "</div>";

  $("#phraseDisplay").innerHTML = html;

  document.querySelectorAll(".phrase-item").forEach((el) => {
    el.classList.toggle("active", Number(el.dataset.idx) === idx);
  });
}

function setActive(langKey) {
  state.activeLang = langKey;
  document.querySelectorAll(".lang-card, .english-card").forEach((el) => {
    el.classList.remove("speaking");
  });
  if (langKey) {
    const el = $("#card-" + langKey);
    if (el) el.classList.add("speaking");
  }
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function isCurrent(token) {
  return token === state.stopToken && state.playing;
}

async function playPhrase(idx) {
  const token = ++state.stopToken;
  state.current = idx;
  state.playing = true;
  updateTransport();
  renderPhrase(idx);

  while (state.playing && state.current < state.phrases.length) {
    if (token !== state.stopToken) break;
    const phrase = state.phrases[state.current];
    renderPhrase(state.current);

    setActive("en");
    await speakText(phrase.text, "en", token);
    if (!isCurrent(token)) break;

    const langs = enabledLangs();
    for (const key of langs) {
      await sleep(state.settings.pauseBetweenLanguages);
      if (!isCurrent(token)) break;
      const tr = translationsFor(phrase.text, key);
      if (!tr) continue;
      setActive(key);
      await speakText(tr.text, key, token);
      if (!isCurrent(token)) break;
    }

    setActive(null);
    await sleep(state.settings.pauseBeforeNextEnglish);
    if (!isCurrent(token)) break;
    state.current++;
  }

  state.playing = false;
  setActive(null);
  updateTransport();
}

function speakText(text, langKey, token) {
  const langCode = langKey === "en" ? CONFIG.english.lang : CONFIG.languages[langKey].lang;
  const voiceURI = state.settings.voices[langKey] || "";
  return engine.speak(text, { langCode, voiceURI, rate: state.settings.speed }).then(() => {
    if (token !== state.stopToken) engine.cancel();
  });
}

function stopPlayback() {
  state.stopToken++;
  state.playing = false;
  engine.cancel();
  setActive(null);
  updateTransport();
}

function updateTransport() {
  $("#btnPlay").textContent = state.playing ? "\u275A\u275A" : "\u25B6";
  $("#btnPrev").disabled = state.phrases.length === 0;
  $("#btnNext").disabled = state.phrases.length === 0;
}

function buildSpeedSelect() {
  const sel = $("#speedSelect");
  sel.innerHTML = "";
  for (const s of CONFIG.speedOptions) {
    const opt = document.createElement("option");
    opt.value = s;
    opt.textContent = s + "x";
    sel.appendChild(opt);
  }
  sel.value = String(state.settings.speed);
  sel.addEventListener("change", () => {
    state.settings.speed = parseFloat(sel.value);
    saveSettings();
  });
}

function bindEvents() {
  $("#btnPrev").addEventListener("click", () => {
    if (!state.phrases.length) return;
    stopPlayback();
    state.current = (state.current - 1 + state.phrases.length) % state.phrases.length;
    renderPhrase(state.current);
    updateTransport();
  });

  $("#btnNext").addEventListener("click", () => {
    if (!state.phrases.length) return;
    stopPlayback();
    state.current = (state.current + 1) % state.phrases.length;
    renderPhrase(state.current);
    updateTransport();
  });

  $("#btnPlay").addEventListener("click", () => {
    if (!state.phrases.length) return;
    if (state.playing) {
      stopPlayback();
    } else {
      playPhrase(state.current);
    }
  });

  $("#btnStop").addEventListener("click", () => stopPlayback());

  $("#btnTheme").addEventListener("click", () => {
    const next = state.settings.theme === "light" ? "dark" : "light";
    state.settings.theme = next;
    saveSettings();
    applyTheme(next);
  });

  $("#btnSettings").addEventListener("click", () => {
    renderSettings();
    $("#settingsModal").classList.remove("hidden");
  });

  $("#btnCancelSettings").addEventListener("click", () => {
    $("#settingsModal").classList.add("hidden");
  });

  $("#btnSaveSettings").addEventListener("click", () => {
    collectSettingsFromForm();
    saveSettings();
    $("#settingsModal").classList.add("hidden");
    if (state.phrases.length) renderPhrase(state.current);
    buildSpeedSelect();
    showToast("Settings saved.");
  });
}

function renderSettings() {
  const toggles = $("#langToggles");
  toggles.innerHTML = "";
  const keys = Object.keys(CONFIG.languages).sort(
    (a, b) => CONFIG.languages[a].order - CONFIG.languages[b].order
  );
  for (const key of keys) {
    const cfg = CONFIG.languages[key];
    const row = document.createElement("label");
    row.className = "toggle-row";
    row.innerHTML =
      '<input type="checkbox" data-lang="' + key + '" ' +
      (state.settings.enabled[key] ? "checked" : "") +
      " /> " +
      escapeHtml(cfg.native + " (" + cfg.label + ")");
    toggles.appendChild(row);
  }

  const voices = $("#voiceSelects");
  voices.innerHTML = "";
  const voiceRows = [
    { key: "en", name: "English" },
    ...keys.map((k) => ({ key: k, name: CONFIG.languages[k].label })),
  ];
  for (const v of voiceRows) {
    const row = document.createElement("div");
    row.className = "voice-row";
    row.innerHTML =
      '<span class="lang-name">' + escapeHtml(v.name) + "</span>";
    const sel = document.createElement("select");
    sel.dataset.voice = v.key;
    const langCode = v.key === "en" ? CONFIG.english.lang : CONFIG.languages[v.key].lang;

    const optDefault = document.createElement("option");
    optDefault.value = "";
    optDefault.textContent = "System default";
    sel.appendChild(optDefault);

    const langVoices = engine.getVoicesForLang(langCode);
    for (const vc of langVoices) {
      const opt = document.createElement("option");
      opt.value = vc.voiceURI;
      opt.textContent = vc.name + " (" + vc.lang + ")";
      sel.appendChild(opt);
    }
    sel.value = state.settings.voices[v.key] || "";
    if (sel.value === "" && langVoices.length && engine.getDefaultVoice(langCode)) {
      sel.value = engine.getDefaultVoice(langCode).voiceURI;
    }
    if (!sel.value && langVoices.length) sel.value = langVoices[0].voiceURI;

    sel.addEventListener("change", () => {
      state.settings.voices[v.key] = sel.value;
    });
    row.appendChild(sel);
    voices.appendChild(row);
  }

  $("#pauseBetween").value = state.settings.pauseBetweenLanguages;
  $("#pauseBeforeNext").value = state.settings.pauseBeforeNextEnglish;
}

function collectSettingsFromForm() {
  document.querySelectorAll('#langToggles input[data-lang]').forEach((input) => {
    state.settings.enabled[input.dataset.lang] = input.checked;
  });
  document.querySelectorAll('#voiceSelects select[data-voice]').forEach((sel) => {
    state.settings.voices[sel.dataset.voice] = sel.value;
  });
  const pb = parseInt($("#pauseBetween").value, 10);
  const pn = parseInt($("#pauseBeforeNext").value, 10);
  if (!isNaN(pb)) state.settings.pauseBetweenLanguages = Math.max(0, pb);
  if (!isNaN(pn)) state.settings.pauseBeforeNextEnglish = Math.max(0, pn);
}

function showToast(msg) {
  const t = $("#statusToast");
  t.textContent = msg;
  t.classList.remove("hidden");
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => t.classList.add("hidden"), 3000);
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

document.addEventListener("DOMContentLoaded", init);
