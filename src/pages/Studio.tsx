import Container from "@/components/ui/Container";
import PlaceholderArt from "@/components/ui/PlaceholderArt";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SectionHeading from "@/components/ui/SectionHeading";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const STEPS = [
  {
    title: "Konzultace a studie",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  },
  {
    title: "Projekt a povolení",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
  },
  {
    title: "Realizace stavby",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
  },
];

export default function Studio() {
  useDocumentTitle("Studio — Afutura");

  return (
    <>
      <header className="border-b border-line py-20">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-clay">Studio</p>
          <h1 className="mt-4 max-w-3xl text-balance font-display text-4xl font-bold text-ink sm:text-5xl">
            Ing. arch. Lenka David
          </h1>
          <p className="mt-3 text-lg text-ink-soft">Architektka a stavební inženýrka</p>
        </Container>
      </header>

      <section className="border-b border-line py-20">
        <Container className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <RevealOnScroll>
            <div className="aspect-[3/4] w-full max-w-sm">
              <PlaceholderArt variant={2} label="Portrét v přípravě" className="h-full w-full" />
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={100} className="space-y-5 leading-relaxed text-ink-soft">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi
              architecto beatae vitae.
            </p>
          </RevealOnScroll>
        </Container>
      </section>

      <section className="border-b border-line bg-paper-dim py-24">
        <Container>
          <RevealOnScroll>
            <blockquote className="mx-auto max-w-3xl text-balance text-center font-display text-2xl font-medium leading-snug text-ink sm:text-3xl">
              „Dobrá architektura vychází z místa, měřítka a potřeb lidí, kteří v ní budou žít.“
            </blockquote>
          </RevealOnScroll>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <RevealOnScroll>
            <SectionHeading eyebrow="Přístup" title="Jak pracujeme" align="center" />
          </RevealOnScroll>
          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            {STEPS.map((step, index) => (
              <RevealOnScroll key={step.title} delay={index * 100}>
                <div className="border-t border-line pt-6">
                  <span className="font-display text-sm text-stone">0{index + 1}</span>
                  <h3 className="mt-3 font-display text-lg font-semibold text-ink">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.text}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
