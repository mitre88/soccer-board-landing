import {
  APP_NAME,
  APP_STORE_URL,
  SELLER,
  SITE_URL,
  localePath,
  t,
  type Locale,
} from "@/content/site";
import { Board } from "./Board";
import { Coach } from "./Coach";
import { Download } from "./Download";
import { Duo, DuoPanel, duoFigures } from "./Duo";
import { Faq } from "./Faq";
import { Formats } from "./Formats";
import { Hero } from "./Hero";
import { Performance, PerformancePanel } from "./Performance";
import { WhatsNew } from "./WhatsNew";

function structuredData(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: APP_NAME,
    description: t(locale).meta.homeDescription,
    url: `${SITE_URL}${localePath(locale, "/")}`,
    downloadUrl: APP_STORE_URL,
    installUrl: APP_STORE_URL,
    operatingSystem: "iOS 26.4 or later",
    applicationCategory: "SportsApplication",
    image: `${SITE_URL}/brand/app-icon.png`,
    author: { "@type": "Person", name: SELLER },
  };
}

export function HomePage({ locale }: { locale: Locale }) {
  const figures = duoFigures(locale);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData(locale)) }}
      />
      <Hero locale={locale} />
      <Coach locale={locale} />
      <Board locale={locale} />
      {figures.length ? (
        <>
          <Duo locale={locale} figures={figures} />
          <Performance locale={locale} />
        </>
      ) : (
        <div className="py-16 md:py-24">
          <div className="container-x grid gap-4 md:grid-cols-2">
            <DuoPanel locale={locale} />
            <PerformancePanel locale={locale} />
          </div>
        </div>
      )}
      <Formats locale={locale} />
      <WhatsNew locale={locale} />
      <Faq locale={locale} />
      <Download locale={locale} />
    </>
  );
}
