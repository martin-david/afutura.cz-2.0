import Container from "@/components/ui/Container";
import Timeline from "@/components/ui/Timeline";
import { timeline } from "@/data/timeline";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function TimelinePage() {
  useDocumentTitle("Kariéra — Afutura");

  return (
    <>
      <header className="border-b border-line py-20">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-clay">Kariéra</p>
          <h1 className="mt-4 max-w-2xl text-balance font-display text-4xl font-bold text-ink sm:text-5xl">
            Cesta od studia po vlastní ateliér
          </h1>
          <p className="mt-4 max-w-xl text-ink-soft">
            Architektuře se Ing. arch. Lenka David věnuje od roku 2007. Od studentských návrhů přes
            projekční praxi u zavedených ateliérů až po založení vlastní stavební firmy Afutura —
            zde je její profesní cesta v datech.
          </p>
        </Container>
      </header>

      <section className="py-20">
        <Container>
          <Timeline entries={timeline} />
        </Container>
      </section>
    </>
  );
}
