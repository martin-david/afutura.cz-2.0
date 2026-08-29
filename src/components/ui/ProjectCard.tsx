import { Link } from "react-router-dom";
import PlaceholderArt from "@/components/ui/PlaceholderArt";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link to="/realizace" className="group block">
      <div className="aspect-[4/3] overflow-hidden">
        <PlaceholderArt
          variant={project.variant}
          label="Foto v přípravě"
          className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-lg font-semibold text-ink">{project.title}</h3>
          <p className="mt-1 text-sm text-ink-soft">{project.location}</p>
        </div>
        <span className="whitespace-nowrap text-sm text-stone">{project.year}</span>
      </div>
      <p className="mt-2 text-xs font-medium uppercase tracking-[0.15em] text-clay">
        {project.category}
      </p>
    </Link>
  );
}
