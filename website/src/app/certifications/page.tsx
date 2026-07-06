import Image from "next/image";
import { PageShell, Section } from "@/components/layout/PageShell";
import { certifications } from "@/content/certifications";

export default function CertificationsPage() {
  return (
    <PageShell
      title="Certifications & Awards"
      subtitle="Credentials displayed as framed proof points — each one tied to a capability, not a badge dump."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {certifications.map((cert) => (
          <article
            key={cert.id}
            id={cert.slug}
            className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] overflow-hidden"
          >
            <div className="relative h-40 bg-[var(--surface-soft)]">
              <Image
                src={cert.imageUrl || "/images/cert-placeholder.svg"}
                alt={`${cert.title} certificate`}
                fill
                className="object-contain p-6"
              />
            </div>
            <div className="p-6">
              <p className="text-xs uppercase tracking-wide text-[var(--text-muted)]">
                {cert.category} · {cert.issuer}
              </p>
              <h2
                className="mt-2 text-lg text-[var(--text-primary)]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {cert.title}
              </h2>
              <p className="mt-1 text-xs text-[var(--text-muted)]">
                {cert.issuedDate}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                {cert.whyItMatters}
              </p>
              {cert.credentialUrl && cert.credentialUrl !== "PLACEHOLDER" && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm underline"
                >
                  Verify credential →
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      <Section title="Note">
        <p>
          Some certificate images and verification links are placeholders —
          final assets will be added to <code>/assets</code> and linked here.
        </p>
      </Section>
    </PageShell>
  );
}
