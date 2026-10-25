import { Award, GraduationCap } from "lucide-react";
import type { Certification, EducationItem } from "@/types/portfolio";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

type EducationSectionProps = {
  education: EducationItem[];
  certifications: Certification[];
};

export function EducationSection({
  education,
  certifications,
}: EducationSectionProps) {
  const hasContent = education.length > 0 || certifications.length > 0;

  return (
    <section
      id="education"
      aria-labelledby="education-title"
      className="scroll-mt-24 border-b border-line py-20 sm:py-28"
    >
      <Container>
        <SectionHeading
          index="05"
          eyebrow="Education & credentials"
          titleId="education-title"
          title="Foundations and continued learning."
          description="Only verified qualifications and certifications belong here. Incomplete credentials should not be presented as completed."
        />

        {hasContent ? (
          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            {education.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-line bg-surface p-6 sm:p-8"
              >
                <span className="grid size-10 place-items-center rounded-xl border border-line bg-surface-2 text-accent">
                  <GraduationCap aria-hidden="true" className="size-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight">
                  {item.credential}
                </h3>
                <p className="mt-1 text-sm text-foreground/80">
                  {item.institution}
                </p>
                <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
                  {item.period}
                </p>
                {item.details ? (
                  <p className="mt-3 text-sm leading-6 text-muted">
                    {item.details}
                  </p>
                ) : null}
              </article>
            ))}

            {certifications.map((certification) => (
              <article
                key={certification.id}
                className="rounded-2xl border border-line bg-surface p-6 sm:p-8"
              >
                <span className="grid size-10 place-items-center rounded-xl border border-line bg-surface-2 text-accent">
                  <Award aria-hidden="true" className="size-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight">
                  {certification.name}
                </h3>
                <p className="mt-1 text-sm text-foreground/80">
                  {certification.issuer}
                </p>
                <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
                  {certification.year}
                </p>
                {certification.url ? (
                  <a
                    href={certification.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-sm font-medium text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent"
                  >
                    Verify credential
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        ) : (
          <p className="mt-12 rounded-2xl border border-dashed border-line p-8 text-sm leading-6 text-muted">
            Education and certification details will be added once approved
            information is available.
          </p>
        )}
      </Container>
    </section>
  );
}
