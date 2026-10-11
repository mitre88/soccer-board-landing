import { t, type Locale } from "@/content/site";
import { resolveSlot, type SlotId } from "@/content/screens";
import { ThemedPicture } from "../ThemedPicture";

// Formats already existed in 1.x: no "New in 2.0" chip here. The per-format tiles exist to hold
// real format captures; without any, the lead line names the formats and the tiles stay out.
export function Formats({ locale }: { locale: Locale }) {
  const f = t(locale).formats;
  const formats: { numeral: string; label: string; slot: SlotId }[] = [
    { numeral: "11", label: f.f11, slot: "format11" },
    { numeral: "7", label: f.f7, slot: "format7" },
    { numeral: "5", label: f.futsal, slot: "formatFutsal" },
  ];
  const tiles = formats.map((format) => ({ ...format, shot: resolveSlot(format.slot, locale) }));
  const hasCaptures = tiles.some((tile) => tile.shot !== null);
  const [first, ...details] = f.items;

  const list = (
    <ul role="list" className={`space-y-4 ${hasCaptures ? "mt-8" : ""}`}>
      {details.map((line) => (
        <li key={line} className="t-body flex gap-3">
          <span aria-hidden="true" className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-ink-3" />
          <span>{line}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <section id="formats" aria-labelledby="formats-title" className="py-16 md:py-24">
      <div className="container-x grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <div>
          <h2 id="formats-title" className="t-h2">
            {f.title}
          </h2>
          <p className="t-lead mt-4">{first}</p>
          {hasCaptures ? list : null}
        </div>
        {hasCaptures ? (
          <ul role="list" className="grid grid-cols-3 gap-3 self-start md:gap-4">
            {tiles.map((tile) => (
              <li key={tile.slot} className="flex flex-col rounded-lg bg-surface p-4 sm:p-6 md:p-8">
                <span aria-hidden="true" className="kit text-[3.25rem] text-ink sm:text-[4.5rem] md:text-[5.5rem]">
                  {tile.numeral}
                </span>
                <span className="mt-3 text-[0.9375rem] font-semibold sm:text-[1.0625rem]">{tile.label}</span>
                {tile.shot ? (
                  <ThemedPicture
                    light={tile.shot.light}
                    dark={tile.shot.dark}
                    alt={tile.shot.alt}
                    sizes="(min-width: 1024px) 220px, 30vw"
                    className="capture mt-6 h-auto w-full rounded-[14px]"
                  />
                ) : null}
              </li>
            ))}
          </ul>
        ) : (
          <div className="lg:pt-3">{list}</div>
        )}
      </div>
    </section>
  );
}
