# Captures in public/screens — real app captures only

These notes live outside `public/` so they are never served. The site reads `public/screens` at
build time (`content/screens.ts`). A slot whose file is missing renders **nothing**: no
placeholder, no drawn pitch, no mock UI. Drop a real capture in, rebuild, and it appears.

## Rules

- Production captures come from the archived SoccerBoard Tactics AI 2.0.0 (8) build, seeded from
  `fixtures/store-1.1.0` with the current screenshot seed, top camera only, light and dark.
- Allowed: `simctl status_bar` override, cropping, resizing, format conversion.
- Not allowed: retouching, compositing, redrawn or edited UI. Coach text exactly as generated,
  captured after streaming ends. A capture that shows "Rule-based" must not illustrate the AI cards.
- The alt text for each slot lives in `content/screens.ts` and describes what the capture shows.
  If a new capture shows something else, update the alt text in the same commit.
- Record every file below with its source and sha256.

## Filenames

`<name>[-en|-es][-light|-dark].<webp|png|jpg|avif>`

- No locale suffix: used on both languages. Only for captures with no interface text (the pitch).
- Each language shows only its own captures. A Spanish page never falls back to an English
  capture: without a `-es` file the slot renders nothing on `/es`.
- Capture Spanish separately (`-AppleLanguages "(es-MX)"`).
- No theme suffix: light. A missing dark file falls back to light, so every slot needs a `-dark`
  file for the night match.

| Expected file (base name) | Accepted alias | Where it shows | Should show |
|---|---|---|---|
| `hero-pitch` | `pitch` | Hero | The pitch alone, cropped from a board capture (no interface). Prefer a full-pitch crop from the inner display (source ≥ 1,100 px wide, shown at 400 × 600 CSS px) |
| `duo-open-coach-desk` | `duo-open-desk` | iPhone Duo (open) | Inner display flat: board with an applied lineup + coach panel showing that result |
| `duo-closed-board` | | iPhone Duo (closed) | Outer display, compact board, same lineup, cameras in the tool column |
| `duo-half-open` | `duo-half-desk` | iPhone Duo (half open) | Half-folded, same session, board and coach panel side by side |
| `iphone-ai-lineup` | `iphone-coach-build` | AI coach | Plan chips picked + the suggested lineup and explanation (on-device model available) |
| `iphone-analysis` | `iphone-coach-analyze` | AI coach | Ghosts, arrows, badges 1–3 + adjustment rows, all from the on-device model |
| `iphone-insight` | `iphone-coach-insight` | AI coach | Insight pill over the board |
| `iphone-3d-board` | `iphone-board-3d` | 3D board | 11-a-side, tokens with light and shadow |
| `board-closeup` | | 3D board, until `iphone-3d-board` exists | A close-up crop of the board |
| `iphone-format-11` / `-7` / `-futsal` | | Built for every squad (tiles appear only when one exists) | One capture per format |
| `ipad-board` | | not rendered | Accepted but unused: the site makes no iPad claims |

## Files in this folder now (pre-release builds, 2026-10-10)

None of these come from the archived 2.0.0 (8) build yet. Each crop keeps only regions that the
merged code draws the same way, and leaves out what changed later.

| File | Source (sha256 prefix) | Crop | Notes |
|---|---|---|---|
| `hero-pitch.webp` | `evidence/board/duo-closed-light.png` (e810b14fb395d5c9), outer display, 1398 × 2034, board-lane build at 17:26 | x 216, y 806, 894 × 410, no resize | Midfield band: tokens 7, 9, 11, two drawn runs, centre circle. Leaves out the floating camera cluster (moved to the tool column in d6b590d) and the red zone (gained a wash in d6b590d). |
| `hero-pitch-dark.webp` | `evidence/board/duo-closed-dark.png` (fb670f488920a288), same session | same box | Night match. |
| `board-closeup.webp` | previous `board-closeup.webp` (e157b213b2cfcba7: x 217, y 419, 892 × 600 of the 16:50 outer-display capture) | top 892 × 466 | Goal end: eight tokens and the start of the curved run. The 16:50 seed circle and the later camera cluster are outside it; pixel diff against the 17:26 capture of the same region: mean 1.5/255 outside the cameras. Light only: no dark source without the camera cluster. |
| `iphone-ai-lineup-en.webp` | `evidence/ai/coach-closed-lineup.png` (4bd2cd39d4fa841f), AI-lane build e44ce48 | x 20, y 92, 1106 × 1044, resized to 900 × 850 | Suggested-lineup card down to the "On-device AI" mark. The fact chips are outside the crop: 0a4049b cut them from 9 to 5. English only. |

`assets/og/board-pitch.png` (social cards) is the dark midfield band above (same box, PNG).

Removed on purpose: `duo-closed-board.webp` and `duo-closed-board-es.webp` (16:50 seed drew a
chalk circle under the centre circle, and the build had no camera controls), the open-display
captures from the board build (1.x coach panel), the full coach frames (old AI tab glyph), the
analysis frame (two of its three cards are rule-based) and the tilted camera captures (the site
does not show that view).

## Before production

Replace every file above with captures from the archived 2.0.0 (8) build, in light and dark, and
add the Spanish captures:

1. `hero-pitch` + `-dark` (pitch only, from the inner display if possible).
2. `duo-open-coach-desk` + `-dark`, `duo-closed-board` + `-dark` (and `-es` versions if the
   capture shows interface text).
3. `iphone-ai-lineup-en` + `-en-dark`, `iphone-ai-lineup-es` + `-es-dark` (real model narration in
   es-MX, after streaming ends).
4. `board-closeup` + `-dark`, or `iphone-3d-board` + `-dark`.
5. Re-crop `assets/og/board-pitch.png` from the new dark capture.

Update the alt texts and this table in the same commit. Deploy to production only after App Store
Connect shows 2.0.0 Ready for Distribution and `https://itunes.apple.com/lookup?id=6762029244`
returns version 2.0.0.
