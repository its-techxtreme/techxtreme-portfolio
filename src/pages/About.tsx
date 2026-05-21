import { ButtonLink } from "../components/ui/Button";
import { Reveal } from "../components/ui/Reveal";
import { SectionLabel } from "../components/ui/SectionLabel";
import { SKILLS } from "../data/skills";
import { assetUrl } from "../lib/assets";

const timeline = [
  {
    year: "2024–26",
    title: "London Museums Directory",
    desc: "Fully custom WordPress theme + directory plugin; 350+ monthly organic visits.",
  },
  {
    year: "2025–26",
    title: "Project Logic Arbitrage",
    desc: "Private AI research terminal with multi-model orchestration and n8n automation.",
  },
  {
    year: "2024",
    title: "Virtalent.com",
    desc: "Custom service-site theme — video hero, trust modules, consultation funnel.",
  },
  { year: "Ongoing", title: "Project Aura", desc: "Local-first voice AI, memory tiers, terminal UI (R&D)." },
  { year: "Client", title: "JEE Notes Wallah", desc: "EdTech mobile app UI + Firebase membership architecture." },
];

export function About() {
  return (
    <main className="relative z-10 mx-auto max-w-site px-6 pb-24 pt-32 md:px-12">
      <Reveal>
        <SectionLabel>About</SectionLabel>
        <h1 className="font-display text-[clamp(2.25rem,6vw,4.5rem)] font-bold leading-tight tracking-tight">
          Product-grade builds.
          <br />
          <span className="text-gradient">End to end.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted">
          Techxtreme is a digital studio focused on shipped software: custom WordPress themes, SEO directories,
          lead-gen service sites, and private AI dashboards. Every case study on this site uses real production
          screenshots — live URLs where the client allows it.
        </p>
      </Reveal>

      <Reveal className="mt-16 grid gap-10 lg:grid-cols-2 lg:items-center">
        <img
          src={assetUrl("/assets/workspace.jpg")}
          alt="Workspace"
          className="rounded-card border border-line"
        />
        <div>
          <h2 className="font-display text-3xl font-bold">How we work</h2>
          <p className="mt-4 text-muted">
            Written updates and async delivery by default. Discovery locks scope and success metrics; design and
            build happen in tight loops with AI-assisted velocity — every deliverable reviewed, tested, and
            handed over with docs you can operate.
          </p>
          <p className="mt-4 text-muted">
            Recent client work includes a fully custom museum directory theme (London Museums), a conversion
            theme for Virtalent.com, an NDA AI terminal tracking 2,600+ markets, and the JEE Notes Wallah mobile
            product. R&D: Project Aura.
          </p>
          <ul className="mt-8 grid grid-cols-3 gap-4">
            {[
              { k: "Custom", v: "Themes & UI" },
              { k: "Async", v: "Clear updates" },
              { k: "Full stack", v: "Web + AI" },
            ].map((s) => (
              <li key={s.k} className="glass-card rounded-2xl border border-line p-4">
                <strong className="block font-display">{s.k}</strong>
                <span className="text-sm text-muted">{s.v}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal className="mt-20">
        <h2 className="font-display text-[2.5rem] font-bold leading-tight">Stack &amp; tools</h2>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {SKILLS.map((s) => (
            <div
              key={s}
              className="skill-chip rounded-2xl border border-line bg-bg-2 px-5 py-5 text-center text-[0.9rem] font-semibold transition duration-300 hover:-translate-y-1 hover:border-accent hover:text-accent"
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
