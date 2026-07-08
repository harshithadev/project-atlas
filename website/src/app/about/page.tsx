import { PageShell, Section } from "@/components/layout/PageShell";
import { profile } from "@/content/profile";
import { experiences } from "@/content/experiences";
import Link from "next/link";

export default function AboutPage() {
  return (
    <PageShell
      title="About Harshitha"
      subtitle={profile.coreBrandSentence}
    >
      <Section title="Who I am">
        {profile.longBio.split("\n\n").map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </Section>

      <Section title="What I believe">
        <ul className="list-disc space-y-2 pl-5">
          {profile.values.map((v) => (
            <li key={v}>{v}</li>
          ))}
        </ul>
      </Section>

      <Section title="What shapes how I think">
        <p>{profile.interests.join(" · ")}</p>
      </Section>

      <Section title="Where I am headed">
        <p>
          Moving toward roles in {profile.targetRoles.join(", ")} — anywhere
          ambiguous problems need someone who can bridge technology, business,
          and people.
        </p>
      </Section>

      <Section title="Experience">
        <div className="space-y-6">
          {experiences.map((exp) => (
            <div key={exp.id} className="border-l-2 border-[var(--accent-primary)] pl-4">
              <h3 className="font-medium text-[var(--text-primary)]">
                {exp.role} — {exp.organization}
              </h3>
              <p className="text-xs text-[var(--text-muted)]">
                {exp.startDate}
                {exp.endDate ? ` – ${exp.endDate}` : " – Present"}
              </p>
              <p className="mt-2">{exp.summary}</p>
            </div>
          ))}
        </div>
      </Section>

      <div className="mt-12 rounded-2xl bg-[var(--surface-soft)] p-6">
        <p className="text-sm text-[var(--text-secondary)]">
          {profile.positioningStatement}
        </p>
        <Link
          href="/contact"
          className="mt-4 inline-block text-sm font-medium text-[var(--text-primary)] underline"
        >
          Get in touch →
        </Link>
      </div>
    </PageShell>
  );
}
