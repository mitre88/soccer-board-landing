import { t, type Locale } from "@/content/site";
import { resolveSlot } from "@/content/screens";
import { NewChip } from "../Bits";
import { ThemedPicture } from "../ThemedPicture";

export function Board({ locale }: { locale: Locale }) {
  const b = t(locale).board;
  const shot = resolveSlot("board", locale);
  const portrait = shot ? shot.light.height > shot.light.width : false;

  return (
    <section id="board" aria-labelledby="board-title" className="py-16 md:py-24">
      <div
        className={`container-x grid items-center gap-10 ${
          shot ? "md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-16" : ""
        }`}
      >
        <div className="max-w-[34rem]">
          <NewChip locale={locale} />
          <h2 id="board-title" className="t-h2 mt-5">
            {b.title}
          </h2>
          <p className="t-lead mt-4">{b.body}</p>
        </div>
        {shot ? (
          <ThemedPicture
            light={shot.light}
            dark={shot.dark}
            alt={shot.alt}
            sizes={portrait ? "(min-width: 768px) 360px, 80vw" : "(min-width: 1200px) 680px, (min-width: 768px) 56vw, 92vw"}
            className={
              portrait
                ? "capture mx-auto h-auto w-[min(80vw,360px)] rounded-[28px]"
                : "capture h-auto w-full rounded-[12px]"
            }
          />
        ) : null}
      </div>
    </section>
  );
}
