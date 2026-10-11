import { PageShell } from "@/components/PageShell";
import { HomePage } from "@/components/home/HomePage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("es", "home");

export default function Page() {
  return (
    <PageShell locale="es" alternatePath="/">
      <HomePage locale="es" />
    </PageShell>
  );
}
