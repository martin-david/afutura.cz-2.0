import { useState } from "react";
import PlaceholderArt from "@/components/ui/PlaceholderArt";

export interface CarouselImage {
  /** Placeholder art variant; swapped for a real photo `src` later. */
  variant: number;
  /** Descriptive, SEO-friendly alt text, e.g. "{title} – {location} – fotografie {n}". */
  alt: string;
}

/**
 * Minimal, dependency-free image gallery: a large active slide with
 * previous/next controls and a thumbnail strip. Stands in for real project
 * photography via `PlaceholderArt` until real photos are supplied.
 */
export default function ImageCarousel({ images }: { images: CarouselImage[] }) {
  const [index, setIndex] = useState(0);
  const total = images.length;
  const goTo = (next: number) => setIndex(((next % total) + total) % total);

  if (total === 0) return null;

  // Defensive clamp: if `images` shrinks (e.g. this instance is reused across
  // a prop change instead of being remounted), fall back to the last slide
  // rather than reading past the end of the array.
  const activeIndex = index < total ? index : total - 1;

  return (
    <div
      className="w-full"
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") goTo(activeIndex - 1);
        if (event.key === "ArrowRight") goTo(activeIndex + 1);
      }}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <PlaceholderArt
          key={activeIndex}
          variant={images[activeIndex].variant}
          label={images[activeIndex].alt}
          className="h-full w-full"
        />
        {total > 1 && (
          <>
            <button
              type="button"
              onClick={() => goTo(activeIndex - 1)}
              aria-label="Předchozí fotografie"
              className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-paper/85 text-ink transition-colors hover:bg-paper hover:text-clay"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => goTo(activeIndex + 1)}
              aria-label="Další fotografie"
              className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-paper/85 text-ink transition-colors hover:bg-paper hover:text-clay"
            >
              ›
            </button>
            <span className="absolute bottom-3 right-3 rounded-full bg-paper/85 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-ink-soft">
              {activeIndex + 1} / {total}
            </span>
          </>
        )}
      </div>

      {total > 1 && (
        <div className="mt-3 flex gap-3 overflow-x-auto pb-1">
          {images.map((image, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Zobrazit fotografii ${i + 1}`}
              aria-current={i === activeIndex}
              className={`h-16 w-20 shrink-0 overflow-hidden transition-opacity ${
                i === activeIndex ? "opacity-100 ring-2 ring-clay" : "opacity-60 hover:opacity-100"
              }`}
            >
              <PlaceholderArt variant={image.variant} className="h-full w-full" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
