import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import path from "node:path";
import type { Metadata, Viewport } from "next";
import {
  APP_NAME,
  APP_STORE_ID,
  SELLER,
  SITE_URL,
  localePath,
  ogLocale,
  otherLocale,
  t,
  type Locale,
} from "@/content/site";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#EDF1EF" },
    { media: "(prefers-color-scheme: dark)", color: "#0C120F" },
  ],
  colorScheme: "light dark",
};

export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: APP_NAME,
  authors: [{ name: SELLER }],
  creator: SELLER,
  publisher: SELLER,
  itunes: { appId: APP_STORE_ID },
  formatDetection: { telephone: false, email: false, address: false },
  robots: { index: true, follow: true },
};

type PageKey = "home" | "privacy" | "terms" | "support";

// The social cards are served with a one-year immutable cache, so their URL carries a hash of
// everything that draws them: a new crop or layout gets a new URL.
const OG_VERSION = (() => {
  const hash = createHash("sha256");
  for (const file of ["lib/og.tsx", "assets/og/board-pitch.png", "assets/og/app-icon.png"]) {
    hash.update(readFileSync(path.join(process.cwd(), file)));
  }
  return hash.digest("hex").slice(0, 10);
})();

const PATHS: Record<PageKey, string> = {
  home: "/",
  privacy: "/privacy-policy",
  terms: "/terms-of-service",
  support: "/support",
};

export function pageMetadata(locale: Locale, page: PageKey): Metadata {
  const d = t(locale).meta;
  const title = page === "home" ? d.homeTitle : d[`${page}Title`];
  const description = page === "home" ? d.homeDescription : d[`${page}Description`];
  const path = PATHS[page];
  const url = localePath(locale, path);
  const image = { url: `/og/${locale}.png?v=${OG_VERSION}`, width: 1200, height: 630, alt: d.ogAlt };

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: url,
      languages: {
        en: localePath("en", path),
        "es-MX": localePath("es", path),
        "x-default": localePath("en", path),
      },
    },
    openGraph: {
      type: "website",
      url,
      siteName: APP_NAME,
      title,
      description,
      locale: ogLocale[locale],
      alternateLocale: [ogLocale[otherLocale(locale)]],
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
