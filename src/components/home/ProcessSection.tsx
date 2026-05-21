import { PANEL_GRAPHICS } from "../../lib/panelGraphics";
import { ParallaxCapsule } from "../ui/ParallaxCapsule";
import { Reveal } from "../ui/Reveal";
import { SectionLabel } from "../ui/SectionLabel";

const steps = [
  { step: "01", title: "Discovery", desc: "Goals, audience, and success metrics — aligned before a single pixel." },
  { step: "02", title: "Design & build", desc: "High-fidelity UI, performance-first code, real content — not lorem ipsum." },
  { step: "03", title: "Launch", desc: "DNS, analytics, SEO foundations, and handover docs you actually use.", active: true },
  { step: "04", title: "Grow", desc: "Iterate on traffic, conversions, and automation as your product scales." },
];

export function ProcessSection() {
  return (
    <section className="relative isolate z-10 mx-auto max-w-site px-4 py-20 sm:px-6 md:px-12 md:py-24">
      <Reveal className="mb-10 md:mb-12">
        <ParallaxCapsule
          image={PANEL_GRAPHICS.process}
          className="px-6 py-12 sm:px-8 md:px-12 md:py-14"
        >
          <SectionLabel>How we work</SectionLabel>
          <h2 className="font-display text-[clamp(2rem,6vw,4.5rem)] font-bold leading-tight tracking-tight">
            From brief to
            <br />
            <span className="text-gradient">live URL.</span>
          </h2>
        </ParallaxCapsule>
      </Reveal>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <Reveal key={s.step} delay={i * 0.08}>
            <div
              className={`group relative isolate flex min-h-[240px] flex-col justify-end overflow-hidden rounded-card border bg-bg-2 p-6 transition duration-300 sm:min-h-[280px] sm:p-7 ${
                s.active
                  ? "border-accent/40 shadow-[0_0_30px_-8px_rgba(34,211,238,0.2)]"
                  : "border-line hover:border-accent/25"
              }`}
            >
              <span
                className="pointer-events-none absolute right-2 top-0 z-0 select-none font-display text-[4.5rem] font-bold leading-none text-white/[0.05] sm:right-3 sm:text-[5.5rem]"
                aria-hidden
              >
                {s.step}
              </span>
              <div className="relative z-10">
                <h3 className="font-display text-lg font-bold sm:text-xl">{s.title}</h3>
                <p className="mt-2 text-sm text-muted">{s.desc}</p>
                {s.active && (
                  <span className="mt-4 inline-flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-widest text-accent">
                    <span className="h-1.5 w-1.5 animate-pulseDot rounded-full bg-accent" />
                    Active phase
                  </span>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
