import type { KnowledgeChunk } from "./types";
import { profile } from "./profile";
import { projects } from "./projects";
import { principles } from "./principles";
import { libraryEntries } from "./library";
import { weeklyNotes } from "./weekly-notes";
import { certifications } from "./certifications";
import { experiences } from "./experiences";
import { dossiers } from "./dossiers";

function chunk(
  partial: Omit<KnowledgeChunk, "themes" | "capabilities"> & {
    themes?: string[];
    capabilities?: string[];
  }
): KnowledgeChunk {
  return {
    themes: partial.themes ?? [],
    capabilities: partial.capabilities ?? [],
    ...partial,
  };
}

export function buildKnowledgeBase(): KnowledgeChunk[] {
  const chunks: KnowledgeChunk[] = [];

  chunks.push(
    chunk({
      id: "profile-bio",
      sourceId: "profile",
      sourceType: "profile",
      title: "About Harshitha",
      section: "Bio",
      text: `${profile.shortBio} ${profile.longBio}`,
      url: "/about",
      themes: ["Identity"],
      capabilities: ["Communication"],
    }),
    chunk({
      id: "profile-positioning",
      sourceId: "profile",
      sourceType: "profile",
      title: "Positioning",
      section: "Brand",
      text: `${profile.coreBrandSentence} ${profile.positioningStatement}. Strengths: ${profile.strengths.join(", ")}. Target roles: ${profile.targetRoles.join(", ")}.`,
      url: "/about",
      themes: ["Strategy"],
      capabilities: ["Strategy", "Consulting"],
    })
  );

  for (const p of projects) {
    chunks.push(
      chunk({
        id: `${p.id}-overview`,
        sourceId: p.id,
        sourceType: "project",
        title: p.title,
        section: "Overview",
        text: `Question: ${p.question} ${p.summary} Context: ${p.context} Problem: ${p.problem}`,
        url: `/projects/${p.slug}`,
        themes: p.themes,
        capabilities: p.capabilities,
      }),
      chunk({
        id: `${p.id}-outcome`,
        sourceId: p.id,
        sourceType: "project",
        title: p.title,
        section: "Outcome",
        text: `Approach: ${p.approach} Outcome: ${p.outcome} Lessons: ${p.lessons.join(" ")}`,
        url: `/projects/${p.slug}`,
        themes: p.themes,
        capabilities: p.capabilities,
      })
    );
  }

  for (const pr of principles) {
    chunks.push(
      chunk({
        id: pr.id,
        sourceId: pr.id,
        sourceType: "principle",
        title: pr.title,
        section: "Principle",
        text: `${pr.statement} ${pr.explanation} Example: ${pr.example}`,
        url: `/principles#${pr.slug}`,
        themes: pr.themes,
        capabilities: pr.capabilities,
      })
    );
  }

  for (const b of libraryEntries) {
    chunks.push(
      chunk({
        id: b.id,
        sourceId: b.id,
        sourceType: "library-entry",
        title: b.title,
        section: "Reflection",
        text: `${b.keyIdea} ${b.reflection} ${b.changedThinking}`,
        url: `/library/${b.slug}`,
        themes: b.themes,
        capabilities: b.capabilities,
      })
    );
  }

  for (const n of weeklyNotes) {
    chunks.push(
      chunk({
        id: n.id,
        sourceId: n.id,
        sourceType: "weekly-note",
        title: n.title,
        section: "Note",
        text: `${n.observation} ${n.insight} ${n.body}`,
        url: `/weekly-notes/${n.slug}`,
        themes: n.themes,
        capabilities: n.capabilities,
      })
    );
  }

  for (const c of certifications) {
    chunks.push(
      chunk({
        id: c.id,
        sourceId: c.id,
        sourceType: "certification",
        title: c.title,
        section: "Credential",
        text: `${c.title} from ${c.issuer}. ${c.whyItMatters}`,
        url: `/certifications#${c.slug}`,
        themes: c.themes,
        capabilities: c.capabilities,
      })
    );
  }

  for (const e of experiences) {
    chunks.push(
      chunk({
        id: e.id,
        sourceId: e.id,
        sourceType: "experience",
        title: e.title,
        section: "Experience",
        text: `${e.role} at ${e.organization}. ${e.context} Outcomes: ${e.outcomes.join(" ")} Lessons: ${e.lessons.join(" ")}`,
        url: "/about",
        themes: e.themes,
        capabilities: e.capabilities,
      })
    );
  }

  for (const d of dossiers) {
    chunks.push(
      chunk({
        id: d.id,
        sourceId: d.id,
        sourceType: "dossier",
        title: d.title,
        section: "Dossier",
        text: `${d.problemFraming} Lessons: ${d.lessons.join(" ")}`,
        url: `/dossiers/${d.slug}`,
        themes: d.themes,
        capabilities: d.capabilities,
      })
    );
  }

  return chunks;
}

export const knowledgeBase = buildKnowledgeBase();
