import { t, type Locale } from "@/content/site";
import { resolveSlot } from "@/content/screens";
import { AppStoreBadge } from "../AppStoreBadge";
import { Disclosure } from "../Bits";
import { ThemedPicture } from "../ThemedPicture";

// The pitch owns the hero. On wide screens it sits beside the copy; below 900 px it comes right
// after the lead, so the first screen shows the board before the download button. A portrait
// full-pitch capture gives way to a tighter band of the same pitch below 900 px (art direction), so
// the App Store badge stays near the first screen on phones.
const NARROW = "(max-width: 899px)";

export function Hero({ locale }: { locale: Locale }) {
  const d = t(locale).hero;
  const shot = resolveSlot("hero", locale);
  const landscape = shot ? shot.light.width > shot.light.height : false;
  const band = shot && !landscape ? resolveSlot("heroNarrow", locale) : null;

  return (
    <section id="top" aria-labelledby="hero-title" className="floodlit">
      <div className={`container-x pb-16 pt-10 md:pb-24 md:pt-16 ${shot ? "hero-grid" : ""}`}>
        <div className="hero-top max-w-[40rem]">
          <p className="rise">
            <span className="t-chip-plain">{d.badge}</span>
          </p>
          <h1 id="hero-title" className="t-h1 rise rise-1 mt-6">
            {d.title}
          </h1>
          <p className="t-lead rise rise-2 mt-5 max-w-[34rem]">{d.lead}</p>
        </div>

        {shot ? (
          <div className="hero-visual rise rise-2 mt-8 min-[900px]:mt-0">
            <ThemedPicture
              light={shot.light}
              dark={shot.dark}
              alt={shot.alt}
              priority
              sizes={
                landscape
                  ? "(min-width: 1218px) 560px, (min-width: 900px) 46vw, (min-width: 652px) 600px, 92vw"
                  : "(min-width: 900px) 400px, 76vw"
              }
              narrow={
                band
                  ? { light: band.light, dark: band.dark, media: NARROW, sizes: "(min-width: 652px) 600px, 92vw" }
                  : undefined
              }
              className={
                landscape
                  ? "capture h-auto w-full max-w-[600px] rounded-[12px] min-[900px]:w-[min(46vw,560px)]"
                  : band
                    ? "capture h-auto w-full max-w-[600px] rounded-[12px] min-[900px]:w-[400px] min-[900px]:max-w-none min-[900px]:rounded-[14px]"
                    : "capture mx-auto h-auto w-[min(76vw,340px)] rounded-[14px] min-[900px]:w-[400px]"
              }
            />
          </div>
        ) : null}

        <div className="hero-bottom max-w-[40rem]">
          <div className="rise rise-3 mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
            <AppStoreBadge locale={locale} height={52} loading="eager" />
            <a href="#whats-new" className="t-link inline-flex min-h-11 items-center text-[1.0625rem] font-semibold">
              {d.whatsNewLink}
            </a>
          </div>
          <div className="rise rise-4 mt-8 max-w-[34rem] space-y-2">
            <p className="t-note">{d.footnote}</p>
            <Disclosure locale={locale} />
          </div>
        </div>
      </div>
    </section>
  );
}
