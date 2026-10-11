import type { ReactNode } from "react";
import { t, type Locale } from "@/content/site";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

export function PageShell({
  locale,
  alternatePath,
  children,
}: {
  locale: Locale;
  alternatePath: string;
  children: ReactNode;
}) {
  return (
    <>
      <a href="#main" className="skip-link">
        {t(locale).a11y.skip}
      </a>
      <SiteHeader locale={locale} alternatePath={alternatePath} />
      <main id="main" tabIndex={-1} className="focus:outline-none">
        {children}
      </main>
      <SiteFooter locale={locale} alternatePath={alternatePath} />
    </>
  );
}
