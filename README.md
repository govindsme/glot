# Glot — Multi-Language Phrase Player

A client-side web app that reads sentences from `glot.txt` and plays each English
phrase aloud, followed by translations in Hindi, Sanskrit, Kannada and Tamil, using
the browser's Web Speech API.

## Run it

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

Must be served over HTTP — `glot.txt` is fetched via `fetch()` and will not load
from `file://`.

## Source data

`glot.txt` at the repo root:

```
Chapter Heading
    Phrase one
    Phrase two
```

Chapter headings have zero indentation; phrases are indented one level. Lines
starting with `#` are ignored.

## Features

- English phrase spoken first, then each enabled language in `CONFIG.languages` order.
- Pause between languages and a **2-second pause** before the next English phrase.
- Voice dropdown per language (defaults to the browser's system-default voice) and a
  global speed selector.
- Settings modal: enable/disable languages, pick voices, adjust speeds and pauses.
- Settings persist in `localStorage`.
- English-letter pronunciation shown under each translated phrase.

## Structure

| File              | Purpose                                  |
| ----------------- | ---------------------------------------- |
| `index.html`      | Markup and script load order             |
| `css/style.css`   | Styling                                  |
| `js/config.js`    | Defaults: languages, pauses, data file   |
| `js/parser.js`    | Parses `glot.txt`                        |
| `js/data.js`      | Translations + pronunciation per phrase  |
| `js/engine.js`    | Speech synthesis wrapper                 |
| `js/app.js`       | UI, playback loop, settings              |

See `AGENTS.md` for detailed conventions for AI agents working on this repo.
