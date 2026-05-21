import { projects } from "../data/projects";
import { Hero } from "../components/home/Hero";
import { Marquee } from "../components/home/Marquee";
import { ServicesTabs } from "../components/home/ServicesTabs";
import { BentoCard } from "../components/projects/ProjectCard";
import { ButtonLink } from "../components/ui/Button";
import { Reveal } from "../components/ui/Reveal";
import { SectionLabel } from "../components/ui/SectionLabel";

const testimonials = [
  {
    quote:
      "The directory hit 350+ monthly visitors with zero marketing spend. Exactly the organic pipeline we needed.",
    name: "Directory client",
    role: "Content & tourism niche",
  },
  {
    quote:
      "The AI dashboard replaced hours of manual research. Multi-model consensus in one screen — game changer for our trading desk.",
    name: "Private platform client",
    role: "Prediction markets · NDA",
  },
  {
    quote:
      "Fast turnaround, clear communication across timezones. The VA site went live and started generating consultation leads within weeks.",
    name: "Service business founder",
    role: "UK market · Remote build",
  },
];

const process = [
  { step: "01", title: "Discovery", desc: "Goals, audience, and success metrics — aligned before a single pixel." },
  { step: "02", title: "Design & build", desc: "High-fidelity UI, performance-first code, real content — not lorem ipsum." },
  { step: "03", title: "Launch", desc: "DNS, analytics, SEO foundations, and handover docs you actually use." },
  { step: "04", title: "Grow", desc: "Iterate on traffic, conversions, and automation as your product scales." },
];

export function Home() {
  const liveProjects = projects.filter((p) => p.liveUrl);

  return (
    <main>
      <Hero />
      <Marquee />

      <section className="relative z-10 mx-auto max-w-site px-6 py-24 md:px-12">
        <Reveal>
          <SectionLabel>Selected work</SectionLabel>
          <h2 className="font-display text-[clamp(2.25rem,6vw,4.5rem)] font-bold leading-tight tracking-tight">
            Shipped products.
            <br />
            <span className="text-gradient">Real screenshots.</span>
          </h2>
          <p className="mt-4 max-w-xl text-lg text-muted">
            No mockups. No filler. Every frame below is from a live or client production build.
          </p>
        </Reveal>

        <div className="mt-12 grid auto-rows-[minmax(180px,auto)] grid-cols-1 gap-4 md:grid-cols-12">
          {projects.map((p) => (
            <BentoCard key={p.slug} project={p} />
          ))}
        </div>

        <Reveal className="mt-8 flex flex-wrap gap-3">
          {liveProjects.map((p) => (
            <a
              key={p.slug}
              href={p.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-4 py-2 text-sm font-semibold text-muted transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-lime shadow-[0_0_8px_#a3e635]" />
              {p.liveUrl!.replace("https://", "")}
            </a>
          ))}
        </Reveal>

        <Reveal className="mt-10 text-center">
          <ButtonLink to="/work" variant="ghost">
            View all projects →
          </ButtonLink>
        </Reveal>
      </section>

      <section className="relative z-10 mx-auto max-w-site px-6 py-24 md:px-12">
        <Reveal>
          <SectionLabel>How we work</SectionLabel>
          <h2 className="font-display text-[clamp(2.25rem,6vw,4.5rem)] font-bold leading-tight tracking-tight">
            From brief to
            <br />
            <span className="text-gradient">live URL.</span>
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((s, i) => (
            <Reveal key={s.step} delay={i * 0.08}>
              <div className="relative overflow-hidden rounded-card border border-line bg-bg-2 p-7 transition hover:-translate-y-1.5 hover:border-accent/35">
                <span className="pointer-events-none absolute right-4 top-2 font-display text-6xl font-bold opacity-[0.06]">
                  {s.step}
                </span>
                <h3 className="font-display text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-site px-6 py-24 md:px-12">
        <Reveal>
          <SectionLabel>Capabilities</SectionLabel>
          <h2 className="font-display text-[clamp(2.25rem,6vw,4.5rem)] font-bold leading-tight tracking-tight">
            One studio.
            <br />
            <span className="text-gradient">Full stack.</span>
          </h2>
        </Reveal>
        <ServicesTabs />
      </section>

      <section className="relative z-10 mx-auto max-w-site px-6 py-24 md:px-12">
        <Reveal>
          <SectionLabel>Client voice</SectionLabel>
          <h2 className="font-display text-[clamp(2.25rem,6vw,4.5rem)] font-bold leading-tight tracking-tight">
            Results that
            <br />
            <span className="text-gradient">compound.</span>
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <blockquote className="rounded-card border border-line bg-bg-2 p-8 transition hover:-translate-y-1.5">
                <p className="leading-relaxed text-zinc-300">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-6 text-sm text-muted">
                  <strong className="block text-accent">{t.name}</strong>
                  {t.role}
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal className="relative z-10 mx-6 mb-24 rounded-card border border-line bg-bg-2 px-8 py-16 text-center md:mx-12 md:py-20">
        <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold">
          Ready to ship something <span className="text-gradient">serious</span>?
        </h2>
        <p className="mx-auto mt-4 max-w-md text-muted">Limited capacity — replying within 24 hours to serious inquiries.</p>
        <div className="mt-8">
          <ButtonLink to="/contact">Start your project →</ButtonLink>
        </div>
      </Reveal>
    </main>
  );
}
