import Image from "next/image";
import { APP_NAME, localePath, t, type Locale } from "@/content/site";
import { AppStoreBadge } from "./AppStoreBadge";
import { LanguageSwitch } from "./LanguageSwitch";
import { MobileMenu } from "./MobileMenu";
import { ThemeToggle } from "./ThemeToggle";

export function SiteHeader({ locale, alternatePath }: { locale: Locale; alternatePath: string }) {
  const d = t(locale);
  const home = localePath(locale, "/");
  const links = [
    { hash: "#coach", label: d.nav.coach },
    { hash: "#board", label: d.nav.board },
    { hash: "#duo", label: d.nav.duo },
    { hash: "#whats-new", label: d.nav.whatsNew },
    { hash: "#faq", label: d.nav.faq },
  ].map((link) => ({ href: `${home}${link.hash}`, label: link.label }));

  return (
    <header className="navbar-glass sticky top-0 z-40">
      <div className="container-x relative flex h-16 items-center gap-4">
        <a href={`${home}#top`} aria-label={d.a11y.home} className="flex shrink-0 items-center gap-2.5 rounded-lg">
          <Image src="/brand/app-icon.png" alt="" width={32} height={32} className="rounded-[7px]" />
          <span className="text-[0.9375rem] font-semibold tracking-[-0.01em] text-ink">{APP_NAME}</span>
        </a>

        <nav aria-label={d.a11y.mainNav} className="ml-auto hidden xl:block">
          <ul className="flex items-center" role="list">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="inline-flex min-h-10 items-center rounded-full px-2.5 text-[0.875rem] font-medium text-ink-2 transition-colors duration-150 hover:bg-control hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-2 xl:ml-2">
          <div className="hidden items-center gap-1 xl:flex">
            <LanguageSwitch locale={locale} alternatePath={alternatePath} groupLabel={d.a11y.language} />
            <ThemeToggle label={d.a11y.appearance} />
          </div>
          <AppStoreBadge locale={locale} height={40} className="hidden 2xl:inline-flex" />
          <ThemeToggle label={d.a11y.appearance} className="xl:hidden" />
          <MobileMenu label={d.a11y.menu} className="xl:hidden">
            <div className="container-x pb-6 pt-2">
              <nav aria-label={d.a11y.mainNav}>
                <ul role="list">
                  {links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="flex min-h-12 items-center rounded-md px-2 text-[1.0625rem] font-semibold text-ink transition-colors duration-150 hover:bg-control"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="mt-4 flex flex-wrap items-center justify-between gap-4 px-2">
                <LanguageSwitch locale={locale} alternatePath={alternatePath} groupLabel={d.a11y.language} large />
                <AppStoreBadge locale={locale} height={44} />
              </div>
            </div>
          </MobileMenu>
        </div>
      </div>
    </header>
  );
}
