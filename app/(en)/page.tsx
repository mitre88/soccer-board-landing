import { PageShell } from "@/components/PageShell";
import { HomePage } from "@/components/home/HomePage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("en", "home");

export default function Page() {
  return (
    <PageShell locale="en" alternatePath="/es">
      <HomePage locale="en" />
    </PageShell>
  );
}
