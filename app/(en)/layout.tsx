import type { ReactNode } from "react";
import { RootDocument } from "@/components/RootDocument";
import { rootMetadata, viewport as rootViewport } from "@/lib/metadata";

export const metadata = rootMetadata;
export const viewport = rootViewport;

export default function Layout({ children }: { children: ReactNode }) {
  return <RootDocument locale="en">{children}</RootDocument>;
}
