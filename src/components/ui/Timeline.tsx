import { Link } from "react-router-dom";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import type { TimelineEntry, TimelineEntryKind } from "@/data/timeline";

const KIND_LABELS: Record<TimelineEntryKind, string> = {
  vzdelani: "Vzdělání",
  "skolni-projekt": "Školní projekt",
  prace: "Praxe",
};

/**
 * Bespoke, dependency-free vertical timeline. Each entry is a flex row with
 * a narrow "rail" column (dot + connecting line that stretches to match
 * the card's own height) followed by the content — period, title, curated
 * copy and optional real curated photography. No third-party timeline
 * library; styled with the same Tailwind tokens as every other component.
 */
export default function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <ol className="space-y-12">
      {entries.map((entry, index) => (
        <li key={entry.id} className="flex gap-5 sm:gap-8">
          <div className="flex w-4 shrink-0 flex-col items-center sm:w-5">
            <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-clay" aria-hidden="true" />
            {index < entries.length - 1 && (
              <span className="mt-1 w-px flex-1 bg-line" aria-hidden="true" />
            )}
          </div>

          <RevealOnScroll delay={(index % 6) * 80} className="min-w-0 flex-1 pb-2">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="font-display text-sm font-semibold text-stone">{entry.period}</span>
              <span className="text-xs font-medium uppercase tracking-[0.15em] text-clay">
                {KIND_LABELS[entry.kind]}
              </span>
            </div>
            <h3 className="mt-2 font-display text-xl font-semibold text-ink sm:text-2xl">
              {entry.title}
            </h3>
            {entry.subtitle && <p className="mt-1 text-sm text-ink-soft">{entry.subtitle}</p>}
            {entry.description.map((paragraph) => (
              <p key={paragraph} className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft">
                {paragraph}
              </p>
            ))}
            {entry.images && entry.images.length > 0 && (
              <div
                className={`mt-5 grid gap-3 ${
                  entry.images.length > 1 ? "max-w-xl grid-cols-2" : "max-w-md grid-cols-1"
                }`}
              >
                {entry.images.map((image) => (
                  <div key={image.src} className="aspect-[4/3] overflow-hidden bg-paper-dim">
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
            {entry.link && (
              <Link
                to={entry.link.to}
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.1em] text-clay"
              >
                {entry.link.label}
              </Link>
            )}
          </RevealOnScroll>
        </li>
      ))}
    </ol>
  );
}
