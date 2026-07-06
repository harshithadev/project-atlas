import { ContentCard, PageShell } from "@/components/layout/PageShell";
import { projects } from "@/content/projects";

export default function ProjectsPage() {
  return (
    <PageShell
      title="Projects"
      subtitle="Each project begins with a question — not a solution. These are investigations into problems worth solving."
    >
      <div className="space-y-6">
        {projects.map((project) => (
          <ContentCard
            key={project.id}
            href={`/projects/${project.slug}`}
            title={project.question}
            summary={project.summary}
            tags={[...project.capabilities, project.status === "draft" ? "In Progress" : ""]}
          />
        ))}
      </div>
    </PageShell>
  );
}
