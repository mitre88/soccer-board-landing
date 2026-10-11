import { PageShell } from "@/components/PageShell";
import { SupportArticle } from "@/components/legal/SupportArticle";
import { support } from "@/content/legal";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("en", "support");

export default function Page() {
  return (
    <PageShell locale="en" alternatePath="/es/support">
      <SupportArticle doc={support.en} locale="en" />
    </PageShell>
  );
}
