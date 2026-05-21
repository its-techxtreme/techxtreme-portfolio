import { AnimatePresence, motion, useReducedMotion, useSpring, useTransform, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { assetUrl } from "../../lib/assets";
import { PhoneFrame } from "../ui/PhoneMockup";

type HeroCard = {
  slug: string;
  src: string;
  label: string;
  className: string;
  glow: string;
  baseZ: number;
  phone?: boolean;
  liveUrl?: string;
};

const cards: HeroCard[] = [
  {
    slug: "london-museums",
    src: "/assets/projects/londonmuseums-home.png",
    label: "London Museums",
    className: "left-[0%] top-[6%] w-[38%] rotate-[-6deg] sm:left-[2%] sm:w-[42%]",
    glow: "rgba(34,211,238,0.25)",
    baseZ: 20,
    liveUrl: "https://londonmuseums.co.uk",
  },
  {
    slug: "virtalent",
    src: "/assets/projects/virtalent-hero.png",
    label: "Virtalent",
    className: "right-[0%] top-[0%] w-[40%] rotate-[5deg] sm:w-[44%]",
    glow: "rgba(163,230,53,0.2)",
    baseZ: 30,
    liveUrl: "https://virtalent.com",
  },
  {
    slug: "aura",
    src: "/assets/projects/aura-dashboard-hero.png",
    label: "Project Aura",
    className: "left-[10%] top-[34%] w-[52%] rotate-[-2deg] sm:left-[18%] sm:w-[58%]",
    glow: "rgba(34,211,238,0.35)",
    baseZ: 35,
  },
  {
    slug: "study-notes",
    src: "/assets/jee/home.png",
    label: "JEE Notes Wallah",
    className: "right-[2%] top-[58%] w-[30%] rotate-[6deg] sm:right-[4%] sm:top-[56%] sm:w-[32%]",
    glow: "rgba(251,146,60,0.35)",
    baseZ: 38,
    phone: true,
  },
];

export function HeroVisual() {
  const reduced = useReducedMotion();
  const [active, setActive] = useState<number | null>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, { stiffness: 50, damping: 30 });
  const sy = useSpring(my, { stiffness: 50, damping: 30 });
  const parallaxX = useTransform(sx, [0, 1], [-18, 18]);
  const parallaxY = useTransform(sy, [0, 1], [-12, 12]);

  useEffect(() => {
    if (reduced) return;
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX / window.innerWidth);
      my.set(e.clientY / window.innerHeight);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my, reduced]);

  return (
    <div
      className="relative mx-auto mt-10 h-[min(480px,88vw)] w-full max-w-[400px] sm:mt-14 sm:h-[min(560px,72vw)] sm:max-w-[560px] lg:mx-0 lg:mt-0 lg:h-[min(640px,56vh)] lg:max-w-none"
      onClick={() => setActive(null)}
      onKeyDown={(e) => e.key === "Escape" && setActive(null)}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-[2rem] opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 40% 30%, rgba(34,211,238,0.12), transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(251,146,60,0.1), transparent 55%)",
        }}
        aria-hidden
      />
      <motion.div
        className="relative h-full w-full"
        style={reduced ? undefined : { x: parallaxX, y: parallaxY }}
      >
        {cards.map((c, i) => {
          const isActive = active === i;
          const isDimmed = active !== null && !isActive;
          const z = isActive ? 70 : c.baseZ;

          return (
            <motion.button
              key={c.slug}
              type="button"
              aria-label={`Focus ${c.label}`}
              aria-pressed={isActive}
              onClick={(e) => {
                e.stopPropagation();
                setActive(isActive ? null : i);
              }}
              className={clsx(
                "absolute cursor-pointer appearance-none border-0 bg-transparent p-0 text-left outline-none transition-[z-index] duration-300",
                c.className,
                isActive && "z-[70]",
                isActive && "focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              )}
              style={{ zIndex: z }}
              initial={reduced ? false : { opacity: 0, y: 40, scale: 0.92 }}
              animate={{
                opacity: isDimmed ? 0.45 : 1,
                y: 0,
                scale: isActive ? 1.1 : isDimmed ? 0.94 : 1,
              }}
              transition={{ delay: 0.35 + i * 0.12, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              whileHover={active === null && !reduced ? { scale: 1.03 } : undefined}
            >
              <motion.div
                animate={reduced || isActive || active !== null ? undefined : { y: [0, -10, 0] }}
                transition={{ duration: 5 + i * 0.7, repeat: Infinity, ease: "easeInOut" }}
                className="relative pb-8"
              >
                <div
                  className={clsx(
                    "pointer-events-none absolute -inset-4 rounded-3xl blur-2xl transition-opacity duration-300",
                    isActive ? "opacity-100" : "opacity-70"
                  )}
                  style={{ background: `radial-gradient(circle, ${c.glow}, transparent 70%)` }}
                  aria-hidden
                />
                {c.phone ? (
                  <PhoneFrame src={c.src} alt={c.label} compact />
                ) : (
                  <div
                    className={clsx(
                      "overflow-hidden rounded-2xl border bg-bg-2 shadow-2xl ring-1 transition duration-300",
                      isActive
                        ? "border-accent/40 ring-accent/30 shadow-[0_0_40px_-8px_rgba(34,211,238,0.35)]"
                        : "border-white/10 ring-white/5"
                    )}
                  >
                    <img
                      src={assetUrl(c.src)}
                      alt=""
                      className="block w-full object-cover object-top"
                      draggable={false}
                    />
                  </div>
                )}
                <span
                  className={clsx(
                    "absolute -bottom-1 left-2 font-mono text-[0.6rem] uppercase tracking-widest transition-colors",
                    isActive ? "text-accent" : "text-muted"
                  )}
                >
                  {c.label}
                </span>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.25 }}
                      className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 flex-wrap items-center justify-center gap-2 px-2"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Link
                        to={`/work/${c.slug}`}
                        className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-br from-accent to-cyan-600 px-4 py-2 text-xs font-bold text-bg shadow-[0_8px_24px_rgba(34,211,238,0.35)] transition hover:-translate-y-0.5"
                      >
                        View project →
                      </Link>
                      {c.liveUrl && (
                        <a
                          href={c.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 rounded-full border border-line bg-bg/90 px-3.5 py-2 text-xs font-semibold text-zinc-100 backdrop-blur transition hover:border-accent hover:text-accent"
                        >
                          Live site ↗
                        </a>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.button>
          );
        })}
      </motion.div>
      <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-white/[0.06]" aria-hidden />
      {active !== null && (
        <p className="pointer-events-none absolute -bottom-1 left-0 right-0 text-center font-mono text-[0.62rem] uppercase tracking-widest text-muted">
          Click outside to reset · Esc to close
        </p>
      )}
    </div>
  );
}
