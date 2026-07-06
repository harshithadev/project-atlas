import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import { BottomDock } from "@/components/workspace/BottomDock";
import { WorkspaceScene } from "@/components/workspace/WorkspaceScene";
import { workspaceHotspots } from "@/content/workspace";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
});

export default function HomePage() {
  return (
    <div className="fixed inset-0 h-[100dvh] w-full overflow-hidden">
      <main className="relative h-full w-full">
        <WorkspaceScene hotspots={workspaceHotspots} />

        {/* Hero copy overlay */}
        <div className="pointer-events-none absolute left-0 top-0 z-30 w-full p-5 pt-16 md:p-10 md:pt-20 lg:max-w-xl">
          <div className="pointer-events-auto space-y-5">
            <h1
              className={`${playfair.className} text-5xl font-normal leading-[1.08] tracking-[-0.02em] text-[var(--text-primary)] md:text-6xl lg:text-[4.5rem]`}
            >
              Thinking
              <br />
              alongside
              <br />
              Harshitha
              <span className="text-[var(--accent-dot)]">.</span>
            </h1>
            <p className="max-w-xs text-sm leading-relaxed text-[var(--text-secondary)] md:text-base">
              I explore the intersection of strategy, design, technology, and
              human experience to build meaningful digital products.
            </p>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text-primary)] transition-all hover:gap-3"
            >
              Explore My World <span aria-hidden>→</span>
            </Link>
          </div>
        </div>

        {/* Quote anchored bottom-left like the inspo */}
        <blockquote className="pointer-events-auto absolute bottom-24 left-5 z-30 hidden max-w-[17rem] md:bottom-20 md:left-10 md:block lg:max-w-xs">
          <span
            aria-hidden
            className={`${playfair.className} block -mb-1 text-[5.5rem] leading-none text-[var(--accent-dot)]`}
          >
            &ldquo;
          </span>
          <p className="text-sm italic leading-relaxed text-[var(--text-secondary)] md:text-[15px]">
            The goal is not to automate everything, but to amplify what is
            uniquely human.&rdquo;
          </p>
          <footer className="mt-2 text-xs tracking-wide text-[var(--text-muted)]">
            — Harshitha Devineni
          </footer>
        </blockquote>

        {/* Mobile access to hotspot destinations (hotspots are desktop-only) */}
        <nav
          aria-label="Explore the workspace"
          className="absolute bottom-20 left-0 right-0 z-30 flex flex-wrap justify-center gap-2 px-4 md:hidden"
        >
          {workspaceHotspots
            .filter((h) => h.href)
            .map((h) => (
              <Link
                key={h.id}
                href={h.href!}
                className="glass-panel rounded-full px-3 py-1.5 text-xs text-[var(--text-primary)]"
              >
                {h.label}
              </Link>
            ))}
        </nav>
      </main>

      <BottomDock />
    </div>
  );
}
