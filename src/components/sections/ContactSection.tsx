import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import type { Profile, SocialLink } from "@/types/portfolio";
import { Container } from "@/components/ui/Container";
import { CopyEmailButton } from "@/components/ui/CopyEmailButton";
import { SocialLinks } from "@/components/layout/SocialLinks";

type ContactSectionProps = {
  profile: Profile;
  socialLinks: SocialLink[];
};

export function ContactSection({
  profile,
  socialLinks,
}: ContactSectionProps) {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="scroll-mt-24 py-20 sm:py-28"
    >
      <Container>
        <div className="relative isolate overflow-hidden rounded-3xl bg-foreground px-6 py-12 text-background sm:px-10 sm:py-16 lg:px-16">
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-32 -z-10 size-96 rounded-full bg-accent/30 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="contact-grid absolute inset-0 -z-10 opacity-[0.08]"
          />

          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
            <div>
              <p className="flex items-center gap-3 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-background/60">
                <span aria-hidden="true">06</span>
                <span aria-hidden="true" className="h-px w-8 bg-background/30" />
                <span>Contact</span>
              </p>

              <h2
                id="contact-title"
                className="mt-4 max-w-xl text-balance font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
              >
                Let&apos;s build something considered.
              </h2>

              <p className="mt-5 max-w-lg text-base leading-7 text-background/70">
                Have a role, project, or collaboration in mind? Email is the
                simplest way to start the conversation. This contact method is
                a placeholder until an approved address is provided.
              </p>

              <div className="mt-9 flex flex-col gap-6 sm:flex-row sm:items-start">
                <a
                  href={`mailto:${profile.email}`}
                  className="group inline-flex min-w-0 items-center gap-2 text-lg font-medium underline decoration-background/30 underline-offset-8 transition-colors hover:decoration-background"
                >
                  <span className="break-all">{profile.email}</span>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
                <CopyEmailButton email={profile.email} />
              </div>

              <SocialLinks
                links={socialLinks}
                tone="inverse"
                className="mt-8"
              />
            </div>

            <div className="border-t border-background/15 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-background/50">
                Details
              </h3>
              <dl className="mt-5 space-y-5 text-sm">
                <div>
                  <dt className="text-background/50">Location</dt>
                  <dd className="mt-1 inline-flex items-center gap-2">
                    <MapPin aria-hidden="true" className="size-4" />
                    {profile.location}
                  </dd>
                </div>
                <div>
                  <dt className="text-background/50">Email</dt>
                  <dd className="mt-1">
                    <a
                      href={`mailto:${profile.email}`}
                      className="inline-flex items-center gap-2 break-all underline decoration-background/25 underline-offset-4 hover:decoration-background"
                    >
                      <Mail aria-hidden="true" className="size-4 shrink-0" />
                      {profile.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-background/50">Focus</dt>
                  <dd className="mt-1">{profile.title}</dd>
                </div>
              </dl>
              <p className="mt-8 text-xs leading-5 text-background/50">
                A contact form is intentionally omitted until a verified
                delivery mechanism and abuse protection are configured.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
