import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, useState } from "react";
import { TECH_MARQUEE } from "../../lib/constants";
import { CountUp } from "../ui/CountUp";

const stats = [
  { end: 350, suffix: "+", label: "Monthly organic visits (flagship directory)", highlight: false },
  { end: 2600, suffix: "+", label: "Active markets tracked (AI platform)", highlight: true },
  { value: "24/7", label: "Async delivery · Documented handover", highlight: false },
  { value: "7", label: "Production-grade builds in portfolio", highlight: false },
] as const;

export function HorizonStrip() {
  const items = [...TECH_MARQUEE, ...TECH_MARQUEE];
  const reduced = useReducedMotion();

  return (
    <section className="relative z-10 overflow-hidden border-y border-line bg-bg-2 py-14">
      <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-accent/10 blur-[120px]" aria-hidden />

      <div className="relative overflow-hidden py-2">
        <div className="flex w-max animate-marquee">
          {items.map((t, i) => (
            <span
              key={`${t}-${i}`}
              className="flex items-center whitespace-nowrap px-6 font-display text-sm font-semibold uppercase tracking-[0.2em] text-muted"
            >
              {t}
              <span className="mx-6 text-accent" aria-hidden>
                ◆
              </span>
            </span>
          ))}
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-10 grid max-w-site gap-4 px-6 md:grid-cols-4 md:px-12">
        {stats.map((s, i) => (
          <StatGlassCard key={s.label} stat={s} index={i} reduced={!!reduced} />
        ))}
      </div>
    </section>
  );
}

function StatGlassCard({
  stat,
  index,
  reduced,
}: {
  stat: (typeof stats)[number];
  index: number;
  reduced: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const [hover, setHover] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={reduced ? false : { opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`glass-card relative rounded-2xl p-6 transition duration-300 ${
        stat.highlight || hover
          ? "-translate-y-1 border-accent/40 shadow-[0_0_24px_-6px_rgba(34,211,238,0.35)]"
          : "border-line hover:border-accent/25"
      }`}
    >
      {stat.highlight && (
        <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-xs text-bg shadow-[0_0_12px_rgba(34,211,238,0.5)]">
          ⚡
        </span>
      )}
      <strong className="block font-display text-3xl font-bold text-gradient md:text-4xl">
        {"end" in stat ? <CountUp end={stat.end} suffix={stat.suffix} /> : stat.value}
      </strong>
      <span className="mt-2 block text-sm text-zinc-400">{stat.label}</span>
    </motion.div>
  );
}
