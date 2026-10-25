import { ArrowUpRight, Code2 } from "lucide-react";
import type { Project } from "@/types/portfolio";
import { cn } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ProjectVisual } from "@/components/ui/ProjectVisual";
import { Tag } from "@/components/ui/Tag";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const featured = Boolean(project.featured);

  return (
    <article
      className={cn(
        "group overflow-hidden rounded-2xl border border-line bg-surface transition-colors duration-300 hover:border-accent/40",
        featured && "md:col-span-2",
      )}
    >
      <div className={cn(featured && "grid md:grid-cols-[1.08fr_1fr]")}>
        <ProjectVisual
          project={project}
          className={cn(
            "aspect-[16/10]",
            featured && "md:aspect-auto md:h-full md:min-h-[24rem]",
          )}
        />

        <div
          className={cn(
            "flex flex-col p-6 sm:p-8",
            featured && "md:justify-center md:p-10",
          )}
        >
          <div className="mb-4 flex flex-wrap items-center gap-3">
            {featured ? (
              <span className="inline-flex items-center rounded-full bg-accent-soft px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                Featured
              </span>
            ) : null}
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
              Project {project.index}
            </span>
          </div>

          <h3 className="font-display text-3xl leading-tight tracking-tight sm:text-4xl">
            {project.title}
          </h3>
          <p className="mt-3 text-sm font-medium leading-6 text-foreground/90">
            {project.summary}
          </p>
          <p className="mt-3 text-sm leading-6 text-muted">
            {project.description}
          </p>

          <ul
            aria-label={`${project.title} technologies`}
            className="mt-6 flex flex-wrap gap-2"
          >
            {project.technologies.map((technology) => (
              <li key={technology}>
                <Tag>{technology}</Tag>
              </li>
            ))}
          </ul>

          {project.liveUrl || project.repositoryUrl ? (
            <div className="mt-7 flex flex-wrap items-center gap-2">
              {project.liveUrl ? (
                <ButtonLink
                  href={project.liveUrl}
                  variant="secondary"
                  size="sm"
                  icon={<ArrowUpRight aria-hidden="true" className="size-4" />}
                >
                  Live demo
                </ButtonLink>
              ) : null}
              {project.repositoryUrl ? (
                <ButtonLink
                  href={project.repositoryUrl}
                  variant="ghost"
                  size="sm"
                  icon={<Code2 aria-hidden="true" className="size-4" />}
                >
                  Source code
                </ButtonLink>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}
