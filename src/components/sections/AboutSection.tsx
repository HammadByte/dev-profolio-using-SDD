import type { Profile } from "@/types/portfolio";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

type AboutSectionProps = {
  profile: Profile;
};

export function AboutSection({ profile }: AboutSectionProps) {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="scroll-mt-24 border-b border-line py-20 sm:py-28"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <SectionHeading
            index="01"
            eyebrow="About"
            titleId="about-title"
            title="Thoughtful work, built to last."
            description="A short introduction to how I approach engineering, collaboration, and the web."
          />

          <div>
            <p className="text-pretty text-lg leading-8 text-foreground/85">
              {profile.intro}
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {profile.focusAreas.map((focus, index) => (
                <article
                  key={focus.title}
                  className="rounded-2xl border border-line bg-surface p-5 transition-colors duration-300 hover:border-accent/40"
                >
                  <p
                    aria-hidden="true"
                    className="font-mono text-[10px] tracking-[0.18em] text-accent"
                  >
                    0{index + 1}
                  </p>
                  <h3 className="mt-4 text-sm font-semibold leading-5">
                    {focus.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {focus.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
