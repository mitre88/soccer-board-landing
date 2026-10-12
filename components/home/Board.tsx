import { t, type Locale } from "@/content/site";
import { resolveSlot } from "@/content/screens";
import { NewChip } from "../Bits";
import { ThemedPicture } from "../ThemedPicture";

// The board section also carries the store's "Draw, drag and zoom" block (#drawing), so the page has
// one board band instead of a second text-only one. Two columns from 1024 px: the copy and the drawing
// block share the left column, centred against the capture. Below that the order is copy, capture,
// drawing. Landscape captures are capped at 480 px so a ~960 px capture stays sharp on 2x screens.
export function Board({ locale }: { locale: Locale }) {
  const { board: b, drawing: dr } = t(locale);
  const shot = resolveSlot("board", locale);
  const portrait = shot ? shot.light.height > shot.light.width : false;

  return (
    <section id="board" aria-labelledby="board-title" className="py-16 md:py-24">
      <div
        className={`container-x grid gap-10 ${
          shot
            ? `lg:grid-rows-[1fr_auto_auto_1fr] lg:gap-x-16 lg:gap-y-0 ${
                portrait ? "lg:grid-cols-[minmax(0,1fr)_auto]" : "lg:grid-cols-[minmax(0,1fr)_minmax(0,480px)]"
              }`
            : ""
        }`}
      >
        <div className={`max-w-[34rem] ${shot ? "lg:col-start-1 lg:row-start-2" : ""}`}>
          <NewChip locale={locale} />
          <h2 id="board-title" className="t-h2 mt-5">
            {b.title}
          </h2>
          <p className="t-lead mt-4">{b.body}</p>
        </div>
        {shot ? (
          <div className="lg:col-start-2 lg:row-span-4 lg:row-start-1 lg:self-center">
            <ThemedPicture
              light={shot.light}
              dark={shot.dark}
              alt={shot.alt}
              sizes={portrait ? "(min-width: 768px) 360px, 80vw" : "(min-width: 528px) 480px, 92vw"}
              className={
                portrait
                  ? "capture mx-auto h-auto w-[min(80vw,360px)] rounded-[28px]"
                  : "capture h-auto w-full max-w-[480px] rounded-[12px]"
              }
            />
          </div>
        ) : null}
        <div
          id="drawing"
          className={`max-w-[34rem] border-t border-hairline pt-6 ${shot ? "lg:col-start-1 lg:row-start-3 lg:mt-10" : ""}`}
        >
          <h3 className="t-h3">{dr.title}</h3>
          <p className="t-body mt-2 text-ink-2">{dr.body}</p>
        </div>
      </div>
    </section>
  );
}
