import type { MetadataRoute } from "next";
import { LEGAL_UPDATED_ISO, SITE_URL, locales, localePath } from "@/content/site";

const PATHS = ["/", "/privacy-policy", "/support", "/terms-of-service"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(`${LEGAL_UPDATED_ISO}T00:00:00Z`);
  return PATHS.flatMap((path) =>
    locales.map((locale) => ({
      url: `${SITE_URL}${localePath(locale, path)}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : 0.5,
      alternates: {
        languages: {
          en: `${SITE_URL}${localePath("en", path)}`,
          "es-MX": `${SITE_URL}${localePath("es", path)}`,
          "x-default": `${SITE_URL}${localePath("en", path)}`,
        },
      },
    })),
  );
}
