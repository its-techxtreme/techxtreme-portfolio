import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export function Preloader() {
  const reduced = useReducedMotion();
  const [done, setDone] = useState(reduced);

  useEffect(() => {
    if (reduced) return;
    const t = setTimeout(() => setDone(true), 2200);
    return () => clearTimeout(t);
  }, [reduced]);

  if (done) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[10001] grid place-items-center bg-bg"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.8, duration: 0.5 }}
      onAnimationComplete={() => setDone(true)}
    >
      <div className="text-center">
        <motion.p
          className="font-display text-4xl font-bold md:text-6xl"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          TECHXTREME
        </motion.p>
        <div className="mx-auto mt-6 h-0.5 w-48 overflow-hidden rounded bg-line">
          <motion.div
            className="h-full bg-gradient-to-r from-accent to-accent-2"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
}
