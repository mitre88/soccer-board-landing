import { PageShell } from "@/components/PageShell";
import { LegalArticle } from "@/components/legal/LegalArticle";
import { privacy } from "@/content/legal";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("es", "privacy");

export default function Page() {
  return (
    <PageShell locale="es" alternatePath="/privacy-policy">
      <LegalArticle doc={privacy.es} locale="es" />
    </PageShell>
  );
}
