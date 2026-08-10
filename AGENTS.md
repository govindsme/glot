# AGENTS.md

Instructions for AI agents working on this repository.

## Project overview

Glot is a client-side, single-page web app that teaches spoken phrases in multiple
languages. English is the base language. It reads sentences from `glot.txt`, shows
each English phrase with its translations, and plays them aloud using the browser's
Web Speech API (`window.speechSynthesis`).

Learning languages (configurable, order in `CONFIG.languages`):
Hindi (`hi`), Sanskrit (`sa`), Kannada (`kn`), Tamil (`ta`).

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
  sa: { text: "सुप्रभातम्", pron: "su-pra-bhaa-tam" },
  kn: { text: "ಶುಭೋದಯ", pron: "shu-bho-da-ya" },
  ta: { text: "காலை வணக்கம்", pron: "kaa-lai va-nak-kam" }
}
```

- `text` — phrase in the target script.
- `pron` — English-letter pronunciation guide shown below the phrase
  (closest English approximation; English lacks some sounds, so it is phonetic).

When adding phrases to `glot.txt`, you MUST add matching entries to `TRANSLATIONS`
for all four languages (`hi`, `sa`, `kn`, `ta`). Missing entries render
"No translation available yet." Keep it that way — never fail hard.

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

## Settings & persistence

- Settings modal: checkboxes enable/disable languages (hidden when unchecked),
  per-language voice dropdown, speed, pause durations.
- Persisted in `localStorage` under key `glot-settings` (see `STORAGE_KEY`).
- `CONFIG` holds defaults. When a language is disabled, it is hidden from the
  display and skipped during playback.

## Versioning

Strict semantic versioning: `V[major].[minor].[patch]` (e.g. `v1.1.0`).

- The current version lives in `CONFIG.version` (js/config.js) and is shown in the UI header
  in a smaller font, directly under the "Glot" title.
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
- If you change `glot.txt`, update `js/data.js` translations for all 4 languages and
  re-run the coverage check against the parser output.
- Do not commit unless explicitly asked.
