import Image from "next/image";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { urlFor } from "@/sanity/lib/image";

export type SanityImageValue = {
  asset: { _ref: string } | null;
  lqip?: string | null;
  dimensions?: { width: number | null; height: number | null } | null;
};

type SanityImageProps = {
  image: SanityImageValue;
  alt: string;
  /** Width requested from the image CDN, in pixels. */
  width: number;
  /** Crop to this width / height ratio. Defaults to the image's own. */
  aspect?: number;
  sizes: string;
  priority?: boolean;
  className?: string;
};

export function SanityImage({
  image,
  alt,
  width,
  aspect,
  sizes,
  priority,
  className,
}: SanityImageProps) {
  if (!image.asset) return null;

  const { width: w, height: h } = image.dimensions ?? {};
  const ratio = aspect ?? (w && h ? w / h : 16 / 9);
  const height = Math.round(width / ratio);

  return (
    <Image
      src={urlFor(image as SanityImageSource)
        .width(width)
        .height(height)
        .fit("crop")
        .auto("format")
        .url()}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      priority={priority}
      placeholder={image.lqip ? "blur" : "empty"}
      blurDataURL={image.lqip ?? undefined}
      className={className}
    />
  );
}
