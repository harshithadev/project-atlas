"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useAsk } from "@/components/providers/AskProvider";

const SUGGESTED_PROMPTS = [
  "Where should I start?",
  "How does Harshitha think?",
  "What should a recruiter know?",
  "Which project best shows strategy?",
  "What makes this portfolio different?",
];

type Message = {
  role: "user" | "assistant";
  content: string;
  sources?: { title: string; url: string }[];
};

export function AskPanel() {
  const { isOpen, close } = useAsk();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  const submit = async (question: string) => {
    if (!question.trim() || loading) return;
    const q = question.trim();
    setInput("");
    setMessages((m) => [...m, { role: "user", content: q }]);
    setLoading(true);

    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: q }),
      });
      const data = await res.json();
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content: data.answer,
          sources: data.sources,
        },
      ]);
    } catch {
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content:
            "I could not reach the knowledge base right now. You can still explore Projects or contact Harshitha directly.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/30 backdrop-blur-sm"
            onClick={close}
            aria-hidden
          />
          <motion.aside
            role="dialog"
            aria-labelledby="ask-panel-title"
            aria-modal="true"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            className="fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col border-l border-[var(--border-soft)] bg-[var(--surface)] shadow-2xl"
          >
            <header className="flex items-center justify-between border-b border-[var(--border-soft)] px-5 py-4">
              <div>
                <h2 id="ask-panel-title" className="font-display text-lg">
                  Ask Harshitha
                </h2>
                <p className="text-xs text-[var(--text-muted)]">
                  Grounded in public portfolio content
                </p>
              </div>
              <button
                type="button"
                onClick={close}
                aria-label="Close"
                className="rounded-full p-2 text-[var(--text-muted)] hover:bg-[var(--surface-soft)]"
              >
                ✕
              </button>
            </header>

            <div ref={scrollRef} className="flex-1 overflow-y-auto px-5 py-4">
              {messages.length === 0 && (
                <div className="space-y-4">
                  <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                    Hi, I&apos;m Ask Harshitha. I&apos;m a guide trained on
                    Harshitha&apos;s public work, projects, notes, and thinking
                    system. Ask me where to start, what she has built, or how
                    she approaches messy problems.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {SUGGESTED_PROMPTS.map((prompt) => (
                      <button
                        key={prompt}
                        type="button"
                        onClick={() => submit(prompt)}
                        className="rounded-full border border-[var(--border-soft)] bg-[var(--surface-soft)] px-3 py-1.5 text-xs text-[var(--text-secondary)] transition hover:border-[var(--accent-primary)] hover:text-[var(--text-primary)]"
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="space-y-4">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "ml-8 bg-[var(--accent-primary)]/20 text-[var(--text-primary)]"
                        : "mr-4 bg-[var(--surface-soft)] text-[var(--text-secondary)]"
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{msg.content}</p>
                    {msg.sources && msg.sources.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2 border-t border-[var(--border-soft)] pt-2">
                        {msg.sources.map((s) => (
                          <Link
                            key={s.url}
                            href={s.url}
                            onClick={close}
                            className="text-xs text-[var(--accent-secondary)] underline"
                          >
                            {s.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                {loading && (
                  <p className="text-sm text-[var(--text-muted)]" aria-live="polite">
                    Looking through Harshitha&apos;s notes...
                  </p>
                )}
              </div>
            </div>

            <form
              className="border-t border-[var(--border-soft)] p-4"
              onSubmit={(e) => {
                e.preventDefault();
                submit(input);
              }}
            >
              <label htmlFor="ask-input" className="sr-only">
                Ask a question
              </label>
              <div className="flex gap-2">
                <input
                  id="ask-input"
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about her work, thinking, or fit..."
                  className="flex-1 rounded-full border border-[var(--border-soft)] bg-[var(--background)] px-4 py-2.5 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-glow)]"
                  disabled={loading}
                />
                <button
                  type="submit"
                  disabled={loading || !input.trim()}
                  className="rounded-full bg-[var(--accent-primary)] px-4 py-2.5 text-sm font-medium text-[var(--text-primary)] transition hover:opacity-90 disabled:opacity-50"
                >
                  Send
                </button>
              </div>
              <p className="mt-2 text-[10px] text-[var(--text-muted)]">
                Answers use approved public content only. I admit uncertainty when evidence is incomplete.
              </p>
            </form>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
