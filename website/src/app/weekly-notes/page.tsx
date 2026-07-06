import { ContentCard, PageShell } from "@/components/layout/PageShell";
import { weeklyNotes } from "@/content/weekly-notes";

export default function WeeklyNotesPage() {
  return (
    <PageShell
      title="Weekly Notes"
      subtitle="Field notes and musings — short reflections on what I notice, learn, and question."
    >
      <div className="space-y-6">
        {weeklyNotes.map((note) => (
          <ContentCard
            key={note.id}
            href={`/weekly-notes/${note.slug}`}
            title={note.title}
            summary={note.summary}
            tags={[note.date, ...note.themes]}
          />
        ))}
      </div>
    </PageShell>
  );
}
