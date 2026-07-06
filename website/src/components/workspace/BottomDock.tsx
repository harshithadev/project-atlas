"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAsk } from "@/components/providers/AskProvider";

function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 shrink-0 opacity-80" aria-hidden>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9.5V21h14V9.5" />
    </svg>
  );
}

function PrinciplesIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 shrink-0 opacity-80" aria-hidden>
      <path d="M12 3 4 6v6c0 4.5 3.4 7.6 8 9 4.6-1.4 8-4.5 8-9V6l-8-3Z" />
    </svg>
  );
}

function ContactIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 shrink-0 opacity-80" aria-hidden>
      <path d="M22 2 11 13" />
      <path d="M22 2 15 22l-4-9-9-4 20-7Z" />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 shrink-0 text-[var(--accent-dot)]" aria-hidden>
      <path d="M12 2c.6 3.8 2.3 6.6 6.6 7.5v1C14.3 11.4 12.6 14.2 12 18c-.6-3.8-2.3-6.6-6.6-7.5v-1C9.7 8.6 11.4 5.8 12 2Z" />
      <path d="M19 14c.3 1.9 1.1 3.3 3 3.7v.6c-1.9.4-2.7 1.8-3 3.7-.3-1.9-1.1-3.3-3-3.7v-.6c1.9-.4 2.7-1.8 3-3.7Z" />
    </svg>
  );
}

const dockLinks = [
  { label: "Home", href: "/", icon: HomeIcon },
  { label: "Principles", href: "/principles", icon: PrinciplesIcon },
  { label: "Contact", href: "/contact", icon: ContactIcon },
];

export function BottomDock() {
  const { open } = useAsk();
  const pathname = usePathname();

  return (
    <nav
      aria-label="Site navigation"
      className="glass-dock fixed bottom-4 left-1/2 z-40 flex max-w-[calc(100vw-1.5rem)] -translate-x-1/2 flex-wrap items-center justify-center gap-1 rounded-3xl px-2 py-2 md:bottom-6 md:gap-1.5 md:rounded-full md:px-3 md:py-2.5"
    >
      {dockLinks.map((item) => {
        const Icon = item.icon;
        const active =
          item.href === "/"
            ? pathname === "/"
            : pathname.startsWith(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={`inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs transition md:px-4 md:py-2.5 md:text-sm ${
              active
                ? "bg-[var(--dock-active)] font-medium text-[var(--text-primary)] shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]"
                : "text-[var(--text-secondary)] hover:bg-[var(--dock-active)] hover:text-[var(--text-primary)]"
            }`}
          >
            <Icon />
            {item.label}
          </Link>
        );
      })}
      <button
        type="button"
        onClick={open}
        className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs text-[var(--text-secondary)] transition hover:bg-[var(--dock-active)] hover:text-[var(--text-primary)] md:px-4 md:py-2.5 md:text-sm"
      >
        <SparkleIcon />
        Ask AI
      </button>
    </nav>
  );
}
