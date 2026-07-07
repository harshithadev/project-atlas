"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAsk } from "@/components/providers/AskProvider";

function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px] shrink-0 opacity-80" aria-hidden>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9.5V21h14V9.5" />
    </svg>
  );
}

function PrinciplesIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px] shrink-0 opacity-80" aria-hidden>
      <path d="M12 3 4 6v6c0 4.5 3.4 7.6 8 9 4.6-1.4 8-4.5 8-9V6l-8-3Z" />
    </svg>
  );
}

function ContactIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px] shrink-0 opacity-80" aria-hidden>
      <path d="M22 2 11 13" />
      <path d="M22 2 15 22l-4-9-9-4 20-7Z" />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px] shrink-0 text-[var(--accent-dot)]" aria-hidden>
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

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

const activeClass =
  "bg-[var(--dock-active)] text-[var(--text-primary)] shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]";
const idleClass =
  "text-[var(--text-secondary)] hover:bg-[var(--dock-active)] hover:text-[var(--text-primary)]";

/** Horizontal pill dock shown on the homepage. */
function HomeDock() {
  const { open } = useAsk();
  const itemClass =
    "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full px-3 py-2 text-xs transition md:px-4 md:text-sm";
  return (
    <nav
      aria-label="Site navigation"
      // w-max prevents the fixed+translate shrink-to-fit bug that made the
      // dock wrap at tablet widths and stack vertically on phones.
      className="glass-dock fixed bottom-3 left-1/2 z-40 flex w-max max-w-[calc(100vw-0.75rem)] -translate-x-1/2 items-center justify-center gap-0.5 rounded-full px-2 py-1.5 md:bottom-6 md:gap-1.5 md:px-3 md:py-2"
    >
      {dockLinks.map((item) => {
        const Icon = item.icon;
        const active = isActive("/", item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            aria-label={item.label}
            className={`${itemClass} ${active ? `${activeClass} font-medium` : idleClass}`}
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
        className={`${itemClass} ${idleClass}`}
      >
        <SparkleIcon />
        <span className="hidden sm:inline">Ask AI</span>
      </button>
    </nav>
  );
}

/**
 * Vertical icon-only rail for inner pages — mac-dock style: icons magnify on
 * hover and the label slides out as a tooltip to the right. On phones it
 * falls back to a compact bottom bar for thumb reach.
 */
function PageDock({ pathname }: { pathname: string }) {
  const { open } = useAsk();

  const items = [
    ...dockLinks.map((item) => ({ ...item, onClick: undefined as (() => void) | undefined })),
    { label: "Ask AI", href: undefined, icon: SparkleIcon, onClick: open },
  ];

  const renderItem = (
    item: (typeof items)[number],
    orientation: "vertical" | "horizontal"
  ) => {
    const Icon = item.icon;
    const active = item.href ? isActive(pathname, item.href) : false;
    const base = `group relative flex h-11 w-11 items-center justify-center rounded-full transition-all duration-150 hover:scale-110 ${
      active ? activeClass : idleClass
    }`;
    const tooltip =
      orientation === "vertical" ? (
        <span
          role="tooltip"
          className="pointer-events-none absolute left-full ml-3 whitespace-nowrap rounded-full glass-panel px-2.5 py-1 text-xs text-[var(--hotspot-text)] opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100"
        >
          {item.label}
        </span>
      ) : null;

    return item.href ? (
      <Link
        key={item.label}
        href={item.href}
        aria-current={active ? "page" : undefined}
        aria-label={item.label}
        className={base}
      >
        <Icon />
        {tooltip}
      </Link>
    ) : (
      <button
        key={item.label}
        type="button"
        onClick={item.onClick}
        aria-label={item.label}
        className={base}
      >
        <Icon />
        {tooltip}
      </button>
    );
  };

  return (
    <>
      <nav
        aria-label="Site navigation"
        className="glass-dock fixed left-3 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-1 rounded-full px-1.5 py-2 md:flex"
      >
        {items.map((item) => renderItem(item, "vertical"))}
      </nav>
      <nav
        aria-label="Site navigation"
        className="glass-dock fixed bottom-3 left-1/2 z-40 flex w-max -translate-x-1/2 items-center gap-1 rounded-full px-2 py-1.5 md:hidden"
      >
        {items.map((item) => renderItem(item, "horizontal"))}
      </nav>
    </>
  );
}

export function BottomDock() {
  const pathname = usePathname();
  return pathname === "/" ? <HomeDock /> : <PageDock pathname={pathname} />;
}
