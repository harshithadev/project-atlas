import { notFound } from "next/navigation";
import { PageShell, Section } from "@/components/layout/PageShell";
import { getDossier, dossiers } from "@/content/dossiers";

export function generateStaticParams() {
  return dossiers.map((d) => ({ slug: d.slug }));
}

export default async function DossierPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const dossier = getDossier(slug);
  if (!dossier) notFound();

  return (
    <PageShell title={dossier.title} subtitle={dossier.originalQuestion}>
      <p className="mb-8 rounded-xl bg-[var(--surface-soft)] px-4 py-3 text-xs text-[var(--text-muted)]">
        Mock dossier content — process notes for demonstration. Final artifacts and PDFs coming later.
      </p>

      <Section title="Problem framing">
        <p>{dossier.problemFraming}</p>
      </Section>

      <Section title="Assumptions">
        <ul className="list-disc pl-5">
          {dossier.assumptions.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
      </Section>

      <Section title="Research notes">
        {dossier.researchNotes.map((note) => (
          <div key={note.title} className="mb-4 rounded-xl border border-[var(--border-soft)] p-4">
            <h3 className="font-medium text-[var(--text-primary)]">{note.title}</h3>
            <p className="mt-2">{note.note}</p>
            <p className="mt-2 text-[var(--accent-secondary)]">→ {note.implication}</p>
          </div>
        ))}
      </Section>

      <Section title="Decision log">
        {dossier.decisionLog.map((d) => (
          <div key={d.option} className="mb-3 flex gap-3 text-sm">
            <span className="font-medium text-[var(--text-primary)]">{d.decision}:</span>
            <span>
              {d.option} — {d.reason}
            </span>
          </div>
        ))}
      </Section>

      <Section title="Lessons">
        <ul className="list-disc pl-5">
          {dossier.lessons.map((l) => (
            <li key={l}>{l}</li>
          ))}
        </ul>
      </Section>
    </PageShell>
  );
}
