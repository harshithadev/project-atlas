import { notFound } from "next/navigation";
import { PageShell, Section } from "@/components/layout/PageShell";
import { getLibraryEntry, libraryEntries } from "@/content/library";

export function generateStaticParams() {
  return libraryEntries.map((e) => ({ slug: e.slug }));
}

export default async function LibraryEntryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = getLibraryEntry(slug);
  if (!entry) notFound();

  return (
    <PageShell title={entry.title} subtitle={entry.author}>
      <Section title="Key idea">
        <p>{entry.keyIdea}</p>
      </Section>
      <Section title="Reflection">
        <p>{entry.reflection}</p>
      </Section>
      <Section title="How it changed my thinking">
        <p>{entry.changedThinking}</p>
      </Section>
    </PageShell>
  );
}
