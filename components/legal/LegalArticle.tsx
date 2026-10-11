import { LEGAL_UPDATED_ISO, t, type Locale } from "@/content/site";
import type { Block, LegalDoc } from "@/content/legal";
import { RichText } from "../RichText";

function BlockView({ block, locale }: { block: Block; locale: Locale }) {
  if (block.type === "ul") {
    return (
      <ul className="t-body mt-3 list-disc space-y-2 pl-5 marker:text-ink-3">
        {block.items.map((item) => (
          <li key={item}>
            <RichText text={item} locale={locale} />
          </li>
        ))}
      </ul>
    );
  }
  return (
    <p className="t-body mt-3">
      <RichText text={block.text} locale={locale} />
    </p>
  );
}

export function LegalArticle({ doc, locale }: { doc: LegalDoc; locale: Locale }) {
  const d = t(locale);
  return (
    <article className="container-x py-12 md:py-20">
      <div className="mx-auto max-w-[44rem]">
        <h1 className="t-h1">{doc.title}</h1>
        <p className="t-note mt-4">
          {d.legal.updatedLabel}: <time dateTime={LEGAL_UPDATED_ISO}>{d.legal.updatedDate}</time>
        </p>
        {doc.intro.map((paragraph) => (
          <p key={paragraph} className="t-lead mt-8">
            <RichText text={paragraph} locale={locale} />
          </p>
        ))}
        {doc.sections.map((section) => (
          <section key={section.heading} className="mt-12">
            <h2 className="text-[1.375rem] font-bold leading-[1.25] tracking-[-0.01em]">{section.heading}</h2>
            {section.blocks.map((block, index) => (
              <BlockView key={index} block={block} locale={locale} />
            ))}
          </section>
        ))}
      </div>
    </article>
  );
}
