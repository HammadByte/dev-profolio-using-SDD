import { TriangleAlert } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function PlaceholderNotice() {
  return (
    <div className="border-b border-amber-300/70 bg-amber-50 text-amber-950 dark:border-amber-400/25 dark:bg-amber-400/10 dark:text-amber-100">
      <Container>
        <p className="flex flex-wrap items-center gap-x-2 gap-y-1 py-2.5 text-xs leading-5">
          <TriangleAlert
            aria-hidden="true"
            className="size-3.5 shrink-0 text-amber-600 dark:text-amber-300"
          />
          <strong className="font-semibold">Demo content.</strong>
          <span>
            Replace placeholders in{" "}
            <code className="rounded bg-amber-100 px-1 py-0.5 font-mono text-[0.9em] dark:bg-amber-400/15">
              src/data/portfolio.ts
            </code>{" "}
            and set{" "}
            <code className="rounded bg-amber-100 px-1 py-0.5 font-mono text-[0.9em] dark:bg-amber-400/15">
              showPlaceholderNotice
            </code>{" "}
            to false before publishing.
          </span>
        </p>
      </Container>
    </div>
  );
}
