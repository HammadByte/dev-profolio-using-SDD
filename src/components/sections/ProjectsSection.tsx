import type { Project } from "@/types/portfolio";
import { Container } from "@/components/ui/Container";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

type ProjectsSectionProps = {
  projects: Project[];
};

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="scroll-mt-24 border-b border-line py-20 sm:py-28"
    >
      <Container>
        <SectionHeading
          index="03"
          eyebrow="Projects"
          titleId="projects-title"
          title="Selected work, described honestly."
          description="Each card is ready for a real project summary, technology list, and verified links. Repository and demo actions only appear when a URL is provided."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
