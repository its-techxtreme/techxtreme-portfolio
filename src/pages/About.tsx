import { ButtonLink } from "../components/ui/Button";
import { Reveal } from "../components/ui/Reveal";
import { SectionLabel } from "../components/ui/SectionLabel";

const skills = [
  "WordPress", "PHP 8", "Python", "MySQL", "n8n", "Firebase",
  "React", "Tailwind", "Framer Motion", "AI APIs", "SEO", "Linux VPS", "Cursor",
];

const timeline = [
  { year: "2024–26", title: "London Museums Directory", desc: "Built, launched, grew to 350+ monthly organic visits." },
  { year: "2025–26", title: "Project Logic Arbitrage", desc: "Private AI research platform for prediction markets client." },
  { year: "2024", title: "Virtalent & service sites", desc: "Lead-gen websites for UK-based service businesses." },
  { year: "Ongoing", title: "Project Aura", desc: "R&D — local-first voice AI assistant (Phase 2)." },
];

export function About() {
  return (
    <main className="relative z-10 mx-auto max-w-site px-6 pb-24 pt-32 md:px-12">
      <Reveal>
        <SectionLabel>About</SectionLabel>
        <h1 className="font-display text-[clamp(2.25rem,6vw,4.5rem)] font-bold leading-tight tracking-tight">
          Remote studio.
          <br />
          <span className="text-gradient">Global delivery.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted">
          I'm not a UK agency — I'm a self-taught builder working remotely for clients anywhere. Your timezone,
          your stack, your deadline. Production code — not slide decks.
        </p>
      </Reveal>

      <Reveal className="mt-16 grid gap-10 lg:grid-cols-2 lg:items-center">
        <img
          src="/assets/workspace.jpg"
          alt="Workspace"
          className="rounded-card border border-line"
        />
        <div>
          <h2 className="font-display text-3xl font-bold">How I work</h2>
          <p className="mt-4 text-muted">
            Async-first communication (email / written updates). Fast iterations with AI-assisted development —
            every deliverable reviewed and tested before handover.
          </p>
          <p className="mt-4 text-muted">No degree on the wall. Proof is in live URLs, client platforms, and traffic graphs.</p>
          <ul className="mt-8 grid grid-cols-3 gap-4">
            {[
              { k: "Global", v: "All regions" },
              { k: "Async", v: "24h response" },
              { k: "Full stack", v: "Web + AI" },
            ].map((s) => (
              <li key={s.k} className="rounded-2xl border border-line p-4">
                <strong className="block font-display">{s.k}</strong>
                <span className="text-sm text-muted">{s.v}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal className="mt-20">
        <h2 className="font-display text-4xl font-bold">Stack & tools</h2>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {skills.map((s) => (
            <div
              key={s}
              className="rounded-2xl border border-line bg-bg-2 py-5 text-center text-sm font-semibold transition hover:-translate-y-1 hover:border-accent hover:text-accent"
            >
              {s}
            </div>
          ))}
        </div>
      </Reveal>

      <div className="mt-16 divide-y divide-line">
        {timeline.map((t, i) => (
          <Reveal key={t.title} delay={i * 0.06}>
            <div className="grid gap-4 py-8 md:grid-cols-[120px_1fr]">
              <span className="font-mono text-sm text-accent">{t.year}</span>
              <div>
                <strong className="font-display text-lg">{t.title}</strong>
                <p className="mt-1 text-muted">{t.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-16 text-center">
        <ButtonLink to="/contact">Work with me →</ButtonLink>
      </Reveal>
    </main>
  );
}
