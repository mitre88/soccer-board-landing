import Image from "next/image";
import { APP_NAME, CONTACT_EMAIL, localePath, t, type Locale } from "@/content/site";
import { LanguageSwitch } from "./LanguageSwitch";

export function SiteFooter({ locale, alternatePath }: { locale: Locale; alternatePath: string }) {
  const d = t(locale);
  const legal = [
    { href: localePath(locale, "/privacy-policy"), label: d.footer.privacy },
    { href: localePath(locale, "/terms-of-service"), label: d.footer.terms },
    { href: localePath(locale, "/support"), label: d.footer.support },
  ];

  return (
    <footer className="bg-surface">
      <div className="container-x grid gap-10 py-12 md:grid-cols-[minmax(0,1fr)_auto] md:items-start md:py-14">
        <div className="flex flex-col gap-4">
          <a href={`${localePath(locale, "/")}#top`} className="flex w-fit items-center gap-2.5 rounded-lg">
            <Image src="/brand/app-icon.png" alt="" width={28} height={28} className="rounded-[6px]" />
            <span className="text-[0.9375rem] font-semibold text-ink">{APP_NAME}</span>
          </a>
          <p className="t-note">
            {d.footer.contact}:{" "}
            <a className="t-link break-words" href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL}
            </a>
          </p>
          <p className="t-note">{d.footer.copyright}</p>
        </div>
        <div className="flex flex-col gap-5 md:items-end">
          <nav aria-label={d.a11y.legalNav}>
            <ul role="list" className="flex flex-wrap gap-x-6 gap-y-2">
              {legal.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="inline-flex min-h-11 items-center text-[0.9375rem] font-medium text-ink-2 underline-offset-4 transition-colors duration-150 hover:text-ink hover:underline md:min-h-0"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <LanguageSwitch locale={locale} alternatePath={alternatePath} groupLabel={d.a11y.language} />
        </div>
      </div>
    </footer>
  );
}
