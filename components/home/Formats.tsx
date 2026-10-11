import { t, type Locale } from "@/content/site";
import { resolveSlot, type SlotId } from "@/content/screens";
import { ThemedPicture } from "../ThemedPicture";

// Formats already existed in 1.x: no "New in 2.0" chip here.
export function Formats({ locale }: { locale: Locale }) {
  const f = t(locale).formats;
  const formats: { numeral: string; label: string; slot: SlotId }[] = [
    { numeral: "11", label: f.f11, slot: "format11" },
    { numeral: "7", label: f.f7, slot: "format7" },
    { numeral: "5", label: f.futsal, slot: "formatFutsal" },
  ];
  const [first, ...details] = f.items;

  return (
    <section id="formats" aria-labelledby="formats-title" className="py-16 md:py-24">
      <div className="container-x grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <div>
          <h2 id="formats-title" className="t-h2">
            {f.title}
          </h2>
          <p className="t-lead mt-4">{first}</p>
          <ul role="list" className="mt-8 space-y-4">
            {details.map((line) => (
              <li key={line} className="t-body flex gap-3">
                <span aria-hidden="true" className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-ink-3" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
        <ul role="list" className="grid grid-cols-3 gap-3 self-start md:gap-4">
          {formats.map((format) => {
            const shot = resolveSlot(format.slot, locale);
            return (
              <li key={format.slot} className="flex flex-col rounded-lg bg-surface p-4 sm:p-6 md:p-8">
                <span aria-hidden="true" className="kit text-[3.25rem] text-ink sm:text-[4.5rem] md:text-[5.5rem]">
                  {format.numeral}
                </span>
                <span className="mt-3 text-[0.9375rem] font-semibold sm:text-[1.0625rem]">{format.label}</span>
                {shot ? (
                  <ThemedPicture
                    light={shot.light}
                    dark={shot.dark}
                    alt={shot.alt}
                    sizes="(min-width: 1024px) 220px, 30vw"
                    className="capture mt-6 h-auto w-full rounded-[14px]"
                  />
                ) : null}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
