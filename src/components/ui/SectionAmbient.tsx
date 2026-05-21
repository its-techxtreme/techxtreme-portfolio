import type { ReactNode } from "react";
import clsx from "clsx";

type Tone = "cyan" | "orange" | "lime" | "neutral";

const tones: Record<Tone, string> = {
  cyan: "from-accent/[0.07] via-transparent to-transparent",
  orange: "from-orange-500/[0.08] via-transparent to-transparent",
  lime: "from-lime/[0.06] via-transparent to-transparent",
  neutral: "from-white/[0.03] via-transparent to-transparent",
};

export function SectionAmbient({
  children,
  tone = "neutral",
  className,
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <section className={clsx("relative", className)}>
      <div
        className={clsx(
          "pointer-events-none absolute inset-0 bg-gradient-to-b opacity-100",
          tones[tone]
        )}
        aria-hidden
      />
      <div className="relative z-10">{children}</div>
    </section>
  );
}
