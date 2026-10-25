import { ArrowUp } from "lucide-react";
import type { NavItem, Profile, SocialLink } from "@/types/portfolio";
import { Container } from "@/components/ui/Container";
import { SocialLinks } from "@/components/layout/SocialLinks";

type FooterProps = {
  profile: Profile;
  nav: NavItem[];
  socialLinks: SocialLink[];
  copyrightYear: number;
};

export function Footer({
  profile,
  nav,
  socialLinks,
  copyrightYear,
}: FooterProps) {
  return (
    <footer className="border-t border-line bg-surface/50">
      <Container className="py-12 sm:py-16">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <a
              href="#home"
              className="inline-flex items-center gap-3 rounded-full"
            >
              <span className="grid size-9 place-items-center rounded-xl bg-foreground font-mono text-xs font-semibold text-background">
                {profile.initials}
              </span>
              <span className="text-sm font-semibold tracking-tight">
                {profile.name}
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-6 text-muted">
              {profile.title} · {profile.location}
            </p>
            <SocialLinks links={socialLinks} className="mt-5" />
          </div>

          <nav aria-label="Footer">
            <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
              Navigate
            </h2>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-foreground/80 transition-colors hover:text-accent"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
              Contact
            </h2>
            <a
              href={`mailto:${profile.email}`}
              className="mt-4 inline-block break-all text-sm text-foreground/80 transition-colors hover:text-accent"
            >
              {profile.email}
            </a>
            <a
              href="#home"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-xs text-muted transition-colors hover:border-accent/40 hover:text-foreground"
            >
              <ArrowUp aria-hidden="true" className="size-3.5" />
              Back to top
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {copyrightYear} {profile.name}. All rights reserved.
          </p>
          <p>
            Built with Next.js, TypeScript &amp; Tailwind CSS.
          </p>
        </div>
      </Container>
    </footer>
  );
}
