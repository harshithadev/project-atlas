import Link from "next/link";
import { BottomDock } from "@/components/workspace/BottomDock";
import { WorkspaceScene } from "@/components/workspace/WorkspaceScene";
import { workspaceHotspots } from "@/content/workspace";

export default function HomePage() {
  return (
    <div className="fixed inset-0 h-[100dvh] w-full overflow-hidden">
      <main className="relative h-full w-full">
        <WorkspaceScene hotspots={workspaceHotspots} />

        {/* Hero copy overlay */}
        <div className="pointer-events-none absolute left-0 top-0 z-30 flex h-full w-full flex-col justify-between p-5 pb-28 pt-16 md:p-10 md:pb-28 md:pt-20 lg:max-w-xl">
          <div className="pointer-events-auto space-y-4">
            <h1
              className="text-4xl font-semibold leading-[1.05] tracking-tight text-[var(--text-primary)] md:text-5xl lg:text-6xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Thinking alongside Harshitha.
            </h1>
            <p className="max-w-md text-sm leading-relaxed text-[var(--text-secondary)] md:text-base">
              I explore the intersection of strategy, design, technology, and
              human experience to build meaningful digital products.
            </p>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text-primary)] underline decoration-[var(--accent-secondary)] underline-offset-4 transition hover:decoration-[var(--accent-glow)]"
            >
              Explore My World →
            </Link>
          </div>

          <blockquote className="pointer-events-auto hidden max-w-sm border-l-2 border-[var(--accent-primary)] pl-4 md:block">
            <p className="text-sm italic leading-relaxed text-[var(--text-secondary)]">
              &ldquo;The goal is not to automate everything, but to amplify what
              is uniquely human.&rdquo;
            </p>
            <footer className="mt-2 text-xs text-[var(--text-muted)]">
              — Harshitha Devineni
            </footer>
          </blockquote>
        </div>

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
