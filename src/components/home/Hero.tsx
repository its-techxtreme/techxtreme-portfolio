import { motion, useReducedMotion } from "framer-motion";
import clsx from "clsx";
import { useState } from "react";
import { EMAIL } from "../../lib/constants";
import { Button } from "../ui/Button";
import { ButtonLink } from "../ui/Button";
import { CountUp } from "../ui/CountUp";

const words = [
  ["We", "engineer"],
  ["digital", "leverage."],
];

const stats = [
  { end: 350, suffix: "+", label: "Monthly organic visits (flagship directory)" },
  { end: 2600, suffix: "+", label: "Active markets tracked (AI platform)" },
  { value: "24/7", label: "Async delivery · Any timezone" },
  { value: "5", label: "Production-grade builds in portfolio" },
];

export function Hero() {
  const reduced = useReducedMotion();
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <section className="relative z-10 mx-auto flex min-h-screen max-w-site flex-col justify-center px-6 pb-16 pt-28 md:px-12">
      <div
        className="pointer-events-none absolute -right-[10%] top-[-10%] h-[min(520px,70vw)] w-[min(520px,70vw)] rounded-full bg-accent/20 blur-[80px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-[8%] bottom-[10%] h-[min(400px,55vw)] w-[min(400px,55vw)] rounded-full bg-accent-2/15 blur-[80px]"
        aria-hidden
      />

      <motion.div
        className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-line bg-white/[0.02] px-4 py-2 font-mono text-[0.7rem] text-muted"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <span className="h-2 w-2 animate-pulseDot rounded-full bg-lime shadow-[0_0_12px_#a3e635]" />
        Available worldwide · All timezones
      </motion.div>

      <h1 className="font-display text-[clamp(3rem,12vw,8.5rem)] font-bold leading-[0.92] tracking-[-0.05em]">
        {words.map((line, li) => (
          <span key={li} className="block overflow-hidden">
            {line.map((word, wi) => (
              <motion.span
                key={word}
                className={clsx(
                  "mr-[0.2em] inline-block",
                  word === "leverage." && "outline-text"
                )}
                initial={reduced ? false : { y: "110%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.12 + li * 0.08 + wi * 0.06, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        ))}
      </h1>

      <motion.p
        className="mt-8 max-w-lg text-lg text-muted"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        Remote studio shipping directories that rank, service sites that convert, and AI systems that run
        while you sleep — for founders on every continent.
      </motion.p>

      <motion.div
        className="mt-10 flex flex-wrap gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.65 }}
      >
        <ButtonLink to="/work">Explore work →</ButtonLink>
        <Button variant="ghost" onClick={copyEmail}>
          {copied ? "Copied!" : "Copy email"}
        </Button>
      </motion.div>

      <motion.div
        className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-2xl border border-line bg-bg-2 p-6 transition hover:-translate-y-1 hover:border-accent/35"
          >
            <strong className="block font-display text-3xl font-bold text-gradient md:text-4xl">
              {"end" in s ? <CountUp end={s.end} suffix={s.suffix} /> : s.value}
            </strong>
            <span className="mt-1 block text-sm text-muted">{s.label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
