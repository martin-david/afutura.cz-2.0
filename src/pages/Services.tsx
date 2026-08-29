import { Link } from "react-router-dom";
import Container from "@/components/ui/Container";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import ServiceCard from "@/components/ui/ServiceCard";
import { services } from "@/data/services";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function Services() {
  useDocumentTitle("Služby — Afutura");

  return (
    <>
      <header className="border-b border-line py-20">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-clay">Služby</p>
          <h1 className="mt-4 max-w-2xl text-balance font-display text-4xl font-bold text-ink sm:text-5xl">
            Architektura, projekce a stavba pod jednou střechou
          </h1>
          <p className="mt-4 max-w-xl text-ink-soft">
            Zajišťujeme kompletní proces výstavby i rekonstrukce rodinného domu — od úvodní studie
            přes projektovou dokumentaci až po samotnou realizaci.
          </p>
        </Container>
      </header>

      <section className="py-16">
        <Container>
          {services.map((service, index) => (
            <RevealOnScroll key={service.id} delay={index * 80}>
              <ServiceCard service={service} />
            </RevealOnScroll>
          ))}
        </Container>
      </section>

      <section className="border-t border-line bg-ink py-20 text-paper">
        <Container className="text-center">
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">
            Nevíte, kterou službu potřebujete?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-paper/70">
            Napište nám pár slov o svém záměru a společně probereme, jak na to.
          </p>
          <Link
            to="/kontakt"
            className="mt-8 inline-flex rounded-full bg-paper px-7 py-3 text-sm font-medium uppercase tracking-[0.08em] text-ink transition-colors hover:bg-clay hover:text-paper"
          >
            Kontaktujte nás
          </Link>
        </Container>
      </section>
    </>
  );
}
