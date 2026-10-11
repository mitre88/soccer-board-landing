import { getImageProps } from "next/image";
import type { ScreenFile } from "@/content/screens";

// One request per image: a <picture> whose dark <source> follows the system appearance.
// When the visitor forces an appearance, components/ThemeScript.tsx rewrites the media query.
export function ThemedPicture({
  light,
  dark,
  alt,
  sizes,
  priority = false,
  className,
}: {
  light: ScreenFile;
  dark?: ScreenFile;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  const { props: lightProps } = getImageProps({
    src: light.src,
    width: light.width,
    height: light.height,
    alt,
    sizes,
    quality: 85,
    priority,
  });

  if (!dark) {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...lightProps} className={className} />;
  }

  const {
    props: { srcSet: darkSrcSet },
  } = getImageProps({
    src: dark.src,
    width: dark.width,
    height: dark.height,
    alt,
    sizes,
    quality: 85,
  });

  return (
    <picture>
      <source
        media="(prefers-color-scheme: dark)"
        srcSet={darkSrcSet}
        sizes={sizes}
        data-dark=""
        suppressHydrationWarning
      />
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <img {...lightProps} className={className} />
    </picture>
  );
}
