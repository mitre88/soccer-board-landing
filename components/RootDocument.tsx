import type { ReactNode } from "react";
import "@/app/globals.css";
import { htmlLang, type Locale } from "@/content/site";
import { ThemeScript } from "./ThemeScript";

// Each language has its own root layout (route groups), so <html lang> is correct in static HTML.
export function RootDocument({ locale, children }: { locale: Locale; children: ReactNode }) {
  return (
    <html lang={htmlLang[locale]} suppressHydrationWarning>
      <body className="bg-canvas font-sans text-ink">
        <ThemeScript />
        {children}
      </body>
    </html>
  );
}
