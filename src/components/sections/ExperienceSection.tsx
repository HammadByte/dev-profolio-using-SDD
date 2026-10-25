import { MapPin } from "lucide-react";
import type { ExperienceItem } from "@/types/portfolio";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";

type ExperienceSectionProps = {
  experience: ExperienceItem[];
};

export function ExperienceSection({ experience }: ExperienceSectionProps) {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="scroll-mt-24 border-b border-line bg-surface/40 py-20 sm:py-28"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              index="04"
              eyebrow="Experience"
              titleId="experience-title"
              title="Where the work happens."
              description="Replace these entries with verified roles, dates, responsibilities, and outcomes. No employer information is published until it is approved."
            />
          </div>

          {experience.length > 0 ? (
            <ol className="relative space-y-10 border-l border-line pl-6 sm:pl-8">
              {experience.map((item) => (
                <li key={item.id} className="relative">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[1.95rem] top-2 size-3 rounded-full border-2 border-background bg-accent sm:-left-[2.45rem]"
                  />

                  <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight">
                        {item.role}
                      </h3>
                      <p className="mt-1 text-sm text-foreground/80">
                        {item.organization}
                      </p>
                    </div>
                    <div className="shrink-0 text-left sm:text-right">
                      <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
                        {item.period}
                      </p>
                      {item.location ? (
                        <p className="mt-1 inline-flex items-center gap-1 text-xs text-muted">
                          <MapPin
                            aria-hidden="true"
                            className="size-3"
                          />
                          {item.location}
                        </p>
                      ) : null}
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-muted">
                    {item.summary}
                  </p>

                  {item.highlights.length > 0 ? (
                    <ul className="mt-4 space-y-2">
                      {item.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex gap-2.5 text-sm leading-6 text-foreground/80"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-2.5 size-1 shrink-0 rounded-full bg-accent"
                          />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {item.technologies && item.technologies.length > 0 ? (
                    <ul
                      aria-label={`${item.role} technologies`}
                      className="mt-5 flex flex-wrap gap-2"
                    >
                      {item.technologies.map((technology) => (
                        <li key={technology}>
                          <Tag>{technology}</Tag>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ))}
            </ol>
          ) : (
            <p className="rounded-2xl border border-dashed border-line p-8 text-sm leading-6 text-muted">
              Experience details will be added once approved information is
              available.
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
