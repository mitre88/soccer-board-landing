import { PageShell } from "@/components/PageShell";
import { LegalArticle } from "@/components/legal/LegalArticle";
import { terms } from "@/content/legal";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("en", "terms");

export default function Page() {
  return (
    <PageShell locale="en" alternatePath="/es/terms-of-service">
      <LegalArticle doc={terms.en} locale="en" />
    </PageShell>
  );
}
