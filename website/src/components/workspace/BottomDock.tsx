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

function ProjectsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 shrink-0 opacity-80" aria-hidden>
      <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" />
    </svg>
  );
}

function AboutIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 shrink-0 opacity-80" aria-hidden>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M4.5 20c1.4-3.2 4.2-5 7.5-5s6.1 1.8 7.5 5" />
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
  { label: "Projects", href: "/projects", icon: ProjectsIcon },
  { label: "About", href: "/about", icon: AboutIcon },
  { label: "Principles", href: "/principles", icon: PrinciplesIcon },
  { label: "Contact", href: "/contact", icon: ContactIcon },
];

const itemClass =
  "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full px-3 py-2 text-xs transition md:px-4 md:text-sm";

export function BottomDock() {
  const { open } = useAsk();
  const pathname = usePathname();

  return (
    <nav
      aria-label="Site navigation"
      // w-max prevents the fixed+translate shrink-to-fit bug that made the
      // dock wrap at tablet widths and stack vertically on phones.
      className="glass-dock fixed bottom-3 left-1/2 z-40 flex w-max max-w-[calc(100vw-0.75rem)] -translate-x-1/2 items-center justify-center gap-0.5 rounded-full px-2 py-1.5 md:bottom-6 md:gap-1.5 md:px-3 md:py-2"
    >
      {dockLinks.map((item) => {
        const Icon = item.icon;
        const active =
          item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            aria-label={item.label}
            className={`${itemClass} ${
              active
                ? "bg-[var(--dock-active)] font-medium text-[var(--text-primary)] shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]"
                : "text-[var(--text-secondary)] hover:bg-[var(--dock-active)] hover:text-[var(--text-primary)]"
            }`}
          >
            <Icon />
            <span className="hidden sm:inline">{item.label}</span>
          </Link>
        );
      })}
      <button
        type="button"
        onClick={open}
        aria-label="Ask AI"
        className={`${itemClass} text-[var(--text-secondary)] hover:bg-[var(--dock-active)] hover:text-[var(--text-primary)]`}
      >
        <SparkleIcon />
        <span className="hidden sm:inline">Ask AI</span>
      </button>
    </nav>
  );
}
