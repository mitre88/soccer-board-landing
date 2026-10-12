import {
  APP_NAME,
  APP_STORE_URL,
  SELLER,
  SITE_URL,
  htmlLang,
  localePath,
  t,
  type Locale,
} from "@/content/site";
import { Board } from "./Board";
import { Coach } from "./Coach";
import { Download } from "./Download";
import { Duo, DuoTextSection, duoFigures } from "./Duo";
import { Faq } from "./Faq";
import { Formats } from "./Formats";
import { Hero } from "./Hero";
import { WhatsNew } from "./WhatsNew";

// No offers, ratings or reviews: the price is set per storefront in App Store Connect and can change
// without a deploy, and ratings are never written by hand. Google shows no app rich result without
// them, which is accepted.
function structuredData(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: APP_NAME,
    description: t(locale).meta.homeDescription,
    url: `${SITE_URL}${localePath(locale, "/")}`,
    downloadUrl: APP_STORE_URL,
    installUrl: APP_STORE_URL,
    operatingSystem: t(locale).meta.operatingSystem,
    inLanguage: htmlLang[locale],
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
      {figures.length ? <Duo locale={locale} figures={figures} /> : <DuoTextSection locale={locale} />}
      <Formats locale={locale} />
      <WhatsNew locale={locale} />
      <Faq locale={locale} />
      <Download locale={locale} />
    </>
  );
}
