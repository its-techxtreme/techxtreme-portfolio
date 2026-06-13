import { AnimatePresence, motion, useReducedMotion, useSpring, useTransform, useMotionValue } from "framer-motion";
import { useEffect, useState, useRef } from "react";
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
    className: "left-[2%] top-[8%] w-[36%] rotate-[-4deg] sm:left-[2%] sm:w-[40%] md:w-[42%]",
    glow: "rgba(34,211,238,0.25)",
    baseZ: 20,
    liveUrl: "https://londonmuseums.co.uk",
  },
  {
    slug: "virtalent",
    src: "/assets/projects/virtalent-hero.png",
    label: "Virtalent",
    className: "right-[1%] top-[2%] w-[38%] rotate-[3deg] sm:w-[42%] md:w-[44%]",
    glow: "rgba(163,230,53,0.2)",
    baseZ: 30,
    liveUrl: "https://virtalent.com",
  },
  {
    slug: "aura",
    src: "/assets/projects/aura-dashboard-hero.png",
    label: "Project Aura",
    className: "left-[8%] top-[36%] w-[48%] rotate-[-1deg] sm:left-[16%] sm:w-[54%] md:w-[58%]",
    glow: "rgba(34,211,238,0.35)",
    baseZ: 35,
  },
  {
    slug: "study-notes",
    src: "/assets/jee/home.png",
    label: "JEE Notes Wallah",
    className: "right-[3%] top-[58%] w-[28%] rotate-[4deg] sm:right-[4%] sm:top-[56%] sm:w-[30%] md:w-[32%]",
    glow: "rgba(251,146,60,0.35)",
    baseZ: 38,
    phone: true,
  },
];

export function HeroVisual() {
  const reduced = useReducedMotion();
  const [active, setActive] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, { stiffness: 50, damping: 30 });
  const sy = useSpring(my, { stiffness: 50, damping: 30 });
  const parallaxX = useTransform(sx, [0, 1], [-12, 12]);
  const parallaxY = useTransform(sy, [0, 1], [-8, 8]);

  useEffect(() => {
    if (reduced) return;
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX / window.innerWidth);
      my.set(e.clientY / window.innerHeight);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my, reduced]);

  // Close hologram when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (active !== null && containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setActive(null);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActive(null);
      }
    };

    if (active !== null) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [active]);

  return (
    <div
      ref={containerRef}
      className="relative mx-auto mt-8 h-[min(420px,80vw)] w-full max-w-[380px] sm:mt-12 sm:h-[min(520px,65vw)] sm:max-w-[520px] lg:mx-0 lg:mt-0 lg:h-[min(600px,52vh)] lg:max-w-none"
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
              onTouchStart={(e) => {
                // Improve touch responsiveness on mobile
                e.stopPropagation();
              }}
              className={clsx(
                "absolute cursor-pointer appearance-none border-0 bg-transparent p-0 text-left outline-none transition-[z-index] duration-300",
                c.className,
                isActive && "z-[70]",
                isActive && "focus-visible:ring-2 focus-visible:ring-offset-2 dark:focus-visible:ring-accent dark:focus-visible:ring-offset-bg light:focus-visible:ring-light-accent light:focus-visible:ring-offset-light-bg"
              )}
              style={{ zIndex: z }}
              initial={reduced ? false : { opacity: 0, y: 30, scale: 0.95 }}
              animate={{
                opacity: isDimmed ? 0.4 : 1,
                y: 0,
                scale: isActive ? 1.08 : isDimmed ? 0.96 : 1,
              }}
              transition={{ 
                delay: 0.3 + i * 0.1, 
                duration: 0.6, 
                ease: [0.16, 1, 0.3, 1],
                scale: { type: "spring", stiffness: 300, damping: 25 }
              }}
              whileHover={active === null && !reduced ? { scale: 1.02 } : undefined}
              whileTap={{ scale: 0.98 }}
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
                      "overflow-hidden rounded-2xl border shadow-2xl ring-1 transition duration-300",
                      "dark:bg-bg-2 light:bg-light-bg-2",
                      isActive
                        ? "dark:border-accent/40 dark:ring-accent/30 dark:shadow-[0_0_40px_-8px_rgba(34,211,238,0.35)] light:border-light-accent/40 light:ring-light-accent/30 light:shadow-[0_0_40px_-8px_rgba(45,100,140,0.35)]"
                        : "dark:border-white/10 dark:ring-white/5 light:border-light-line light:ring-light-accent/10"
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
                    isActive 
                      ? "dark:text-accent light:text-light-accent" 
                      : "dark:text-muted light:text-light-muted"
                  )}
                >
                  {c.label}
                </span>

                <AnimatePresence>
                  {isActive && (
                <motion.div
                  initial={{ opacity: 0, y: 12, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.95 }}
                  transition={{ 
                    duration: 0.3,
                    type: "spring",
                    stiffness: 400,
                    damping: 25
                  }}
                  className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 flex-wrap items-center justify-center gap-2 px-2 sm:bottom-6"
                  onClick={(e) => e.stopPropagation()}
                  onTouchStart={(e) => e.stopPropagation()}
                >
                      <Link
                        to={`/work/${c.slug}`}
                        className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-br px-3 py-1.5 text-xs font-bold transition hover:-translate-y-0.5 sm:px-4 sm:py-2 dark:from-accent dark:to-cyan-600 dark:text-bg dark:shadow-[0_6px_20px_rgba(34,211,238,0.35)] light:from-light-accent light:to-light-accent-2 light:text-white light:shadow-[0_6px_20px_rgba(45,100,140,0.35)]"
                      >
                        View project →
                      </Link>
                      {c.liveUrl && (
                        <a
                          href={c.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 rounded-full border backdrop-blur transition sm:px-3.5 sm:py-2 px-2.5 py-1.5 text-xs font-semibold dark:border-line dark:bg-bg/90 dark:text-zinc-100 dark:hover:border-accent dark:hover:text-accent light:border-light-line light:bg-light-bg-2/90 light:text-light-primary light:hover:border-light-accent light:hover:text-light-accent"
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
      <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 dark:ring-white/[0.06] light:ring-light-accent/[0.12]" aria-hidden />
      {active !== null && (
        <p className="pointer-events-none absolute -bottom-2 left-0 right-0 text-center font-mono text-[0.58rem] uppercase tracking-widest opacity-75 sm:-bottom-1 sm:text-[0.62rem] dark:text-muted light:text-light-muted">
          Click outside to close · Esc to exit
        </p>
      )}
    </div>
  );
}
