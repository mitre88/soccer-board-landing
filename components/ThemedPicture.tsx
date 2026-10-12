import { getImageProps } from "next/image";
import type { ScreenFile } from "@/content/screens";

/** Art direction: another capture (and its own sizes) for viewports that match `media`. */
export type NarrowVariant = { light: ScreenFile; dark?: ScreenFile; media: string; sizes: string };

// One request per image: a <picture> whose dark <source> follows the system appearance.
// When the visitor forces an appearance, components/ThemeScript.tsx rewrites the media query; a dark
// source that also has a viewport condition keeps it in data-dark so the script can combine both.
export function ThemedPicture({
  light,
  dark,
  alt,
  sizes,
  priority = false,
  className,
  narrow,
}: {
  light: ScreenFile;
  dark?: ScreenFile;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
  narrow?: NarrowVariant;
}) {
  const { props: lightProps } = getImageProps({
    src: light.src,
    width: light.width,
    height: light.height,
    alt,
    sizes,
    quality: 85,
    priority,
    // priority only drops lazy loading; the LCP capture also needs an explicit fetch priority.
    // It applies to whichever <source> the browser picks.
    fetchPriority: priority ? "high" : undefined,
  });

  if (!dark && !narrow) {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...lightProps} className={className} />;
  }

  const srcSet = (file: ScreenFile, fileSizes: string) =>
    getImageProps({ src: file.src, width: file.width, height: file.height, alt, sizes: fileSizes, quality: 85 }).props
      .srcSet;

  return (
    <picture>
      {narrow?.dark ? (
        <source
          media={`${narrow.media} and (prefers-color-scheme: dark)`}
          srcSet={srcSet(narrow.dark, narrow.sizes)}
          sizes={narrow.sizes}
          width={narrow.dark.width}
          height={narrow.dark.height}
          data-dark={narrow.media}
          suppressHydrationWarning
        />
      ) : null}
      {narrow ? (
        <source
          media={narrow.media}
          srcSet={srcSet(narrow.light, narrow.sizes)}
          sizes={narrow.sizes}
          width={narrow.light.width}
          height={narrow.light.height}
        />
      ) : null}
      {dark ? (
        <source
          media="(prefers-color-scheme: dark)"
          srcSet={srcSet(dark, sizes)}
          sizes={sizes}
          data-dark=""
          suppressHydrationWarning
        />
      ) : null}
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <img {...lightProps} className={className} />
    </picture>
  );
}
