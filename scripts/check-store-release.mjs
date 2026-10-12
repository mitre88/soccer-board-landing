// Production gate. The site describes SoccerBoard Tactics AI 2.0.0 (iOS 26.4 or later), so it may
// replace the live site only once the public App Store record shows that release in both
// storefronts the site speaks to. Exits 1 until then. Read-only: one public lookup per storefront.
//
//   npm run release:check
//   EXPECT_VERSION=2.0.1 EXPECT_MIN_OS=26.4 npm run release:check
const APP_STORE_ID = "6762029244"; // same as content/site.ts
const expectVersion = process.env.EXPECT_VERSION ?? "2.0.0";
const expectMinOS = process.env.EXPECT_MIN_OS ?? "26.4";

let ready = true;
for (const country of ["us", "mx"]) {
  let app;
  try {
    const response = await fetch(`https://itunes.apple.com/lookup?id=${APP_STORE_ID}&country=${country}`, {
      signal: AbortSignal.timeout(20_000),
    });
    app = (await response.json()).results?.[0];
  } catch (error) {
    console.error(`${country}: lookup failed (${error instanceof Error ? error.message : error})`);
    ready = false;
    continue;
  }
  const live = app?.version === expectVersion && app?.minimumOsVersion === expectMinOS;
  console.log(
    `${country}: version ${app?.version ?? "?"}, minimum iOS ${app?.minimumOsVersion ?? "?"}` +
      (live ? " (ok)" : ` (needs ${expectVersion}, iOS ${expectMinOS})`),
  );
  ready &&= live;
}

if (!ready) {
  console.error("The App Store does not show this release yet. Keep production on the current site.");
  process.exit(1);
}
console.log("The App Store shows the release this site describes.");
