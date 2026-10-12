import { t, type Locale } from "@/content/site";
import { resolveSlot, type ResolvedScreen } from "@/content/screens";
import { NewChip } from "../Bits";
import { ThemedPicture } from "../ThemedPicture";

type Figure = { key: string; shot: ResolvedScreen; caption: string };

/** Real iPhone Duo captures for this section (the hero shows the pitch only, never these). */
export function duoFigures(locale: Locale): Figure[] {
  const d = t(locale).duo;
  return [
    { key: "closed", shot: resolveSlot("duoClosed", locale), caption: d.captionClosed },
    { key: "open", shot: resolveSlot("duoOpen", locale), caption: d.captionOpen },
    { key: "half", shot: resolveSlot("duoHalf", locale), caption: d.captionHalf },
  ].filter((figure): figure is Figure => figure.shot !== null);
}

function DuoFigure({ figure, sizes, width }: { figure: Figure; sizes: string; width: string }) {
  const landscape = figure.shot.light.width > figure.shot.light.height;
  return (
    <figure className="flex flex-col">
      <ThemedPicture
        light={figure.shot.light}
        dark={figure.shot.dark}
        alt={figure.shot.alt}
        sizes={sizes}
        className={`capture h-auto ${landscape ? "w-full rounded-[22px]" : `${width} rounded-[30px]`}`}
      />
      <figcaption className="t-note mt-4 max-w-[34ch]">{figure.caption}</figcaption>
    </figure>
  );
}

function DuoText({ locale }: { locale: Locale }) {
  const d = t(locale).duo;
  return (
    <>
      <NewChip locale={locale} />
      <h2 id="duo-title" className="t-h2 mt-5">
        {d.title}
      </h2>
      <p className="t-lead mt-4">{d.body}</p>
      <p className="t-body mt-6 font-semibold">{d.close}</p>
    </>
  );
}

/** Full section, used when at least one real iPhone Duo capture is available. */
export function Duo({ locale, figures }: { locale: Locale; figures: Figure[] }) {
  if (figures.length === 1) {
    return (
      <section id="duo" aria-labelledby="duo-title" className="py-16 md:py-24">
        <div className="container-x grid items-center gap-12 md:grid-cols-[minmax(0,1fr)_auto] md:gap-16">
          <div className="max-w-[36rem]">
            <DuoText locale={locale} />
          </div>
          <div className="justify-self-center md:justify-self-end">
            <DuoFigure figure={figures[0]} sizes="(min-width: 768px) 360px, 80vw" width="w-[min(80vw,360px)]" />
          </div>
        </div>
      </section>
    );
  }
  return (
    <section id="duo" aria-labelledby="duo-title" className="py-16 md:py-24">
      <div className="container-x">
        <div className="max-w-[36rem]">
          <DuoText locale={locale} />
        </div>
        <div className="mt-12 grid items-start gap-10 sm:grid-cols-[auto_minmax(0,1fr)]">
          {figures.slice(0, 2).map((figure) => (
            <DuoFigure
              key={figure.key}
              figure={figure}
              sizes="(min-width: 1200px) 640px, (min-width: 640px) 60vw, 92vw"
              width="w-[min(80vw,300px)]"
            />
          ))}
        </div>
        {figures[2] ? (
          <div className="mt-10 max-w-[720px]">
            <DuoFigure figure={figures[2]} sizes="(min-width: 768px) 720px, 92vw" width="w-[min(80vw,300px)]" />
          </div>
        ) : null}
      </div>
    </section>
  );
}

/**
 * Text-only section, used while no iPhone Duo capture exists. It keeps the feature's own band and
 * heading and lists what each display does.
 */
export function DuoTextSection({ locale }: { locale: Locale }) {
  const d = t(locale).duo;
  return (
    <section id="duo" aria-labelledby="duo-title" className="py-16 md:py-24">
      <div className="container-x grid gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <div>
          <NewChip locale={locale} />
          <h2 id="duo-title" className="t-h2 mt-5 max-w-[16ch]">
            {d.title}
          </h2>
        </div>
        <div className="lg:pt-14">
          <dl className="border-t border-hairline">
            {d.rows.map((row) => (
              <div
                key={row.label}
                className="grid gap-1 border-b border-hairline py-5 sm:grid-cols-[11rem_minmax(0,1fr)] sm:items-baseline sm:gap-6"
              >
                <dt className="text-[0.8125rem] font-semibold uppercase tracking-[0.09em] text-ink-2">{row.label}</dt>
                <dd className="t-lead text-ink">{row.text}</dd>
              </div>
            ))}
          </dl>
          <p className="t-body mt-6 font-semibold">{d.close}</p>
        </div>
      </div>
    </section>
  );
}
