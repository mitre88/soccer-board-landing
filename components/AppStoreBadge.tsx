import { APP_STORE_URL, t, type Locale } from "@/content/site";

// Official, unmodified "Download on the App Store" artwork (black by day, white by night).
// Lazy by default: React preloads every eager <img>, and most badges sit in a collapsed menu, a
// header slot hidden below 1440 px or the last section. Only the hero badge loads eagerly.
const RATIO = 119.66407 / 40;

export function AppStoreBadge({
  locale,
  height = 52,
  className = "",
  loading = "lazy",
}: {
  locale: Locale;
  height?: number;
  className?: string;
  loading?: "lazy" | "eager";
}) {
  const alt = t(locale).badgeAlt;
  const file = locale === "es" ? "es-mx" : "en-us";
  const width = Math.round(height * RATIO);
  return (
    <a
      href={APP_STORE_URL}
      className={`inline-flex shrink-0 rounded-[10px] transition-opacity duration-150 hover:opacity-85 ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/badges/app-store-${file}-black.svg`}
        alt={alt}
        width={width}
        height={height}
        className="only-light block"
        loading={loading}
        decoding="async"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/badges/app-store-${file}-white.svg`}
        alt={alt}
        width={width}
        height={height}
        className="only-dark"
        loading="lazy"
        decoding="async"
      />
    </a>
  );
}
