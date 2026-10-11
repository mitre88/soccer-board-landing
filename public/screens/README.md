# public/screens — real app captures only

The site reads this folder at build time (`content/screens.ts`). A slot whose file is missing
renders **nothing**: no placeholder, no drawn pitch, no mock UI. Drop a real capture in, rebuild,
and it appears.

## Rules

- Real captures of the merged SoccerBoard Tactics AI 2.0 build (the archived commit), seeded from
  `fixtures/store-1.1.0`, top camera only.
- Allowed: `simctl status_bar` override, cropping, resizing, format conversion.
- Not allowed: retouching, compositing, redrawn or edited UI. Coach text exactly as generated,
  captured after streaming ends. A capture that shows "Rule-based" must not illustrate the AI cards.
- The alt text for each slot lives in `content/screens.ts` and describes what the capture should
  show. If a capture shows something else, update the alt text in the same commit.

## Filenames

`<name>[-en|-es][-light|-dark].<webp|png|jpg|avif>`

- No locale suffix: used on both languages (only for captures with no interface text).
- No theme suffix: light. A missing dark file falls back to light.
- Spanish pages fall back to English captures. English pages never show Spanish captures.
- Capture Spanish separately (`-AppleLanguages "(es-MX)"`); the store lane reuses English images.

| Expected file (base name) | Accepted alias | Where it shows | Should show |
|---|---|---|---|
| `duo-open-coach-desk` | `duo-open-desk` | Hero, iPhone Duo (open) | Inner display flat: board with an applied lineup + coach panel showing that result |
| `duo-closed-board` | | iPhone Duo (closed) | Outer display, compact board, same lineup |
| `duo-half-open` | `duo-half-desk` | iPhone Duo (half open) | Half-folded, same session, board and coach panel side by side |
| `iphone-ai-lineup` | `iphone-coach-build` | AI coach | Plan chips picked + the suggested lineup and explanation (on-device model available) |
| `iphone-analysis` | `iphone-coach-analyze` | AI coach | Amber ghosts, arrows, badges 1–3 + adjustment rows |
| `iphone-insight` | `iphone-coach-insight` | AI coach | Insight pill over the board |
| `iphone-3d-board` | `iphone-board-3d` | 3D board | 11-a-side, tokens with light and shadow |
| `iphone-format-11` / `-7` / `-futsal` | | Built for every squad | One capture per format |
| `ipad-board` | | not rendered | Accepted but unused: the site makes no iPad claims |

## Files in this folder now

| File | Source | Notes |
|---|---|---|
| `duo-closed-board-es.webp` | `ios-pipeline/SoccerBoard/2.0.0-8/evidence/duo/03-closed-light.png` (1398 × 2034, captured 2026-10-10 16:50, board lane build `feat/board-duo`, Spanish UI, light) | Resized to 1080 px wide, WebP q90. Spanish page only. |
| `board-pitch.webp` | Crop of the same capture: x 217, y 419, 892 × 1340 (pitch only, no interface text) | Hero fallback until `duo-open-coach-desk` exists. Both languages. |
| `board-closeup.webp` | Crop of the same capture: x 217, y 419, 892 × 600 | 3D board fallback until `iphone-3d-board` exists. Both languages. |

These three come from a lane build, not the merged archive. Replace them with captures from the
merged 2.0 build before the site is promoted to production.
