import type { KnowledgeChunk } from "@/content/types";

const STOP_WORDS = new Set([
  "a", "an", "the", "is", "are", "was", "were", "be", "been", "being",
  "have", "has", "had", "do", "does", "did", "will", "would", "could",
  "should", "may", "might", "must", "shall", "can", "to", "of", "in",
  "for", "on", "with", "at", "by", "from", "as", "into", "through",
  "during", "before", "after", "above", "below", "between", "out", "off",
  "over", "under", "again", "further", "then", "once", "here", "there",
  "when", "where", "why", "how", "all", "each", "few", "more", "most",
  "other", "some", "such", "no", "nor", "not", "only", "own", "same",
  "so", "than", "too", "very", "just", "and", "but", "or", "if", "me",
  "my", "i", "you", "your", "she", "her", "he", "him", "his", "they",
  "them", "their", "what", "which", "who", "whom", "this", "that",
  "these", "those", "am", "about", "tell", "show", "give", "know",
]);

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 2 && !STOP_WORDS.has(w));
}

function scoreChunk(query: string, chunk: KnowledgeChunk): number {
  const queryTokens = tokenize(query);
  const chunkText = `${chunk.title} ${chunk.section} ${chunk.text} ${chunk.themes.join(" ")} ${chunk.capabilities.join(" ")}`.toLowerCase();
  let score = 0;

  for (const token of queryTokens) {
    if (chunkText.includes(token)) score += 2;
    if (chunk.title.toLowerCase().includes(token)) score += 4;
    if (chunk.capabilities.some((c) => c.toLowerCase().includes(token))) score += 3;
    if (chunk.themes.some((t) => t.toLowerCase().includes(token))) score += 2;
  }

  const q = query.toLowerCase();
  if (q.includes("recruit") || q.includes("hiring") || q.includes("interview")) {
    if (chunk.sourceType === "project" || chunk.sourceType === "experience") score += 3;
  }
  if (q.includes("think") || q.includes("approach") || q.includes("ambigu")) {
    if (chunk.sourceType === "principle") score += 4;
  }
  if (q.includes("start") || q.includes("where")) {
    if (chunk.id === "profile-bio" || chunk.sourceType === "principle") score += 2;
  }
  if (q.includes("ai") || q.includes("artificial")) {
    if (chunk.themes.includes("AI")) score += 3;
  }
  if (q.includes("strateg")) {
    if (chunk.capabilities.includes("Strategy") || chunk.capabilities.includes("Consulting")) score += 3;
  }
  if (q.includes("book") || q.includes("read")) {
    if (chunk.sourceType === "library-entry") score += 4;
  }

  return score;
}

export function retrieveChunks(
  query: string,
  chunks: KnowledgeChunk[],
  limit = 5
): KnowledgeChunk[] {
  return [...chunks]
    .map((chunk) => ({ chunk, score: scoreChunk(query, chunk) }))
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((r) => r.chunk);
}

export function buildRetrievalAnswer(
  query: string,
  chunks: KnowledgeChunk[]
): { answer: string; sources: { title: string; url: string }[] } {
  if (chunks.length === 0) {
    return {
      answer:
        "I don't have enough evidence in Harshitha's public portfolio to answer that confidently. You might explore Projects, About, or contact Harshitha directly.",
      sources: [],
    };
  }

  const sources = chunks.map((c) => ({ title: c.title, url: c.url }));
  const uniqueSources = sources.filter(
    (s, i, arr) => arr.findIndex((x) => x.url === s.url) === i
  );

  const q = query.toLowerCase();

  if (q.includes("where should i start") || q.includes("where to start")) {
    return {
      answer: `If you have a few minutes, start with About to understand who Harshitha is. If you have ten minutes, open Projects — each one begins with a question, not a solution. Principles shows how she thinks. Weekly Notes and Library add the personal layer.\n\nEvidence: ${chunks[0].text.slice(0, 200)}...`,
      sources: uniqueSources,
    };
  }

  if (q.includes("recruiter") || q.includes("hiring")) {
    return {
      answer: `For recruiters: Harshitha bridges technology, business, and people. Strongest signals are her startup co-founder/COO experience at Mechonyx (seed funding, 40% PMF improvement, 35% burn reduction), Intel GPU driver work (diagnostic framework adopted across two teams), and projects structured around questions and tradeoffs.\n\nKey evidence:\n${chunks.map((c) => `• ${c.title}: ${c.text.slice(0, 120)}...`).join("\n")}\n\nStart with Projects and Principles, then download the résumé from the Resume page.`,
      sources: uniqueSources,
    };
  }

  if (q.includes("how does") && q.includes("think")) {
    return {
      answer: `Harshitha's core differentiator is empathetic decomposition — she breaks messy problems into clearer pieces while staying close to human context. She asks "why" repeatedly, thinks in systems and stories, and designs for the person living inside the problem.\n\n${chunks.map((c) => `• ${c.title}: ${c.text.slice(0, 150)}`).join("\n\n")}`,
      sources: uniqueSources,
    };
  }

  const primary = chunks[0];
  const supporting = chunks.slice(1, 3);

  return {
    answer: `Based on Harshitha's portfolio: ${primary.text}\n\n${supporting.length > 0 ? `Related: ${supporting.map((c) => c.title).join(", ")}.` : ""}\n\nYou may want to explore ${uniqueSources[0]?.url || "/projects"}.`,
    sources: uniqueSources,
  };
}

const SYSTEM_PROMPT = `You are Ask Harshitha, an AI guide for Harshitha Devineni's portfolio website, Project Atlas.

You help visitors understand Harshitha's work, thinking, projects, experiences, principles, and role alignment.

You are NOT Harshitha. Use "Harshitha" or "she" when answering.

Answer ONLY using the provided portfolio context. If evidence is incomplete, say so clearly.

Be professional, curious, warm, concise, and grounded. Avoid hype and unsupported claims.

When useful, recommend specific pages to explore next.

Never invent experience, metrics, awards, certifications, or private details.`;

export async function generateAIResponse(
  query: string,
  context: string
): Promise<string | null> {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return null;

  try {
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          {
            role: "user",
            content: `Question: ${query}\n\nPortfolio context:\n${context}\n\nAnswer concisely (100-200 words). Include evidence and suggest a next page.`,
          },
        ],
        temperature: 0.4,
        max_tokens: 400,
      }),
    });

    if (!res.ok) return null;
    const data = await res.json();
    return data.choices?.[0]?.message?.content ?? null;
  } catch {
    return null;
  }
}
