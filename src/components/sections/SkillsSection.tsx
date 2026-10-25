import {
  Cloud,
  Code2,
  Database,
  Layers3,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import type { SkillCategory, SkillIcon } from "@/types/portfolio";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";

const icons: Record<SkillIcon, LucideIcon> = {
  code: Code2,
  layers: Layers3,
  database: Database,
  wrench: Wrench,
  cloud: Cloud,
};

type SkillsSectionProps = {
  skills: SkillCategory[];
};

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="scroll-mt-24 border-b border-line bg-surface/40 py-20 sm:py-28"
    >
      <Container>
        <SectionHeading
          index="02"
          eyebrow="Skills"
          titleId="skills-title"
          title="A practical toolkit."
          description="Grouped by how the tools are used, not by invented proficiency scores. Replace these categories and skills with your approved stack."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((category, index) => {
            const Icon = icons[category.icon];

            return (
              <article
                key={category.id}
                className="group rounded-2xl border border-line bg-surface p-6 transition-colors duration-300 hover:border-accent/40"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="grid size-10 place-items-center rounded-xl border border-line bg-surface-2 text-accent transition-colors group-hover:border-accent/30">
                    <Icon aria-hidden="true" className="size-5" />
                  </span>
                  <span
                    aria-hidden="true"
                    className="font-mono text-[10px] tracking-[0.18em] text-muted"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-5 text-base font-semibold">
                  {category.title}
                </h3>
                <p className="mt-1.5 text-sm leading-6 text-muted">
                  {category.description}
                </p>

                <ul
                  aria-label={`${category.title} skills`}
                  className="mt-5 flex flex-wrap gap-2"
                >
                  {category.skills.map((skill) => (
                    <li key={skill}>
                      <Tag>{skill}</Tag>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
