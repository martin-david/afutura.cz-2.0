import type { Service } from "@/data/services";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="border-t border-line py-10 first:border-t-0 sm:grid sm:grid-cols-[auto_1fr] sm:gap-10">
      <span className="font-display text-sm text-stone">{service.index}</span>
      <div className="mt-3 sm:mt-0">
        <h3 className="font-display text-2xl font-semibold text-ink">{service.title}</h3>
        <p className="mt-3 max-w-2xl text-ink-soft">{service.summary}</p>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-stone">{service.description}</p>
      </div>
    </div>
  );
}
