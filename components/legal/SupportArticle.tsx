import { APP_STORE_REVIEW_URL, t, type Locale } from "@/content/site";
import type { SupportDoc } from "@/content/legal";
import { RichText } from "../RichText";

export function SupportArticle({ doc, locale }: { doc: SupportDoc; locale: Locale }) {
  const d = t(locale);
  return (
    <article className="container-x py-12 md:py-20">
      <div className="mx-auto max-w-[44rem]">
        <h1 className="t-h1">{doc.title}</h1>
        <p className="t-lead mt-6">
          <RichText text={doc.intro} locale={locale} />
        </p>

        <section aria-labelledby="support-faq" className="mt-14">
          <h2 id="support-faq" className="t-h2">
            {doc.faqHeading}
          </h2>
          <dl className="mt-8 border-t border-hairline">
            {doc.faq.map((item) => (
              <div key={item.q} className="border-b border-hairline py-6">
                <dt className="text-[1.125rem] font-semibold leading-snug">{item.q}</dt>
                <dd className="t-body mt-2 text-ink-2">
                  <RichText text={item.a} locale={locale} />
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section aria-labelledby="support-review" className="mt-14 rounded-lg bg-surface p-6 md:p-8">
          <h2 id="support-review" className="t-h3">
            {doc.reviewHeading}
          </h2>
          <p className="t-body mt-2 text-ink-2">{doc.reviewBody}</p>
          <a
            href={APP_STORE_REVIEW_URL}
            className="mt-5 inline-flex min-h-11 items-center rounded-full bg-tactic px-5 text-[0.9375rem] font-semibold text-tactic-on transition-opacity duration-150 hover:opacity-90"
          >
            {doc.reviewLink}
          </a>
        </section>

        <p className="t-note mt-10">
          {d.legal.contactLabel}: <RichText text="{email}" locale={locale} />
        </p>
      </div>
    </article>
  );
}
