import { Link } from "react-router-dom";
import Container from "@/components/ui/Container";
import PlaceholderArt from "@/components/ui/PlaceholderArt";
import ProjectCard from "@/components/ui/ProjectCard";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function Home() {
  useDocumentTitle("Afutura — architektonický ateliér");

  return (
    <>
      <section className="relative flex min-h-[88vh] items-center overflow-hidden border-b border-line">
        <div className="absolute inset-0">
          <PlaceholderArt variant={5} className="h-full w-full" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-paper via-paper/70 to-paper/20" />
        <Container className="relative">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-clay">
            Architektonický ateliér
          </p>
          <h1 className="mt-6 max-w-4xl text-balance font-display font-bold leading-[0.95] text-ink text-[clamp(2.5rem,8vw,5.5rem)]">
            Domy s citem pro místo i detail.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft">
            Ing. arch. Lenka David navrhuje, projektuje a staví rodinné domy a rekonstrukce od první
            skici až po předání klíčů.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/realizace"
              className="rounded-full bg-ink px-6 py-3 text-sm font-medium uppercase tracking-[0.08em] text-paper transition-colors hover:bg-clay"
            >
              Naše realizace
            </Link>
            <Link
              to="/kontakt"
              className="rounded-full border border-ink px-6 py-3 text-sm font-medium uppercase tracking-[0.08em] text-ink transition-colors hover:border-clay hover:text-clay"
            >
              Kontaktujte nás
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-b border-line py-24">
        <Container>
          <div className="grid gap-12 md:grid-cols-2 md:items-end">
            <RevealOnScroll>
              <SectionHeading
                eyebrow="Ateliér"
                title="Architektura, projekce a stavba pod jednou střechou."
              />
            </RevealOnScroll>
            <RevealOnScroll delay={100}>
              <p className="leading-relaxed text-ink-soft">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
              </p>
              <Link
                to="/studio"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.1em] text-clay"
              >
                Více o studiu →
              </Link>
            </RevealOnScroll>
          </div>
        </Container>
      </section>

      <section className="border-b border-line bg-paper-dim py-24">
        <Container>
          <RevealOnScroll>
            <SectionHeading
              eyebrow="Co děláme"
              title="Od první skici až po předání klíčů"
              align="center"
            />
          </RevealOnScroll>
          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            {services.map((service, index) => (
              <RevealOnScroll key={service.id} delay={index * 100}>
                <div className="h-full border border-line bg-paper p-8">
                  <span className="font-display text-sm text-stone">{service.index}</span>
                  <h3 className="mt-4 font-display text-xl font-semibold text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">{service.summary}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/sluzby"
              className="text-sm font-semibold uppercase tracking-[0.1em] text-clay"
            >
              Všechny služby →
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-b border-line py-24">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <RevealOnScroll>
              <SectionHeading eyebrow="Realizace" title="Vybrané projekty" />
            </RevealOnScroll>
            <RevealOnScroll delay={100}>
              <Link
                to="/realizace"
                className="text-sm font-semibold uppercase tracking-[0.1em] text-clay"
              >
                Všechny realizace →
              </Link>
            </RevealOnScroll>
          </div>
          <div className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((project, index) => (
              <RevealOnScroll key={project.id} delay={index * 100}>
                <ProjectCard project={project} />
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ink py-24 text-paper">
        <Container className="text-center">
          <RevealOnScroll>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-clay">
              Máte projekt?
            </p>
            <h2 className="mx-auto mt-4 max-w-2xl text-balance font-display text-3xl font-semibold sm:text-4xl">
              Probereme spolu váš dům, rekonstrukci nebo pozemek.
            </h2>
            <a
              href="mailto:lenkadavid@afutura.cz"
              className="mt-8 inline-flex rounded-full bg-paper px-7 py-3 text-sm font-medium uppercase tracking-[0.08em] text-ink transition-colors hover:bg-clay hover:text-paper"
            >
              lenkadavid@afutura.cz
            </a>
          </RevealOnScroll>
        </Container>
      </section>
    </>
  );
}
