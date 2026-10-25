import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

export const metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <main className="grid flex-1 place-items-center py-24">
      <Container className="max-w-xl text-center">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
          404 — Not found
        </p>
        <h1 className="mt-4 text-balance font-display text-5xl tracking-tight sm:text-6xl">
          This page doesn&apos;t exist.
        </h1>
        <p className="mt-4 text-muted">
          The address may be mistyped, or the page may have moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-accent px-5 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
          Back to portfolio
        </Link>
      </Container>
    </main>
  );
}
