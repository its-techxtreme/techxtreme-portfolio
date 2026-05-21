import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { useEffect } from "react";

/** Single cyan spotlight + scan line — no purple/violet blobs */
export function HeroScene() {
  const reduced = useReducedMotion();
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.35);
  const sx = useSpring(mx, { stiffness: 40, damping: 28 });
  const sy = useSpring(my, { stiffness: 40, damping: 28 });

  useEffect(() => {
    if (reduced) return;
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX / window.innerWidth);
      my.set(e.clientY / window.innerHeight);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my, reduced]);

  if (reduced) {
    return (
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(34,211,238,0.08),transparent_70%)]" />
      </div>
    );
  }

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <motion.div
        className="absolute h-[min(640px,90vw)] w-[min(640px,90vw)] rounded-full opacity-[0.14]"
        style={{
          left: sx,
          top: sy,
          x: "-50%",
          y: "-50%",
          background:
            "radial-gradient(circle, rgba(34,211,238, 0.55) 0%, rgba(34,211,238, 0.12) 35%, transparent 68%)",
          filter: "blur(48px)",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_45%_at_50%_-5%,rgba(255,255,255,0.04),transparent_55%)]" />
      <div className="hero-scan absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg to-transparent" />
    </div>
  );
}
