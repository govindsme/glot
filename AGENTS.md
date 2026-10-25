# AGENTS.md

Instructions for AI agents working on this repository.

## Project overview

Glot is a client-side, single-page web app that teaches spoken phrases in multiple
languages. English is the base language. It reads sentences from `glot.txt`, shows
each English phrase with its translations, and plays them aloud using the browser's
Web Speech API (`window.speechSynthesis`).

Learning languages (configurable, order in `CONFIG.languages`):
Hindi (`hi`), Kannada (`kn`), Tamil (`ta`).

## Content source

The app replicates the **Quick Reference** revision content from the Dutch Lesson
Revisor (`https://dutch-lesson-revisor.ai.studio/`) in a phased, day-by-day manner,
with **English as the base language**. Only the English base phrases are taken from
the Quick Reference; Sanskrit and Dutch are excluded. The Hindi/Kannada/Tamil
translations are authored in this repo (`js/data.js`).

Progress so far — **Phase 1 (Day 1)**: verb conjugations ("be happy" across present,
past, perfect, future + modal can/must/may/want), "have/has"/"had a car", and
tense-contrast questions. Each lesson day is a separate set of chapters in `glot.txt`.

## Architecture

- `index.html` — markup, load order of scripts
- `css/style.css` — all styling
- `js/config.js` — `CONFIG`: data file name, speed options, pause durations, language list
- `js/parser.js` — `parseGlot(text)`: parses `glot.txt` into `[{ title, phrases[] }]`
- `js/data.js` — `TRANSLATIONS`: per-English-phrase translations keyed by language
- `js/engine.js` — `SpeechEngine` wrapper around `speechSynthesis` (voices, speak/cancel)
- `js/app.js` — state, rendering, playback loop, settings modal, localStorage persistence

No build step, no framework, no dependencies. Scripts load in this order:
config, parser, data, engine, app. Keep it that way.

## glot.txt format (source data)

- Chapter headings: zero indentation.
- Phrases: one level of indentation (tab or spaces).
- Lines starting with `#` are ignored (comments).
- Keep blank lines allowed. Trailing whitespace is stripped.

The file lives at repo root and is version-controlled. `CONFIG.dataFile` defaults to
`"glot.txt"` fetched relative to the page.

## Translations data format (js/data.js)

`TRANSLATIONS` is keyed by the exact English phrase text (must match `glot.txt`).

```js
"Good Morning": {
  hi: { text: "सुप्रभात", pron: "su-pra-bhaat" },
  kn: { text: "ಶುಭೋದಯ", pron: "shu-bho-da-ya" },
  ta: { text: "காலை வணக்கம்", pron: "kaa-lai va-nak-kam" }
}
```

- `text` — phrase in the target script.
- `pron` — English-letter pronunciation guide shown below the phrase
  (closest English approximation; English lacks some sounds, so it is phonetic).

When adding phrases to `glot.txt`, you MUST add matching entries to `TRANSLATIONS`
for all three languages (`hi`, `kn`, `ta`). Missing entries render
"No translation available yet." Keep it that way — never fail hard.

## Fonts

Language cards carry script classes (`lang-hi`, `lang-kn`, `lang-ta`) and the CSS
assigns each an appropriate system font stack (`Noto Sans Devanagari/Kannada/Tamil`,
`Nirmala UI`, `Mangal`/`Mallige`/`Latha`, `Lohit ...`) so Indic scripts render on any
platform. No external font files are bundled.

## Playback behaviour (js/app.js)

For each English phrase, in order:
1. Speak the English phrase (`en`).
2. For each enabled language (config order): pause `pauseBetweenLanguages` ms,
   then speak its translation.
3. After all languages for the current English phrase are done, pause
   `pauseBeforeNextEnglish` ms (default **2000 ms** — required by product spec)
   before moving to the next English phrase.

- "System default voice" = the voice marked `default: true` in the browser for that
  language; if none, the first voice for that language. Selected automatically.
- Users override voices per language in Settings; persisted as voiceURIs.
- Some target languages may have **no installed voice** on the user's OS/browser
  (e.g. Kannada/Tamil on Chrome/Windows). The app detects this and shows a clear
  "No voice available on this device" note on the language card and in Settings —
  it never fails hard, it just cannot produce sound the OS has no voice for.
- Edge desktop often exposes only **"Online (Natural)"** neural voices for Indian
  languages. These appear in `getVoices()` but the Web Speech API cannot actually
  play them through `speechSynthesis` (only local voices work there). The app
  detects remote/online voices (`engine.isRemoteVoice` / `hasPlayableVoice`) and
  labels them "(online)" and warns when a language has only unplayable voices.

## Settings & persistence

- Settings modal: checkboxes enable/disable languages (hidden when unchecked),
  per-language voice dropdown, speed, pause durations.
- Persisted in `localStorage` under key `glot-settings` (see `STORAGE_KEY`).
- `CONFIG` holds defaults. When a language is disabled, it is hidden from the
  display and skipped during playback.
- Color themes: dark (default) and light. Toggle button (`#btnTheme`) in the header;
  choice persisted in `settings.theme`. Themes are defined as CSS custom properties on
  `:root` / `[data-theme="light"]`; all colors must come from these variables.
  `applyTheme()` always sets `data-theme="light"` or `data-theme="dark"` explicitly on
  `<html>` (never removes it), so the `@media (prefers-color-scheme: light)` fallback
  only ever applies before JS runs — it must not override an explicit choice.

## Versioning

Strict semantic versioning: `V[major].[minor].[patch]` (e.g. `v1.1.0`).

- The current version lives in `CONFIG.version` (js/config.js) and is shown in the UI header
  in a smaller font, directly under the "Glot" title, and in the page `<title>` ("Glot vX.Y.Z — Phrase Player").
- Git tags mirror the version exactly (`v1.1.0`). Bump `CONFIG.version` and tag the same commit.
- Increment rules:
  - `major` — breaking changes (data format, settings schema, incompatible behaviour).
  - `minor` — backwards-compatible features (new languages, new settings, new UI).
  - `patch` — bug fixes, wording, cosmetic changes.

## Conventions / rules for agents

- Keep single-file-per-concern structure; do not introduce build steps.
- Use `escapeHtml()` for any dynamic text injected into the DOM.
- Do not add comments unless asked. Match existing naming style (camelCase, const).
- Verify with `node --check js/*.js` after editing JS.
- Run `python3 -m http.server <port>` from repo root to test; the app must be served
  over HTTP (fetch of `glot.txt` will not work from `file://`).
- If you change `glot.txt`, update `js/data.js` translations for all 3 languages and
  re-run the coverage check against the parser output.
- Do not commit unless explicitly asked.
