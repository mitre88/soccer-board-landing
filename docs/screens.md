# Captures in public/screens — real app captures only

These notes live outside `public/` so they are never served. The site reads `public/screens` at
build time (`content/screens.ts`). A slot whose file is missing
renders **nothing**: no placeholder, no drawn pitch, no mock UI. Drop a real capture in, rebuild,
and it appears.

## Rules

- Real captures of the merged SoccerBoard Tactics AI 2.0 build (the archived commit), seeded from
  `fixtures/store-1.1.0`, top camera only.
- Allowed: `simctl status_bar` override, cropping, resizing, format conversion.
- Not allowed: retouching, compositing, redrawn or edited UI. Coach text exactly as generated,
  captured after streaming ends. A capture that shows "Rule-based" must not illustrate the AI cards.
- The alt text for each slot lives in `content/screens.ts` and describes what the capture shows.
  If a new capture shows something else, update the alt text in the same commit.

## Filenames

`<name>[-en|-es][-light|-dark].<webp|png|jpg|avif>`

- No locale suffix: used on both languages (only for captures with no interface text).
- No theme suffix: light. A missing dark file falls back to light.
- Spanish pages fall back to English captures. English pages never show Spanish captures.
- Capture Spanish separately (`-AppleLanguages "(es-MX)"`); the store lane reuses English images.

| Expected file (base name) | Accepted alias | Where it shows | Should show |
|---|---|---|---|
| `duo-open-coach-desk` | `duo-open-desk` | Hero, iPhone Duo (open) | Inner display flat: board with an applied lineup + coach panel showing that result |
| `duo-closed-board` | | iPhone Duo (closed); hero until the open desk exists | Outer display, compact board, same lineup |
| `duo-half-open` | `duo-half-desk` | iPhone Duo (half open) | Half-folded, same session, board and coach panel side by side |
| `iphone-ai-lineup` | `iphone-coach-build` | AI coach | Plan chips picked + the suggested lineup and explanation (on-device model available) |
| `iphone-analysis` | `iphone-coach-analyze` | AI coach | Ghosts, arrows, badges 1–3 + adjustment rows, all from the on-device model |
| `iphone-insight` | `iphone-coach-insight` | AI coach | Insight pill over the board |
| `iphone-3d-board` | `iphone-board-3d` | 3D board | 11-a-side, tokens with light and shadow |
| `iphone-format-11` / `-7` / `-futsal` | | Built for every squad | One capture per format |
| `ipad-board` | | not rendered | Accepted but unused: the site makes no iPad claims |

When a capture is used as the hero, the iPhone Duo section does not repeat it (except the open
desk, which the design shares on purpose).

## Files in this folder now (pre-release 2.0 builds, 2026-10-10)

| File | Source | Notes |
|---|---|---|
| `duo-closed-board-es.webp` | Outer display capture, 1398 × 2034, Spanish UI, light (16:50 board build; the original PNG was later replaced in `evidence/duo`) | Resized to 1080 px wide. Spanish hero. |
| `duo-closed-board.webp` | Same capture without its navigation title row (the only interface text), 1080 × 1407 | English hero. |
| `board-closeup.webp` | Same capture, crop x 217, y 419, 892 × 600 (one half of the pitch) | 3D board, both languages, until `iphone-3d-board` exists. |
| `iphone-ai-lineup-en.webp` | `evidence/ai/coach-closed-lineup.png` (sha256 4bd2cd39d4fa…), crop x 0, y 70, 1140 × 1964, resized to 900 px | The suggested-lineup card with the on-device explanation. The tab rail and the button edge above the card are outside the crop. |

Not used, on purpose: the open-display captures from the board build (they still show the 1.x
coach panel), the full coach frames (they show the old AI tab glyph), the analysis frame (two of
its three cards are rule-based) and the tilted camera captures (the site does not show that view).

Replace everything here with captures from the merged 2.0 build before the site goes to production.
