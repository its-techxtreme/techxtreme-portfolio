import { projects } from "../data/projects";
import { AuraShowcase } from "../components/home/AuraShowcase";
import { CtaBand } from "../components/home/CtaBand";
import { Hero } from "../components/home/Hero";
import { HorizonStrip } from "../components/home/HorizonStrip";
import { ProcessSection } from "../components/home/ProcessSection";
import { ServicesTabs } from "../components/home/ServicesTabs";
import { BentoCard } from "../components/projects/ProjectCard";
import { ButtonLink } from "../components/ui/Button";
import { Reveal } from "../components/ui/Reveal";
import { ParallaxCapsule } from "../components/ui/ParallaxCapsule";
import { SectionAmbient } from "../components/ui/SectionAmbient";
import { SectionLabel } from "../components/ui/SectionLabel";
import { PANEL_GRAPHICS } from "../lib/panelGraphics";
import { projectsItemListJsonLd, Seo } from "../components/seo/Seo";
import { SITE_DESCRIPTION } from "../lib/constants";

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
      "Fast turnaround, clear written updates. The VA site went live and started generating consultation leads within weeks.",
    name: "Service business founder",
    role: "Lead-gen · Service site",
  },
];

export function Home() {
  const liveProjects = projects.filter((p) => p.liveUrl);

  return (
    <main className="overflow-x-hidden">
      <Seo
        path="/"
        description={SITE_DESCRIPTION}
        image="/assets/projects/outreachos/landing.png"
        jsonLd={projectsItemListJsonLd()}
      />
      <Hero />
      <HorizonStrip />

      <SectionAmbient tone="cyan" className="mx-auto max-w-site px-4 py-20 sm:px-6 md:px-12 md:py-24">
        <Reveal>
          <SectionLabel>Selected work</SectionLabel>
          <h2 className="font-display text-[clamp(2rem,6vw,4.5rem)] font-bold leading-tight tracking-tight">
            Shipped products.
            <br />
            <span className="text-gradient">Real screenshots.</span>
          </h2>
          <p className="mt-4 max-w-xl text-muted">
            Live client sites use real captures. Aura R&D and client apps use designed product UI — never stock
            photos pretending to be yours.
          </p>
        </Reveal>

        <div className="mt-10 grid auto-rows-[minmax(180px,auto)] grid-cols-1 gap-4 md:mt-12 md:grid-cols-12">
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
              className="inline-flex max-w-full items-center gap-2 break-all rounded-full border border-line bg-white/[0.03] px-3 py-2 text-xs font-semibold text-muted transition hover:-translate-y-0.5 hover:border-accent hover:text-accent sm:max-w-none sm:break-normal sm:px-4 sm:text-sm"
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
      </SectionAmbient>

      <AuraShowcase />

      <ProcessSection />

      <SectionAmbient tone="lime" className="mx-auto max-w-site px-4 py-20 sm:px-6 md:px-12 md:py-24">
        <Reveal>
          <SectionLabel>Capabilities</SectionLabel>
          <h2 className="font-display text-[clamp(2rem,6vw,4.5rem)] font-bold leading-tight tracking-tight">
            One studio.
            <br />
            <span className="text-gradient">Full stack.</span>
          </h2>
        </Reveal>
        <ServicesTabs />
      </SectionAmbient>

      <SectionAmbient tone="neutral" className="mx-auto max-w-site px-4 py-20 sm:px-6 md:px-12 md:py-24">
        <Reveal className="mb-10 md:mb-12">
          <ParallaxCapsule
            image={PANEL_GRAPHICS.testimonials}
            className="px-6 py-12 sm:px-8 md:px-10"
          >
            <SectionLabel>Client voice</SectionLabel>
            <h2 className="font-display text-[clamp(2rem,6vw,4.5rem)] font-bold leading-tight tracking-tight">
              Results that
              <br />
              <span className="text-gradient">compound.</span>
            </h2>
          </ParallaxCapsule>
        </Reveal>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <blockquote className="rounded-card border border-line bg-bg-2 p-6 transition hover:-translate-y-1.5 hover:border-accent/25 sm:p-8 light:bg-white light:shadow-[0_4px_20px_rgba(100,150,185,0.08)] light:hover:border-light-accent/30 light:hover:bg-[#faf6f0]">
                <p className="leading-relaxed text-zinc-300 light:text-light-primary">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-6 text-sm text-muted">
                  <strong className="block text-accent">{t.name}</strong>
                  {t.role}
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </SectionAmbient>

      <CtaBand />
    </main>
  );
}
