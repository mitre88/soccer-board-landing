import Image from "next/image";
import { t, type Locale } from "@/content/site";
import { AppStoreBadge } from "../AppStoreBadge";

export function Download({ locale }: { locale: Locale }) {
  const d = t(locale).download;
  return (
    <section id="download" aria-labelledby="download-title" className="pb-24 pt-8 md:pb-32 md:pt-12">
      <div className="container-x flex flex-col items-center text-center">
        <Image src="/brand/app-icon.png" alt="" width={96} height={96} className="capture rounded-[22px]" />
        <h2 id="download-title" className="t-h2 mt-8">
          {d.title}
        </h2>
        <p className="t-lead mt-4 max-w-[36rem]">{d.sub}</p>
        <AppStoreBadge locale={locale} height={56} className="mt-8" />
      </div>
    </section>
  );
}
