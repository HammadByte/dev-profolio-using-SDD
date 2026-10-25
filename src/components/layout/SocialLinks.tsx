import {
  AtSign,
  BriefcaseBusiness,
  Code2,
  Mail,
  type LucideIcon,
} from "lucide-react";
import type { SocialIcon, SocialLink } from "@/types/portfolio";
import { cn, isExternalUrl } from "@/lib/utils";

const icons: Record<SocialIcon, LucideIcon> = {
  github: Code2,
  linkedin: BriefcaseBusiness,
  x: AtSign,
  mail: Mail,
};

type SocialLinksProps = {
  links: SocialLink[];
  tone?: "default" | "inverse";
  className?: string;
};

export function SocialLinks({
  links,
  tone = "default",
  className,
}: SocialLinksProps) {
  if (links.length === 0) return null;

  return (
    <ul className={cn("flex flex-wrap items-center gap-2", className)}>
      {links.map((link) => {
        const Icon = icons[link.icon];
        const external = isExternalUrl(link.href);

        return (
          <li key={link.label}>
            <a
              href={link.href}
              className={cn(
                "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
                tone === "inverse"
                  ? "border-background/25 text-background/90 hover:border-background/50 hover:bg-background/10"
                  : "border-line bg-surface text-muted hover:border-accent/40 hover:text-foreground",
              )}
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : undefined)}
            >
              <Icon aria-hidden="true" className="size-3.5" />
              {link.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
