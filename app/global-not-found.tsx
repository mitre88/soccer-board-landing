import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { RootDocument } from "@/components/RootDocument";
import { APP_NAME } from "@/content/site";
import { viewport as rootViewport } from "@/lib/metadata";

// Any unmatched URL, in either language. The two route groups have separate root layouts, so this
// page brings its own document; the message is short and bilingual because the language of a
// mistyped URL is unknown.
export const metadata: Metadata = {
  title: { absolute: `Page not found · Página no encontrada — ${APP_NAME}` },
  robots: { index: false, follow: true },
};
export const viewport = rootViewport;

export default function GlobalNotFound() {
  return (
    <RootDocument locale="en">
      <PageShell locale="en" alternatePath="/es">
        <section aria-labelledby="not-found-title" className="floodlit">
          <div className="container-x pb-24 pt-16 md:pb-32 md:pt-24">
            <p aria-hidden="true" className="kit text-[clamp(5rem,3.5rem+6vw,8rem)] text-ink-3">
              404
            </p>
            <h1 id="not-found-title" className="t-h1 mt-6">
              This page does not exist.
            </h1>
            <p className="t-lead mt-4 max-w-[34rem]">The link may be old or mistyped.</p>
            <p className="mt-6">
              <Link href="/" className="t-link inline-flex min-h-11 items-center text-[1.0625rem] font-semibold">
                Go to the home page
              </Link>
            </p>
            <div lang="es-MX" className="mt-10 max-w-[34rem] border-t border-hairline pt-6">
              <p className="t-body font-semibold">Esta página no existe.</p>
              <p className="t-body mt-1 text-ink-2">Puede que el enlace sea antiguo o tenga un error.</p>
              <p className="mt-3">
                <Link href="/es" className="t-link inline-flex min-h-11 items-center text-[1.0625rem] font-semibold">
                  Ir al inicio en español
                </Link>
              </p>
            </div>
          </div>
        </section>
      </PageShell>
    </RootDocument>
  );
}
