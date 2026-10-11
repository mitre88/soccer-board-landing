import { PageShell } from "@/components/PageShell";
import { LegalArticle } from "@/components/legal/LegalArticle";
import { terms } from "@/content/legal";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("es", "terms");

export default function Page() {
  return (
    <PageShell locale="es" alternatePath="/terms-of-service">
      <LegalArticle doc={terms.es} locale="es" />
    </PageShell>
  );
}
