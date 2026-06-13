import { motion, useReducedMotion } from "framer-motion";
import clsx from "clsx";
import { useState } from "react";
import { EMAIL } from "../../lib/constants";
import { Button } from "../ui/Button";
import { ButtonLink } from "../ui/Button";
import { HeroScene } from "./HeroScene";
import { HeroVisual } from "./HeroVisual";

const words = [
  ["We", "engineer"],
  ["digital", "leverage."],
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
    <section className="relative z-10 mx-auto min-h-[100dvh] max-w-site overflow-hidden px-4 pb-12 pt-24 sm:px-6 sm:pb-16 sm:pt-28 md:px-12">
      <HeroScene />

      <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_minmax(320px,1fr)] lg:gap-16">
        <div className="flex flex-col justify-center">
          <motion.div
            className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-line bg-white/[0.03] px-4 py-2 font-mono text-[0.7rem] text-muted backdrop-blur-md light:bg-white light:border-light-line light:shadow-[0_2px_12px_rgba(100,150,185,0.08)]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="h-2 w-2 animate-pulseDot rounded-full bg-lime shadow-[0_0_12px_#a3e635]" />
            Accepting new client work · Limited slots
          </motion.div>

          <h1 className="font-display text-[clamp(3rem,10vw,7rem)] font-bold leading-[0.92] tracking-[-0.05em] lg:text-[clamp(3.5rem,6vw,6.5rem)]">
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
                    transition={{
                      delay: 0.12 + li * 0.08 + wi * 0.06,
                      duration: 1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

          <motion.p
            className="mt-8 max-w-xl text-lg text-muted"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Custom themes, directories that rank, conversion-focused service sites, and private AI platforms —
            shipped with real screenshots, not concept art.
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
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}
