import { PageShell } from "@/components/layout/PageShell";
import { principles } from "@/content/principles";

export default function PrinciplesPage() {
  return (
    <PageShell
      title="How I Think"
      subtitle="Operating principles — not generic values. Each one is something I actually use when the problem is messy."
    >
      <div className="space-y-8">
        {principles.map((p) => (
          <article
            key={p.id}
            id={p.slug}
            className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-6"
          >
            <h2
              className="text-xl text-[var(--text-primary)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {p.statement}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
              {p.explanation}
            </p>
            <div className="mt-4 rounded-xl bg-[var(--surface-soft)] p-4">
              <p className="text-xs uppercase tracking-wide text-[var(--text-muted)]">
                In practice
              </p>
              <p className="mt-2 text-sm italic text-[var(--text-secondary)]">
                {p.example}
              </p>
            </div>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
