import { ArrowDown, ArrowUpRight, Mail, MapPin, Terminal } from "lucide-react";
import type { Profile, SocialLink } from "@/types/portfolio";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { SocialLinks } from "@/components/layout/SocialLinks";

type HeroSectionProps = {
  profile: Profile;
  socialLinks: SocialLink[];
};

function CodeCard({ profile }: { profile: Profile }) {
  const lines = [
    "const developer = {",
    `  name: "${profile.name}",`,
    `  role: "${profile.title}",`,
    "  stack: [",
    ...profile.coreStack.map(
      (item, index) =>
        `    "${item}"${index < profile.coreStack.length - 1 ? "," : ""}`,
    ),
    "  ],",
    '  mindset: "clarity over cleverness",',
    "};",
  ];

  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute -inset-6 rounded-[2.5rem] bg-accent/10 blur-3xl"
      />
      <div className="relative overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl shadow-black/[0.08]">
        <div className="flex items-center justify-between border-b border-line px-5 py-3">
          <div aria-hidden="true" className="flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-red-400/80" />
            <span className="size-2 rounded-full bg-amber-400/80" />
            <span className="size-2 rounded-full bg-emerald-400/80" />
          </div>
          <span className="font-mono text-[10px] tracking-wide text-muted">
            profile.ts
          </span>
        </div>

        <pre className="overflow-x-auto p-5 font-mono text-[11px] leading-6 sm:text-xs">
          <code>
            {lines.map((line, lineIndex) => (
              <span key={lineIndex} className="block whitespace-pre">
                {line.split(/(["'][^"']*["'])/g).map((part, partIndex) =>
                  /^["']/.test(part) ? (
                    <span key={partIndex} className="text-accent">
                      {part}
                    </span>
                  ) : (
                    <span key={partIndex}>{part}</span>
                  ),
                )}
              </span>
            ))}
          </code>
        </pre>

        <div className="flex items-center gap-3 border-t border-line p-5">
          <span className="grid size-10 shrink-0 place-items-center rounded-full bg-accent-soft font-mono text-xs font-semibold text-accent">
            {profile.initials}
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold">{profile.name}</p>
            <p className="truncate text-xs text-muted">{profile.location}</p>
          </div>
          <span
            aria-hidden="true"
            className="ml-auto size-2 shrink-0 rounded-full bg-emerald-500"
          />
        </div>
      </div>

      <div className="absolute -bottom-4 left-4 hidden rounded-full border border-line bg-surface px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted shadow-sm sm:block">
        Next.js · TypeScript
      </div>
    </div>
  );
}

export function HeroSection({ profile, socialLinks }: HeroSectionProps) {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden border-b border-line"
    >
      <div aria-hidden="true" className="hero-grid absolute inset-0 -z-10" />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 -z-10 h-[32rem] w-[52rem] -translate-x-1/2 rounded-full bg-accent/[0.07] blur-3xl"
      />

      <Container className="grid items-center gap-16 py-16 sm:py-20 lg:grid-cols-[1.25fr_1fr] lg:gap-12 lg:py-28">
        <div className="hero-enter">
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-3 py-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-muted backdrop-blur-sm">
            <Terminal aria-hidden="true" className="size-3.5 text-accent" />
            {profile.title}
          </p>

          <h1
            id="hero-title"
            className="mt-6 text-balance font-display text-[clamp(3.5rem,10vw,7rem)] leading-[0.92] tracking-tight"
          >
            {profile.name}
            <span className="text-accent">.</span>
          </h1>

          <p className="mt-6 max-w-xl text-balance font-display text-3xl leading-tight text-muted sm:text-4xl">
            {profile.headline}
          </p>

          <p className="mt-6 max-w-xl text-base leading-7 text-muted">
            {profile.intro}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <ButtonLink
              href="#projects"
              icon={<ArrowDown aria-hidden="true" className="size-4" />}
            >
              View projects
            </ButtonLink>
            <ButtonLink
              href="#contact"
              variant="secondary"
              icon={<ArrowUpRight aria-hidden="true" className="size-4" />}
            >
              Get in touch
            </ButtonLink>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-line pt-6 text-sm text-muted sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8">
            <span className="inline-flex items-center gap-2">
              <MapPin aria-hidden="true" className="size-4 text-accent" />
              {profile.location}
            </span>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
            >
              <Mail aria-hidden="true" className="size-4 text-accent" />
              <span className="break-all">{profile.email}</span>
            </a>
          </div>

          <SocialLinks links={socialLinks} className="mt-6" />
        </div>

        <div className="hero-enter hero-enter-delay-1 lg:pl-4">
          <CodeCard profile={profile} />
        </div>
      </Container>
    </section>
  );
}
