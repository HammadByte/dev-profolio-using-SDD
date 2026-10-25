import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type TagProps = ComponentPropsWithoutRef<"span">;

export function Tag({ className, children, ...props }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-line bg-surface px-3 py-1 font-mono text-[11px] tracking-tight text-muted",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
