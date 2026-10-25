import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: string;
  titleId?: string;
  description?: string;
  className?: string;
};

export function SectionHeading({
  index,
  eyebrow,
  title,
  titleId,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <p className="mb-4 flex items-center gap-3 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-accent">
        <span aria-hidden="true">{index}</span>
        <span aria-hidden="true" className="h-px w-8 bg-accent/50" />
        <span>{eyebrow}</span>
      </p>
      <h2
        id={titleId}
        className="text-balance font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-xl text-base leading-7 text-muted">
          {description}
        </p>
      ) : null}
    </div>
  );
}
