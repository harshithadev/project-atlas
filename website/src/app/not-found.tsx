import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";

export default function NotFound() {
  return (
    <PageShell
      title="This door does not seem to open."
      subtitle="Try returning to the desk or asking the orb where to go next."
    >
      <div className="flex flex-wrap gap-4">
        <Link
          href="/"
          className="rounded-full bg-[var(--accent-primary)] px-5 py-2.5 text-sm font-medium"
        >
          Return home
        </Link>
        <Link
          href="/projects"
          className="rounded-full border border-[var(--border-soft)] px-5 py-2.5 text-sm"
        >
          View projects
        </Link>
      </div>
    </PageShell>
  );
}
