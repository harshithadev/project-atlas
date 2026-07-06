import Link from "next/link";

export function PageShell({
  children,
  title,
  subtitle,
}: {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="page-scroll min-h-[100dvh] bg-[var(--background)]">
      <main className="mx-auto max-w-3xl px-5 pb-36 pt-16 md:px-8 md:pt-20">
        <Link
          href="/"
          className="mb-8 inline-block text-sm text-[var(--text-muted)] transition hover:text-[var(--text-primary)]"
        >
          ← Back to the desk
        </Link>
        <header className="mb-12">
          <h1
            className="text-3xl md:text-4xl text-[var(--text-primary)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-lg leading-relaxed text-[var(--text-secondary)]">
              {subtitle}
            </p>
          )}
        </header>
        {children}
      </main>
    </div>
  );
}

export function ContentCard({
  href,
  title,
  summary,
  tags,
}: {
  href: string;
  title: string;
  summary: string;
  tags?: string[];
}) {
  return (
    <Link
      href={href}
      className="block rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-6 transition hover:border-[var(--accent-primary)] hover:shadow-[0_8px_24px_var(--shadow-soft)]"
    >
      <h2
        className="text-xl text-[var(--text-primary)]"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {title}
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
        {summary}
      </p>
      {tags && tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[var(--surface-soft)] px-2.5 py-0.5 text-[11px] text-[var(--text-muted)]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </Link>
  );
}

export function TagList({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="rounded-full border border-[var(--border-soft)] px-3 py-1 text-xs text-[var(--text-secondary)]"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

export function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-10">
      <h2
        className="mb-4 text-xl text-[var(--text-primary)]"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {title}
      </h2>
      <div className="space-y-3 text-sm leading-relaxed text-[var(--text-secondary)]">
        {children}
      </div>
    </section>
  );
}
