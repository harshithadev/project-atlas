import { NextResponse } from "next/server";
import { knowledgeBase } from "@/content/knowledge";
import {
  retrieveChunks,
  buildRetrievalAnswer,
  generateAIResponse,
} from "@/lib/rag";

export async function POST(request: Request) {
  try {
    const { question } = await request.json();

    if (!question || typeof question !== "string") {
      return NextResponse.json({ error: "Question required" }, { status: 400 });
    }

    const chunks = retrieveChunks(question, knowledgeBase, 5);
    const retrieval = buildRetrievalAnswer(question, chunks);

    const context = chunks.map((c) => `[${c.title} — ${c.section}]\n${c.text}`).join("\n\n");
    const aiAnswer = await generateAIResponse(question, context);

    return NextResponse.json({
      answer: aiAnswer ?? retrieval.answer,
      sources: retrieval.sources,
      mode: aiAnswer ? "ai" : "retrieval",
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to process question" },
      { status: 500 }
    );
  }
}
