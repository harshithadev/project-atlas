import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { profile } from "@/content/profile";

export default function ResumePage() {
  const resumePath = "/Harshitha-Devineni-Resume.pdf";

  return (
    <PageShell
      title="Résumé"
      subtitle="Conventional résumé access — for recruiters who need the quick version."
    >
      <div className="space-y-6">
        <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
          {profile.shortBio}
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href={resumePath}
            download
            className="rounded-full bg-[var(--accent-primary)] px-6 py-3 text-sm font-medium text-[var(--text-primary)] transition hover:opacity-90"
          >
            Download PDF
          </a>
          <Link
            href="/projects"
            className="rounded-full border border-[var(--border-soft)] px-6 py-3 text-sm text-[var(--text-secondary)] transition hover:border-[var(--accent-primary)]"
          >
            Explore Projects instead →
          </Link>
        </div>

      </div>
    </PageShell>
  );
}
