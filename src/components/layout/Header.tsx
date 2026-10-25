"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import type { NavItem } from "@/types/portfolio";
import { cn } from "@/lib/utils";

type HeaderProps = {
  name: string;
  initials: string;
  nav: NavItem[];
};

function ThemeToggle() {
  function toggleTheme() {
    const root = document.documentElement;
    const next = !root.classList.contains("dark");
    root.classList.toggle("dark", next);

    try {
      window.localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      // Storage can be unavailable in private or restricted contexts.
    }
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      title="Toggle color theme"
      className="inline-flex size-10 items-center justify-center rounded-full border border-line text-foreground transition-colors hover:border-accent/40 hover:bg-surface-2"
    >
      <Sun aria-hidden="true" className="hidden size-[18px] dark:block" />
      <Moon aria-hidden="true" className="size-[18px] dark:hidden" />
    </button>
  );
}

export function Header({ name, initials, nav }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState<string | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = nav
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActiveHref(`#${visible.target.id}`);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [nav]);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-line/80 bg-background/85 backdrop-blur-md transition-shadow",
        scrolled && "shadow-sm shadow-black/[0.04]",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:h-[4.5rem] sm:px-8">
        <a
          href="#home"
          onClick={() => setOpen(false)}
          className="group inline-flex items-center gap-3 rounded-full"
        >
          <span className="grid size-9 place-items-center rounded-xl bg-foreground font-mono text-xs font-semibold text-background transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
            {initials}
          </span>
          <span className="hidden text-sm font-semibold tracking-tight sm:block">
            {name}
          </span>
          <span className="sr-only">Back to top</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {nav.map((item) => {
            const active = activeHref === item.href;

            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={active ? "location" : undefined}
                className={cn(
                  "rounded-full px-3 py-2 text-sm transition-colors",
                  active
                    ? "bg-surface-2 text-foreground"
                    : "text-muted hover:bg-surface-2/70 hover:text-foreground",
                )}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            className="inline-flex size-10 items-center justify-center rounded-full border border-line text-foreground transition-colors hover:border-accent/40 hover:bg-surface-2 md:hidden"
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? (
              <X aria-hidden="true" className="size-5" />
            ) : (
              <Menu aria-hidden="true" className="size-5" />
            )}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-navigation"
          className="border-t border-line bg-background md:hidden"
        >
          <nav aria-label="Mobile" className="px-5 py-4">
            <ul className="divide-y divide-line/70">
              {nav.map((item, index) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={
                      activeHref === item.href ? "location" : undefined
                    }
                    className="flex items-center justify-between py-3.5 text-base font-medium text-foreground"
                  >
                    <span>{item.label}</span>
                    <span
                      aria-hidden="true"
                      className="font-mono text-xs text-muted"
                    >
                      0{index + 1}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
