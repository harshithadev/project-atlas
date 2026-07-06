"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAsk } from "@/components/providers/AskProvider";

const dockLinks = [
  { label: "Home", href: "/" },
  { label: "Principles", href: "/principles" },
  { label: "Contact", href: "/contact" },
];

export function BottomDock() {
  const { open } = useAsk();
  const pathname = usePathname();

  return (
    <nav
      aria-label="Site navigation"
      className="glass-panel fixed bottom-4 left-1/2 z-40 flex max-w-[calc(100vw-1.5rem)] -translate-x-1/2 flex-wrap items-center justify-center gap-0.5 rounded-3xl px-2 py-1.5 shadow-[0_8px_32px_var(--shadow-medium)] md:bottom-6 md:gap-1 md:rounded-full md:px-3 md:py-2"
    >
      {dockLinks.map((item) => {
        const active =
          item.href === "/"
            ? pathname === "/"
            : pathname.startsWith(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={`rounded-full px-2.5 py-1.5 text-xs transition md:px-3.5 md:py-2 md:text-sm ${
              active
                ? "bg-[var(--accent-primary)]/30 font-medium text-[var(--text-primary)]"
                : "text-[var(--text-secondary)] hover:bg-[var(--surface-soft)] hover:text-[var(--text-primary)]"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
      <button
        type="button"
        onClick={open}
        className="rounded-full px-2.5 py-1.5 text-xs text-[var(--text-secondary)] transition hover:bg-[var(--surface-soft)] hover:text-[var(--text-primary)] md:px-3.5 md:py-2 md:text-sm"
      >
        Ask AI <span className="text-[var(--accent-glow)]">✨</span>
      </button>
    </nav>
  );
}
