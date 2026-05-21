import { Link } from "react-router-dom";
import { assetUrl } from "../../lib/assets";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "../ui/Reveal";
import { SectionLabel } from "../ui/SectionLabel";

const panels = [
  {
    src: "/assets/projects/aura-dashboard-hero.png",
    label: "Command terminal",
    placement: "md:col-span-7 md:row-span-2 md:col-start-1 md:row-start-1",
    minH: "min-h-[320px] md:min-h-0 md:h-full",
  },
  {
    src: "/assets/aura/neural-map.png",
    label: "Neural map",
    placement: "md:col-span-5 md:col-start-8 md:row-start-1",
    minH: "min-h-[220px]",
  },
  {
    src: "/assets/aura/memory-archive.png",
    label: "Memory archive",
    placement: "md:col-span-5 md:col-start-8 md:row-start-2",
    minH: "min-h-[220px]",
  },
  {
    src: "/assets/projects/aura-mascot.png",
    label: "Aura persona",
    placement: "md:col-span-6 md:col-start-1 md:row-start-3",
    minH: "min-h-[300px]",
    objectPos: "object-center",
  },
  {
    src: "/assets/aura/system-settings.png",
    label: "System core",
    placement: "md:col-span-6 md:col-start-7 md:row-start-3",
    minH: "min-h-[300px]",
  },
];

export function AuraShowcase() {
  const reduced = useReducedMotion();

  return (
    <section className="relative z-10 mx-auto max-w-site overflow-hidden px-4 py-20 sm:px-6 md:px-12 md:py-24">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.06] blur-[100px]"
        aria-hidden
      />
      <Reveal>
        <SectionLabel>R&D · Project Aura</SectionLabel>
        <h2 className="font-display text-[clamp(2.25rem,6vw,4.5rem)] font-bold leading-tight tracking-tight">
          Local AI with
          <br />
          <span className="text-gradient">memory &amp; persona.</span>
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          A local-first assistant stack — terminal UI, hierarchical memory, trust/mood persona engine, and a
          cartoon mascot layer (not stock photography). Hybrid inference via Ollama with cloud fallback.
        </p>
      </Reveal>

      <div className="relative mt-12 grid grid-cols-1 gap-4 md:grid-cols-12 md:grid-rows-[auto_auto_auto]">
        {panels.map((p, i) => (
          <Reveal key={p.label} delay={i * 0.06} className={`${p.placement} h-full`}>
            <motion.div
              className={`group relative flex h-full overflow-hidden rounded-card border border-line bg-bg-2 ${p.minH}`}
              whileHover={reduced ? undefined : { y: -6 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <img
                src={assetUrl(p.src)}
                alt={p.label}
                className={`absolute inset-0 h-full w-full object-cover ${p.objectPos ?? "object-top"} transition duration-700 group-hover:scale-[1.03]`}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/55 to-bg/20" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/5 transition group-hover:ring-accent/30" />
              <span className="absolute bottom-5 left-5 z-10 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-accent">
                {p.label}
              </span>
              <span className="absolute right-4 top-4 z-10 rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 font-mono text-[0.6rem] text-accent">
                Aura
              </span>
            </motion.div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10">
        <Link
          to="/work/aura"
          className="inline-flex items-center gap-2 font-semibold text-accent transition hover:gap-3"
        >
          Full Aura case study →
        </Link>
      </Reveal>
    </section>
  );
}
