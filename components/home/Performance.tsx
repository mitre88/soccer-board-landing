import { t, type Locale } from "@/content/site";
import { NewChip } from "../Bits";

/** Plain band after the iPhone Duo section, on the same grid and lighter than it. */
export function Performance({ locale }: { locale: Locale }) {
  const p = t(locale).performance;
  return (
    <section id="performance" aria-labelledby="performance-title" className="py-12 md:py-16">
      <div className="container-x grid gap-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-end lg:gap-16">
        <div>
          <NewChip locale={locale} />
          <h2 id="performance-title" className="t-h2 mt-5">
            {p.title}
          </h2>
        </div>
        <p className="t-lead max-w-[36rem]">{p.body}</p>
      </div>
    </section>
  );
}
