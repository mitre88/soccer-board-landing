# Captures in public/screens — real app captures only

These notes live outside `public/` so they are never served. The site reads `public/screens` at
build time (`content/screens.ts`). A slot whose file is missing renders **nothing**: no
placeholder, no drawn pitch, no mock UI. Drop a real capture in, rebuild, and it appears.

## Rules

- Production captures come from the SoccerBoard Tactics AI 2.0.0 (8) raw simulator captures in
  `ios-pipeline/SoccerBoard/2.0.0-8/screenshots/raw/<en-US|es-MX>/` (see its `MANIFEST.md`), never
  from the composed store images in `screenshots/final/` (those carry headlines).
- The tilted Broadcast View camera may appear: the submitted listing (`metadata.with-broadcast.json`)
  names Broadcast View and Behind the Goal.
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
- Capture Spanish separately (`-AppleLanguages "(es)" -AppleLocale es_MX`).
- No theme suffix: light. A missing dark file falls back to light, so every slot needs a `-dark`
  file for the night match.

| Expected file (base name) | Accepted alias | Where it shows | Should show |
|---|---|---|---|
| `hero-pitch` | `pitch` | Hero, from 900 px | The pitch alone, cropped from a board capture (no interface). Portrait full pitch from the inner display, shown 400 CSS px wide |
| `hero-pitch-band` | | Hero, below 900 px (only with a portrait `hero-pitch`) | A band of the same pitch, full width, so the App Store badge stays near the first screen |
| `duo-open-coach-desk` | `duo-open-desk` | iPhone Duo (open), first | Inner display flat: the board + the coach panel side by side |
| `duo-closed-board` | | iPhone Duo (closed) | Outer display, compact board (top or tilted camera) |
| `duo-half-open` | `duo-half-desk` | iPhone Duo (half open) | Half-folded, board and coach panel on the two pages. A flat simulator capture looks like the open desk, so none ships |
| `iphone-ai-lineup` | `iphone-coach-build` | AI coach row | The suggested-lineup card from the coach, cropped to its own panel down to Apply to board |
| `iphone-analysis` | `iphone-coach-analyze` | AI coach row | Analysis cards marked On-device AI only, each with Apply. Never the rule-based card |
| `iphone-insight` | `iphone-coach-insight` | AI coach row | Insight rows under "ON THE BOARD" in the coach panel |
| `iphone-3d-board` | `iphone-board-3d` | Board section | The pitch alone in perspective (Broadcast View), with a little canvas around it |
| `board-closeup` | | Board section, only while `iphone-3d-board` is missing | A close-up crop of the board |
| `iphone-format-11` / `-7` / `-futsal` | | Built for every squad (tiles appear only when one exists) | One capture per format |
| `ipad-board` | | not rendered | Accepted but unused: the site shows no iPad captures |

## Files in this folder now (2.0.0 (8) raws, exported 2026-10-12)

Sources are relative to `ios-pipeline/SoccerBoard/2.0.0-8/screenshots/raw/` (Debug build of 63c42a8,
2.0.0 (8), light appearance, status bar 9:41). Export: crop and Lanczos resize in PIL, RGB, then
`cwebp -q 82 -m 6 -sharp_yuv -metadata none`. Boxes are `left, top, right, bottom` in source pixels.

| File | Source (sha256 prefix) | Box → size | sha256 | Shows |
|---|---|---|---|---|
| `duo-open-coach-desk-en.webp` | `en-US/duo/01-desk-lineup.png` (406b87dfdf94093d), 2853 × 2007 | full frame → 2000 × 1407 | `34659e9887bb70eecc198bbb311161498fbd253cb0e0d4c5e8b6ef5c66c2f715` | Inner display: board (both teams, two runs, red zone) + coach panel with the suggested 5-3-2, its on-device explanation and Apply to board, not yet tapped |
| `duo-open-coach-desk-es.webp` | `es-MX/duo/01-desk-lineup.png` (10151360b775d3ec) | full frame → 2000 × 1407 | `847d929d03a7f8c27c453f035bffb4c55591eddb8a910bcfa586d812856e76c6` | Same, in Spanish (model wording as generated) |
| `duo-closed-board-en.webp` | `en-US/duo/04-cover-3d.png` (e1986c9ab2b3ddce), 1398 × 2034 | full frame → 900 × 1309 | `e966ecdc4b81e32499197c981e929740d3d18aa4812147b13b1344092361428d` | Outer display: compact board in the Broadcast View camera, tools left, tabs right |
| `duo-closed-board-es.webp` | `es-MX/duo/04-cover-3d.png` (ad098f2d233998c6) | full frame → 900 × 1309 | `0278571d7dc891fddd264ea64acb5cdfbdb0e63fec6a8677633f0a36727a92c6` | Same, Spanish board title |
| `iphone-ai-lineup-en.webp` | `en-US/iphone69/01-ai-lineup.png` (acbb337c983833cf), 1320 × 2868 | 48, 397, 1272, 2011 → 1224 × 1614 | `4474f5302172b182149e98fa4ad4e10fc489c6083cd3a3728a842b02567d0138` | The suggested-lineup panel, edge to edge, from its top to 48 px under Apply to board (the panel's own padding) |
| `iphone-ai-lineup-es.webp` | `es-MX/iphone69/01-ai-lineup.png` (c59d812462147488) | 48, 397, 1272, 2156 → 1224 × 1759 | `4dee656f9fc68cce98111d1c4e22ea52505c4ed971ced2c995143f79ab45f211` | Same, Spanish (longer explanation) |
| `iphone-analysis-en.webp` | `en-US/iphone69/02-analysis.png` (d410501e3467fa43) | 48, 687, 1272, 1927 → 1224 × 1240 | `296ecc875fe08935b7a377d898797a9eac20ec6b3e58505a69adca45a5f25294` | Cards 1 and 2 (On-device AI). Card 3 is rule-based and stays out |
| `iphone-analysis-es.webp` | `es-MX/iphone69/02-analysis.png` (3e460bc42cfb4646) | 48, 627, 1272, 1867 → 1224 × 1240 | `48d020885044d25a0c90754729f985f372e9fa83c26e23d5b80106eb6e2625c2` | Same, Spanish |
| `hero-pitch.webp` | `en-US/duo/01-desk-lineup.png` (406b87dfdf94093d) | 288, 294, 1331, 1857 → 1043 × 1563 | `d2c755f06bbc64b521f172c63c02207b62761f52b807c23ed1315f8f358e5d40` | The whole pitch from above, no interface. Pixel-identical in the es-MX raw |
| `hero-pitch-band.webp` | same | 288, 552, 1331, 1230 → 1043 × 678 | `ae4d8cb638b014c78c31cf57ecbeb88d8e23df03c4be343835898a483e0698cd` | Penalty arc to just past halfway: tokens 6, 8, 10, 7, 9, 11, both runs, centre circle |
| `iphone-3d-board.webp` | `en-US/iphone69/03-board-3d.png` (7551d80a54533dc6) | 234, 1105, 1190, 1895 → 956 × 790 | `05f0c997a105fbaf2aa2a8076635998ae48f56bb63ff9f365d40a3d1d0496306` | The pitch in the Broadcast View camera (bbox 274–1149 × 1145–1854 plus 40 px of canvas). Pixel-identical in the es-MX raw |

`assets/og/board-pitch.png` (social cards): `en-US/duo/01-desk-lineup.png`, box 288, 752, 1331, 1230,
resized to 894 × 410, PNG, sha256 `0397c71e6b679e4bb477d5427b39e47b2efe2eb2c812beaed753cd40f1565eff`
(tokens 7, 9, 11, both runs, centre circle).

Removed: the pre-release crops from 2026-10-10 (`hero-pitch` midfield band and its `-dark`,
`board-closeup`, `iphone-ai-lineup-en` from the AI-lane build) and the old OG band.

## Still missing

- **Dark captures.** All 26 raws are light appearance, so the night match shows day captures. Recapture
  the same shots from the 2.0.0 (8) build in dark appearance (`xcrun simctl ui <udid> appearance dark`,
  same `-sbShotSeed` / `-sbShotScreen` / `-sbShotCoach` / `-sbShotBroadcast` hooks and status-bar
  override, see the raw `MANIFEST.md`), then add `<name>[-en|-es]-dark.webp` for every file above
  with the same boxes and re-crop the OG band from the dark pitch. Coach text in the dark shots is a
  new generation: keep it exactly as captured.
- `iphone-insight` and the per-format tiles: no raw shows them on their own.

## Deploying

- Previews (`vercel deploy` without `--prod`) are for review only. Vercel serves preview URLs with
  `X-Robots-Tag: noindex` by default; keep Deployment Protection on and never give a preview a
  custom domain.
- Production only through `npm run deploy:prod`. It runs `npm run release:check` first, which stops
  unless the public lookup (`https://itunes.apple.com/lookup?id=6762029244`, US and MX storefronts)
  returns version 2.0.0 with minimum iOS 26.4, that is, once 2.0.0 is live on the App Store.
