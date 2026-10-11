import { PageShell } from "@/components/PageShell";
import { SupportArticle } from "@/components/legal/SupportArticle";
import { support } from "@/content/legal";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("es", "support");

export default function Page() {
  return (
    <PageShell locale="es" alternatePath="/support">
      <SupportArticle doc={support.es} locale="es" />
    </PageShell>
  );
}
