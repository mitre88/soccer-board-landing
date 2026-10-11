import { t, type Locale } from "@/content/site";
import { ChevronDownIcon } from "../Icons";
import { RichText } from "../RichText";

export function Faq({ locale }: { locale: Locale }) {
  const f = t(locale).faq;
  return (
    <section id="faq" aria-labelledby="faq-title" className="py-16 md:py-24">
      <div className="container-x grid gap-8 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-16">
        <h2 id="faq-title" className="t-h2">
          {f.title}
        </h2>
        <div className="border-t border-hairline">
          {f.items.map((item) => (
            <details key={item.q} className="border-b border-hairline">
              <summary className="flex min-h-14 cursor-pointer items-center justify-between gap-6 py-4 text-[1.125rem] font-semibold leading-snug">
                {item.q}
                <ChevronDownIcon className="faq-chevron h-5 w-5 shrink-0 text-ink-3" />
              </summary>
              <p className="t-body pb-6 pr-10 text-ink-2">
                <RichText text={item.a} locale={locale} />
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
