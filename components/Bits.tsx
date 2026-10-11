import { t, type Locale } from "@/content/site";
import { resolveSlot, type SlotId } from "@/content/screens";
import { ThemedPicture } from "./ThemedPicture";

/** Eyebrow that marks the sections improved in 2.0. Never used on Formats. */
export function NewChip({ locale }: { locale: Locale }) {
  return <p className="t-chip w-fit">{t(locale).newChip}</p>;
}

/** The AI availability disclosure, verbatim from the store copy. */
export function Disclosure({ locale, className = "" }: { locale: Locale; className?: string }) {
  const d = t(locale).disclosure;
  return (
    <p className={`t-note ${className}`}>
      <strong className="font-semibold text-ink">{d.label}</strong> {d.text}
    </p>
  );
}

/** A real capture for a page slot, or nothing at all when the file is not there. */
export function Screen({
  slot,
  locale,
  sizes,
  priority,
  className,
  imgClassName,
  caption,
}: {
  slot: SlotId;
  locale: Locale;
  sizes: string;
  priority?: boolean;
  className?: string;
  imgClassName?: string;
  caption?: string;
}) {
  const shot = resolveSlot(slot, locale);
  if (!shot) return null;
  return (
    <figure className={className}>
      <ThemedPicture
        light={shot.light}
        dark={shot.dark}
        alt={shot.alt}
        sizes={sizes}
        priority={priority}
        className={imgClassName}
      />
      {caption ? <figcaption className="t-note mt-4 max-w-[30ch]">{caption}</figcaption> : null}
    </figure>
  );
}
