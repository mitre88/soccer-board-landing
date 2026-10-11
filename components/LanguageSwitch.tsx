import type { Locale } from "@/content/site";

const LANGUAGES = [
  { code: "en", label: "EN", name: "English", lang: "en" },
  { code: "es", label: "ES", name: "Español", lang: "es-MX" },
] as const;

const SIZES = {
  small: "min-h-8 px-3 text-[0.8125rem]",
  large: "min-h-11 min-w-14 px-4 text-[0.9375rem]",
  // 44 px segments on touch-size screens, compact from 768 px up.
  responsive: "min-h-11 min-w-14 px-4 text-[0.9375rem] md:min-h-8 md:min-w-0 md:px-3 md:text-[0.8125rem]",
} as const;

// EN | ES segmented switch. The current language is marked, the other one links to the same page.
// w-fit keeps it at its own width inside column layouts.
export function LanguageSwitch({
  locale,
  alternatePath,
  groupLabel,
  size = "small",
}: {
  locale: Locale;
  alternatePath: string;
  groupLabel: string;
  size?: keyof typeof SIZES;
}) {
  const item = `inline-flex items-center justify-center rounded-full font-semibold ${SIZES[size]}`;
  return (
    <div role="group" aria-label={groupLabel} className="inline-flex w-fit items-center gap-0.5 rounded-full bg-control p-1">
      {LANGUAGES.map((language) =>
        language.code === locale ? (
          <span key={language.code} aria-current="true" lang={language.lang} className={`${item} bg-thumb text-ink`}>
            {language.label}
            <span className="sr-only"> {language.name}</span>
          </span>
        ) : (
          <a
            key={language.code}
            href={alternatePath}
            hrefLang={language.lang}
            lang={language.lang}
            className={`${item} text-ink-2 transition-colors duration-150 hover:text-ink`}
          >
            {language.label}
            <span className="sr-only"> {language.name}</span>
          </a>
        ),
      )}
    </div>
  );
}
