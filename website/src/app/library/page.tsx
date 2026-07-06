import { ContentCard, PageShell } from "@/components/layout/PageShell";
import { libraryEntries } from "@/content/library";

export default function LibraryPage() {
  return (
    <PageShell
      title="Library"
      subtitle="Not a reading list — evidence of evolving thought. Books and resources that shaped how I see problems."
    >
      <div className="space-y-6">
        {libraryEntries.map((entry) => (
          <ContentCard
            key={entry.id}
            href={`/library/${entry.slug}`}
            title={entry.title}
            summary={`${entry.author} — ${entry.keyIdea}`}
            tags={entry.themes}
          />
        ))}
      </div>
    </PageShell>
  );
}
