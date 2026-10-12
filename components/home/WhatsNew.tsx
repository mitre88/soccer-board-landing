import { t, type Locale } from "@/content/site";
import { Disclosure } from "../Bits";

export function WhatsNew({ locale }: { locale: Locale }) {
  const w = t(locale).whatsNew;
  return (
    <section id="whats-new" aria-labelledby="whats-new-title" className="py-16 md:py-24">
      <div className="container-x">
        <div className="grid gap-8 rounded-xl bg-surface p-8 md:p-12 lg:grid-cols-[auto_minmax(0,1fr)] lg:gap-16">
          <span aria-hidden="true" className="kit block text-[clamp(5rem,3.5rem+6vw,9rem)] text-ink">
            2.0
          </span>
          <div>
            <h2 id="whats-new-title" className="t-h2">
              {w.title}
              <span className="sr-only">{w.titleSr}</span>
            </h2>
            <p className="t-lead mt-3">{w.lead}</p>
            <ul role="list" className="mt-8 space-y-4">
              {w.items.map((item) => (
                <li key={item.label} className="t-body">
                  <a href={item.href} className="t-link font-semibold">
                    {item.label}
                  </a>
                  {item.rest}
                </li>
              ))}
            </ul>
            <Disclosure locale={locale} className="mt-8" />
          </div>
        </div>
      </div>
    </section>
  );
}
