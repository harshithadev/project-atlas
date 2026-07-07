import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import { WorkspaceExperience } from "@/components/workspace/WorkspaceExperience";
import { workspaceHotspots } from "@/content/workspace";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
});

export default function HomePage() {
  return (
    <div className="fixed inset-0 h-[100dvh] w-full overflow-hidden">
      <main className="relative h-full w-full">
        <WorkspaceExperience hotspots={workspaceHotspots} />

        {/* Hero copy overlay */}
        {/* Outer + inner stay pointer-transparent so hotspot dots sitting
            under the hero copy (e.g. the lamp/day-night dot) remain clickable;
            only the link below re-enables pointer events. */}
        <div className="pointer-events-none absolute left-0 top-0 z-30 w-full p-5 pt-14 md:p-10 md:pt-16 lg:max-w-xl [@media(max-height:520px)]:pt-6">
          <div className="space-y-5 [@media(max-height:520px)]:space-y-3">
            <h1
              className={`${playfair.className} text-4xl font-normal leading-[1.08] tracking-[-0.02em] text-[var(--text-primary)] sm:text-5xl md:text-6xl lg:text-[4.5rem] [@media(max-height:520px)]:text-3xl`}
            >
              Thinking
              <br />
              alongside
              <br />
              Harshitha
              <span className="text-[var(--accent-dot)]">.</span>
            </h1>
            <p className="max-w-xs text-sm leading-relaxed text-[var(--text-secondary)] md:text-base [@media(max-height:520px)]:hidden">
              I explore the intersection of strategy, design, technology, and
              human experience to build meaningful digital products.
            </p>
            <Link
              href="/projects"
              className="pointer-events-auto inline-flex items-center gap-2 text-sm font-medium text-[var(--text-primary)] underline decoration-[var(--accent-dot)] underline-offset-4 transition-all hover:gap-3"
            >
              Explore My World <span aria-hidden>→</span>
            </Link>
          </div>
        </div>

        {/* Quote anchored bottom-left — only when there is room for it */}
        <blockquote className="show-tall pointer-events-none absolute bottom-24 left-5 z-30 max-w-[17rem] md:bottom-24 md:left-10 lg:max-w-xs">
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
      </main>
    </div>
  );
}
