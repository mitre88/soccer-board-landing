import { PageShell } from "@/components/PageShell";
import { LegalArticle } from "@/components/legal/LegalArticle";
import { privacy } from "@/content/legal";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("en", "privacy");

export default function Page() {
  return (
    <PageShell locale="en" alternatePath="/es/privacy-policy">
      <LegalArticle doc={privacy.en} locale="en" />
    </PageShell>
  );
}
