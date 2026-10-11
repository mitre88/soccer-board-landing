import { t, type Locale } from "@/content/site";
import { resolveSlot, type SlotId } from "@/content/screens";
import { Disclosure, NewChip } from "../Bits";
import { InsightIcon } from "../Icons";
import { ThemedPicture } from "../ThemedPicture";

const CAPTURE_SLOTS: SlotId[] = ["coachBuild", "coachAnalyze", "coachInsight"];

export function Coach({ locale }: { locale: Locale }) {
  const c = t(locale).coach;
  const shots = CAPTURE_SLOTS.map((slot) => resolveSlot(slot, locale)).filter(
    (shot): shot is NonNullable<typeof shot> => shot !== null,
  );

  return (
    <section id="coach" aria-labelledby="coach-title" className="py-16 md:py-24">
      <div className="container-x">
        <div className="max-w-[46rem]">
          <NewChip locale={locale} />
          <h2 id="coach-title" className="t-h2 mt-5">
            {c.title}
          </h2>
          <p className="t-lead mt-4">{c.lead}</p>
        </div>

        <div
          className={`mt-10 grid gap-10 ${
            shots.length === 1 ? "xl:grid-cols-[minmax(0,1fr)_340px] xl:gap-12" : ""
          }`}
        >
          <div>
            <div className="grid gap-4 md:grid-cols-2">
              <article className="flex flex-col rounded-lg bg-surface p-6 md:p-8">
                <h3 className="t-h3 md:text-[1.625rem] md:leading-[1.2]">{c.build.title}</h3>
                <p className="t-body mt-4 text-ink-2">{c.build.body}</p>
                <h4 className="mt-8 text-[0.8125rem] font-semibold uppercase tracking-[0.09em] text-ink-2">
                  {c.howTitle}
                </h4>
                <ol role="list" className="mt-4 space-y-3">
                  {c.steps.map((step, index) => (
                    <li key={step} className="flex items-start gap-4">
                      <span aria-hidden="true" className="kit w-6 shrink-0 text-[1.75rem] text-ink-3">
                        {index + 1}
                      </span>
                      <p className="t-body">{step}</p>
                    </li>
                  ))}
                </ol>
              </article>
              <ul role="list" className="flex flex-col gap-4">
                <li className="flex flex-1 items-start gap-5 rounded-lg bg-surface p-6">
                  <span aria-hidden="true" className="kit -mt-1 w-10 shrink-0 text-center text-[3.25rem] text-suggestion-ink">
                    3
                  </span>
                  <div>
                    <h3 className="t-h3">{c.analyze.title}</h3>
                    <p className="t-body mt-2 text-ink-2">{c.analyze.body}</p>
                  </div>
                </li>
                <li className="flex flex-1 items-start gap-5 rounded-lg bg-surface p-6">
                  <span className="flex w-10 shrink-0 justify-center pt-0.5">
                    <InsightIcon className="h-8 w-8 text-suggestion-ink" />
                  </span>
                  <div>
                    <h3 className="t-h3">{c.insights.title}</h3>
                    <p className="t-body mt-2 text-ink-2">{c.insights.body}</p>
                  </div>
                </li>
                <li className="flex-1 rounded-lg bg-surface p-6 md:pl-[5.25rem]">
                  <h3 className="t-h3">{c.private.title}</h3>
                  <p className="t-body mt-2 text-ink-2">{c.private.body}</p>
                </li>
              </ul>
            </div>
            <div id="ai-availability" className="mt-4 rounded-lg bg-control px-5 py-4">
              <Disclosure locale={locale} />
            </div>
          </div>

          {shots.length === 1 ? (
            <ThemedPicture
              light={shots[0].light}
              dark={shots[0].dark}
              alt={shots[0].alt}
              sizes="(min-width: 1200px) 340px, (min-width: 640px) 340px, 80vw"
              className="capture mx-auto h-auto w-[min(80vw,340px)] rounded-[18px] xl:w-full"
            />
          ) : null}
        </div>

        {shots.length > 1 ? (
          <div className="mt-10 grid grid-cols-1 items-start gap-6 sm:grid-cols-3">
            {shots.map((shot) => (
              <ThemedPicture
                key={shot.subject}
                light={shot.light}
                dark={shot.dark}
                alt={shot.alt}
                sizes="(min-width: 1200px) 380px, (min-width: 640px) 30vw, 80vw"
                className="capture mx-auto h-auto w-[min(80vw,380px)] rounded-[18px] sm:w-full"
              />
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
