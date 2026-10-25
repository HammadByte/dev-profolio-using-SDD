"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";

type CopyStatus = "idle" | "copied" | "error";

export function CopyEmailButton({ email }: { email: string }) {
  const [status, setStatus] = useState<CopyStatus>("idle");
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  async function handleCopy() {
    try {
      if (!navigator.clipboard) {
        throw new Error("Clipboard API unavailable");
      }

      await navigator.clipboard.writeText(email);
      setStatus("copied");
    } catch {
      setStatus("error");
    }

    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => setStatus("idle"), 3000);
  }

  return (
    <div>
      <button
        type="button"
        onClick={handleCopy}
        className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-background/25 bg-background/10 px-4 text-sm font-medium text-background transition-colors hover:border-background/50 hover:bg-background/20"
      >
        {status === "copied" ? (
          <Check aria-hidden="true" className="size-4" />
        ) : (
          <Copy aria-hidden="true" className="size-4" />
        )}
        {status === "copied" ? "Copied" : "Copy email"}
      </button>
      <p
        role="status"
        aria-live="polite"
        className="mt-2 min-h-4 px-1 text-xs text-background/65"
      >
        {status === "copied"
          ? "Email address copied to clipboard."
          : status === "error"
            ? "Could not copy. Select the address instead."
            : ""}
      </p>
    </div>
  );
}
