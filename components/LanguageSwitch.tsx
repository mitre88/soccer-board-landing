import type { Locale } from "@/content/site";

const LANGUAGES = [
  { code: "en", label: "EN", name: "English", lang: "en" },
  { code: "es", label: "ES", name: "Español", lang: "es-MX" },
] as const;

// EN | ES segmented switch. The current language is marked, the other one links to the same page.
export function LanguageSwitch({
  locale,
  alternatePath,
  groupLabel,
  large = false,
}: {
  locale: Locale;
  alternatePath: string;
  groupLabel: string;
  large?: boolean;
}) {
  const item = large
    ? "inline-flex min-h-11 min-w-14 items-center justify-center rounded-full px-4 text-[0.9375rem] font-semibold"
    : "inline-flex min-h-8 items-center justify-center rounded-full px-3 text-[0.8125rem] font-semibold";
  return (
    <div role="group" aria-label={groupLabel} className="inline-flex items-center gap-0.5 rounded-full bg-control p-1">
      {LANGUAGES.map((language) =>
        language.code === locale ? (
          <span key={language.code} aria-current="true" lang={language.lang} className={`${item} bg-surface text-ink`}>
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
