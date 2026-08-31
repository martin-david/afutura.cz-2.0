import { Link, useParams } from "react-router-dom";
import Container from "@/components/ui/Container";
import ImageCarousel from "@/components/ui/ImageCarousel";
import PlaceholderArt from "@/components/ui/PlaceholderArt";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { getProjectImages, projects } from "@/data/projects";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import NotFound from "@/pages/NotFound";

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const index = projects.findIndex((p) => p.slug === slug);
  const project = index === -1 ? undefined : projects[index];

  useDocumentTitle(
    project ? `${project.title} — Realizace — Afutura` : "Stránka nenalezena — Afutura",
  );

  if (!project) return <NotFound />;

  const images = getProjectImages(project);
  const [hero, ...gallery] = images;
  const previous = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <header className="border-b border-line py-16">
        <Container>
          <Link
            to="/realizace"
            className="text-sm font-medium uppercase tracking-[0.08em] text-ink-soft transition-colors hover:text-clay"
          >
            ← Zpět na Realizace
          </Link>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-clay">
            {project.category}
          </p>
          <h1 className="mt-4 max-w-2xl text-balance font-display text-4xl font-bold text-ink sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 text-ink-soft">
            {project.location} <span aria-hidden="true">·</span> {project.year}
          </p>
        </Container>
      </header>

      <section className="py-12">
        <Container>
          <RevealOnScroll>
            <div className="aspect-[21/9] w-full overflow-hidden">
              <PlaceholderArt variant={hero.variant} label={hero.alt} className="h-full w-full" />
            </div>
          </RevealOnScroll>
        </Container>
      </section>

      {gallery.length > 0 && (
        <section className="pb-12">
          <Container>
            <RevealOnScroll>
              {/* Key by slug so the carousel's slide index resets when navigating
                  between projects with different gallery lengths. */}
              <ImageCarousel key={project.slug} images={gallery} />
            </RevealOnScroll>
          </Container>
        </section>
      )}

      <section className="border-t border-line py-16">
        <Container className="max-w-2xl">
          <RevealOnScroll className="space-y-5 leading-relaxed text-ink-soft">
            {project.description.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </RevealOnScroll>
        </Container>
      </section>

      <nav aria-label="Další projekty" className="border-t border-line py-12">
        <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <Link to={`/realizace/${previous.slug}`} className="group flex flex-col text-left">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-stone">
              Předchozí realizace
            </span>
            <span className="mt-1 font-display text-lg font-semibold text-ink transition-colors group-hover:text-clay">
              ← {previous.title}
            </span>
          </Link>
          <Link
            to={`/realizace/${next.slug}`}
            className="group flex flex-col text-right sm:items-end"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-stone">
              Další realizace
            </span>
            <span className="mt-1 font-display text-lg font-semibold text-ink transition-colors group-hover:text-clay">
              {next.title} →
            </span>
          </Link>
        </Container>
      </nav>
    </>
  );
}
