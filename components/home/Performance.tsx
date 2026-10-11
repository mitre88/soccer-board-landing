import { t, type Locale } from "@/content/site";
import { NewChip } from "../Bits";

/** Panel form, paired with the iPhone Duo panel. */
export function PerformancePanel({ locale }: { locale: Locale }) {
  const p = t(locale).performance;
  return (
    <section
      id="performance"
      aria-labelledby="performance-title"
      className="flex flex-col rounded-xl bg-surface p-8 md:p-10"
    >
      <NewChip locale={locale} />
      <h2 id="performance-title" className="t-h2 mt-5">
        {p.title}
      </h2>
      <p className="t-lead mt-4">{p.body}</p>
    </section>
  );
}

/** Standalone band, used when the iPhone Duo section has its own captures. */
export function Performance({ locale }: { locale: Locale }) {
  const p = t(locale).performance;
  return (
    <section id="performance" aria-labelledby="performance-title" className="py-16 md:py-24">
      <div className="container-x">
        <div className="grid gap-6 rounded-xl bg-surface p-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-end md:gap-12 md:p-12">
          <div>
            <NewChip locale={locale} />
            <h2 id="performance-title" className="t-h2 mt-5">
              {p.title}
            </h2>
          </div>
          <p className="t-lead">{p.body}</p>
        </div>
      </div>
    </section>
  );
}
