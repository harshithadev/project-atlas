import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { profile } from "@/content/profile";

export default function ContactPage() {
  return (
    <PageShell
      title="Contact"
      subtitle="Have a messy idea, an interesting role, or a problem worth thinking through? I'd love to hear from you."
    >
      <div className="space-y-6">
        <div className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-6">
          <h2 className="text-sm font-medium text-[var(--text-muted)]">Email</h2>
          <a
            href={`mailto:${profile.contact.email}`}
            className="mt-1 block text-lg text-[var(--text-primary)] underline"
          >
            {profile.contact.email}
          </a>
        </div>

        <div className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-6">
          <h2 className="text-sm font-medium text-[var(--text-muted)]">LinkedIn</h2>
          <a
            href={profile.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 block text-lg text-[var(--text-primary)] underline"
          >
            LinkedIn Profile
            {profile.contact.linkedin.includes("PLACEHOLDER") && (
              <span className="ml-2 text-xs text-[var(--text-muted)]">(placeholder)</span>
            )}
          </a>
        </div>

        {profile.contact.github && (
          <div className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-6">
            <h2 className="text-sm font-medium text-[var(--text-muted)]">GitHub</h2>
            <a
              href={profile.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 block text-lg text-[var(--text-primary)] underline"
            >
              GitHub Profile
              {profile.contact.github.includes("PLACEHOLDER") && (
                <span className="ml-2 text-xs text-[var(--text-muted)]">(placeholder)</span>
              )}
            </a>
          </div>
        )}

        <div className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-6">
          <h2 className="text-sm font-medium text-[var(--text-muted)]">Résumé</h2>
          <Link href="/resume" className="mt-1 block text-lg text-[var(--text-primary)] underline">
            Download résumé →
          </Link>
        </div>

        <p className="text-sm text-[var(--text-muted)]">
          Open to consulting, strategy, AI product, client advisory, and operations
          roles where thoughtful problem-solving matters more than perfect instructions.
        </p>
      </div>
    </PageShell>
  );
}
