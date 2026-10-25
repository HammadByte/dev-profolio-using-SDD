import type { Project, ProjectAccent } from "@/types/portfolio";
import { cn } from "@/lib/utils";

const accents: Record<ProjectAccent, string> = {
  cobalt:
    "bg-[linear-gradient(140deg,#0d1734_0%,#2145d8_58%,#8298ff_100%)]",
  violet:
    "bg-[linear-gradient(140deg,#241433_0%,#6e35c9_58%,#c59bff_100%)]",
  emerald:
    "bg-[linear-gradient(140deg,#062a25_0%,#0e7a63_58%,#7ee7c4_100%)]",
};

type ProjectVisualProps = {
  project: Project;
  className?: string;
};

/**
 * Abstract, content-driven artwork used instead of unverified screenshots.
 * Replace with real project imagery when approved assets exist.
 */
export function ProjectVisual({ project, className }: ProjectVisualProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative isolate overflow-hidden",
        accents[project.accent],
        className,
      )}
    >
      <div className="project-grid absolute inset-0 opacity-40" />
      <div className="absolute -right-20 -top-24 size-72 rounded-full border border-white/15" />
      <div className="absolute -right-4 top-10 size-44 rounded-full border border-white/10" />
      <div className="absolute -bottom-20 left-10 size-52 rounded-full border border-white/[0.07]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_12%,rgba(255,255,255,0.3),transparent_48%)]" />
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/45 to-transparent" />

      <span className="absolute left-5 top-5 font-mono text-[10px] uppercase tracking-[0.22em] text-white/65">
        Selected project
      </span>
      <span className="absolute right-5 top-5 font-mono text-xs text-white/60">
        {project.index}
      </span>
      <p className="absolute bottom-5 left-5 max-w-[80%] font-display text-4xl leading-none text-white drop-shadow-sm sm:text-5xl">
        {project.title}
      </p>
      <span className="absolute bottom-6 right-5 hidden font-mono text-[10px] uppercase tracking-[0.2em] text-white/55 sm:block">
        {project.technologies[0] ?? "Web"}
      </span>
    </div>
  );
}
