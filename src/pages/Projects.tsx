import Container from "@/components/ui/Container";
import ProjectCard from "@/components/ui/ProjectCard";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { projects } from "@/data/projects";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function Projects() {
  useDocumentTitle("Realizace — Afutura");

  return (
    <>
      <header className="border-b border-line py-20">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-clay">Realizace</p>
          <h1 className="mt-4 max-w-2xl text-balance font-display text-4xl font-bold text-ink sm:text-5xl">
            Výběr z našich projektů
          </h1>
          <p className="mt-4 max-w-xl text-ink-soft">
            Fotografie a detailní popisy realizovaných staveb doplníme v další fázi. Níže je
            orientační přehled typů projektů, na kterých pracujeme.
          </p>
        </Container>
      </header>

      <section className="py-16">
        <Container>
          <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <RevealOnScroll key={project.id} delay={(index % 3) * 100}>
                <ProjectCard project={project} />
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
