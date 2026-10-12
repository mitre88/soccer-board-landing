import { t, type Locale } from "@/content/site";
import { resolveSlot, type ResolvedScreen } from "@/content/screens";
import { NewChip } from "../Bits";
import { ThemedPicture } from "../ThemedPicture";

type Figure = { key: string; shot: ResolvedScreen; caption: string };

const isLandscape = (figure: Figure) => figure.shot.light.width > figure.shot.light.height;

/** Real iPhone Duo captures for this section, inner display first (the hero shows the pitch only). */
export function duoFigures(locale: Locale): Figure[] {
  const d = t(locale).duo;
  return [
    { key: "open", shot: resolveSlot("duoOpen", locale), caption: d.captionOpen },
    { key: "closed", shot: resolveSlot("duoClosed", locale), caption: d.captionClosed },
    { key: "half", shot: resolveSlot("duoHalf", locale), caption: d.captionHalf },
  ].filter((figure): figure is Figure => figure.shot !== null);
}

// Layout and sizes follow each capture's orientation, so every figure downloads the width its box
// needs: a 2853 x 2007 inner-display capture fills the row, an outer-display portrait stays 300 px.
const ROW_LANDSCAPE = "(min-width: 1200px) 860px, (min-width: 640px) 60vw, 92vw";
const ROW_PORTRAIT = "(min-width: 640px) 300px, 80vw";
const ROW_COLUMNS: Record<string, string> = {
  "landscape portrait": "sm:grid-cols-[minmax(0,1fr)_auto]",
  "portrait landscape": "sm:grid-cols-[auto_minmax(0,1fr)]",
  "landscape landscape": "sm:grid-cols-2",
  "portrait portrait": "sm:grid-cols-[auto_auto] sm:justify-start",
};

function DuoFigure({ figure, sizes }: { figure: Figure; sizes: string }) {
  const landscape = isLandscape(figure);
  return (
    <figure className="flex flex-col">
      <ThemedPicture
        light={figure.shot.light}
        dark={figure.shot.dark}
        alt={figure.shot.alt}
        sizes={sizes}
        className={`capture h-auto ${landscape ? "w-full rounded-[22px]" : "w-[min(80vw,300px)] rounded-[30px]"}`}
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
  const [first, second, third] = figures;

  // One portrait capture sits beside the copy; one landscape capture goes under it, capped at 800 px
  // (a 34ch caption would otherwise size an auto column and shrink the capture to about 360 px).
  if (!second) {
    const landscape = isLandscape(first);
    return (
      <section id="duo" aria-labelledby="duo-title" className="py-16 md:py-24">
        <div
          className={`container-x grid gap-12 ${landscape ? "" : "items-center md:grid-cols-[minmax(0,1fr)_auto] md:gap-16"}`}
        >
          <div className="max-w-[36rem]">
            <DuoText locale={locale} />
          </div>
          <div className={landscape ? "max-w-[800px]" : "justify-self-center md:justify-self-end"}>
            <DuoFigure figure={first} sizes={landscape ? "(min-width: 848px) 800px, 92vw" : ROW_PORTRAIT} />
          </div>
        </div>
      </section>
    );
  }

  const pair = [first, second];
  const columns = ROW_COLUMNS[pair.map((figure) => (isLandscape(figure) ? "landscape" : "portrait")).join(" ")];
  return (
    <section id="duo" aria-labelledby="duo-title" className="py-16 md:py-24">
      <div className="container-x">
        <div className="max-w-[36rem]">
          <DuoText locale={locale} />
        </div>
        <div className={`mt-12 grid items-start gap-10 ${columns}`}>
          {pair.map((figure) => (
            <DuoFigure key={figure.key} figure={figure} sizes={isLandscape(figure) ? ROW_LANDSCAPE : ROW_PORTRAIT} />
          ))}
        </div>
        {third ? (
          <div className="mt-10 max-w-[720px]">
            <DuoFigure figure={third} sizes={isLandscape(third) ? "(min-width: 768px) 720px, 92vw" : ROW_PORTRAIT} />
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
