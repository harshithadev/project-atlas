import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell, Section, TagList } from "@/components/layout/PageShell";
import { getProject, projects } from "@/content/projects";
import { getDossierByProjectId } from "@/content/dossiers";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const dossier = project.dossierId
    ? getDossierByProjectId(project.id)
    : undefined;

  return (
    <PageShell title={project.title} subtitle={project.question}>
      <TagList items={project.capabilities} />

      <div className="mt-8 space-y-8">
        <Section title="Context">
          <p>{project.context}</p>
        </Section>

        <Section title="The problem">
          <p>{project.problem}</p>
        </Section>

        <Section title="Why it mattered">
          <p>{project.whyItMattered}</p>
        </Section>

        <Section title="Who it affected">
          <ul className="list-disc pl-5">
            {project.stakeholders.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </Section>

        <Section title="Approach">
          <p>{project.approach}</p>
        </Section>

        <Section title="Tradeoffs">
          <ul className="list-disc pl-5">
            {project.tradeoffs.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </Section>

        <Section title="Outcome">
          <p>{project.outcome}</p>
        </Section>

        {project.failures && project.failures.length > 0 && (
          <Section title="What failed or changed">
            <ul className="list-disc pl-5">
              {project.failures.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </Section>
        )}

        <Section title="Lessons">
          <ul className="list-disc pl-5">
            {project.lessons.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        </Section>

        <Section title="So what?">
          <p>
            This investigation demonstrates {project.capabilities.join(", ").toLowerCase()}{" "}
            — evidence that Harshitha frames messy problems before jumping to solutions.
          </p>
        </Section>

        {dossier && (
          <div className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-6">
            <h2
              className="text-lg text-[var(--text-primary)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Thinking Dossier
            </h2>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">
              See the workbench behind this story — process notes, decisions, and research.
            </p>
            <Link
              href={`/dossiers/${dossier.slug}`}
              className="mt-4 inline-block text-sm font-medium underline"
            >
              Open dossier →
            </Link>
          </div>
        )}
      </div>
    </PageShell>
  );
}
