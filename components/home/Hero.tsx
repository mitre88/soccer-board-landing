import { t, type Locale } from "@/content/site";
import { resolveSlot } from "@/content/screens";
import { AppStoreBadge } from "../AppStoreBadge";
import { Disclosure } from "../Bits";
import { ThemedPicture } from "../ThemedPicture";

export function Hero({ locale }: { locale: Locale }) {
  const d = t(locale).hero;
  const shot = resolveSlot("hero", locale);
  const landscape = shot ? shot.light.width > shot.light.height : false;

  return (
    <section id="top" aria-labelledby="hero-title" className="floodlit">
      <div
        className={`container-x grid items-center gap-12 pb-16 pt-10 md:pb-24 md:pt-16 ${
          shot ? "min-[900px]:grid-cols-[minmax(0,1fr)_auto] min-[900px]:gap-16" : ""
        }`}
      >
        <div className="max-w-[40rem]">
          <p className="rise">
            <span className="t-chip-plain">{d.badge}</span>
          </p>
          <h1 id="hero-title" className="t-h1 rise rise-1 mt-6">
            {d.title}
          </h1>
          <p className="t-lead rise rise-2 mt-5 max-w-[34rem]">{d.lead}</p>
          <div className="rise rise-3 mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
            <AppStoreBadge locale={locale} height={52} />
            <a href="#whats-new" className="t-link inline-flex min-h-11 items-center text-[1.0625rem] font-semibold">
              {d.whatsNewLink}
            </a>
          </div>
          <div className="rise rise-4 mt-8 max-w-[34rem] space-y-2">
            <p className="t-note">{d.footnote}</p>
            <Disclosure locale={locale} />
          </div>
        </div>

        {shot ? (
          <div className="rise rise-2 justify-self-center">
            <ThemedPicture
              light={shot.light}
              dark={shot.dark}
              alt={shot.alt}
              priority
              sizes={landscape ? "(min-width: 900px) 600px, 92vw" : "(min-width: 1200px) 420px, (min-width: 900px) 380px, 76vw"}
              className={
                landscape
                  ? "capture h-auto w-[min(92vw,600px)] rounded-[22px]"
                  : "capture h-auto w-[min(76vw,340px)] rounded-[26px] min-[900px]:w-[380px] xl:w-[420px]"
              }
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}
