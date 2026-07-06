import { notFound } from "next/navigation";
import { PageShell, Section } from "@/components/layout/PageShell";
import { getWeeklyNote, weeklyNotes } from "@/content/weekly-notes";

export function generateStaticParams() {
  return weeklyNotes.map((n) => ({ slug: n.slug }));
}

export default async function WeeklyNotePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const note = getWeeklyNote(slug);
  if (!note) notFound();

  return (
    <PageShell title={note.title} subtitle={note.date}>
      <Section title="Observation">
        <p>{note.observation}</p>
      </Section>
      <Section title="Insight">
        <p>{note.insight}</p>
      </Section>
      <Section title="Question I'm leaving with">
        <p>{note.question}</p>
      </Section>
      <Section title="Full note">
        <p className="whitespace-pre-wrap">{note.body}</p>
      </Section>
    </PageShell>
  );
}
