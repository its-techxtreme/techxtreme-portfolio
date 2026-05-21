import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import type { ReactNode } from "react";
import { useRef, useState } from "react";
import clsx from "clsx";
import { assetUrl } from "../../lib/assets";

type Props = {
  image: string;
  children: ReactNode;
  className?: string;
};

const IMG_STYLE = { filter: "blur(6px) saturate(1.15)" };

/** Readable typography on bright / busy panel backgrounds */
const CONTENT_CLASS =
  "relative z-10 " +
  "[&_h1]:!text-white [&_h2]:!text-white [&_h3]:!text-white " +
  "[&_h1]:drop-shadow-[0_2px_16px_rgba(0,0,0,0.95)] [&_h2]:drop-shadow-[0_2px_16px_rgba(0,0,0,0.95)] " +
  "[&_h3]:drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] " +
  "[&_p]:!text-zinc-100 [&_p]:drop-shadow-[0_1px_10px_rgba(0,0,0,0.95)] " +
  "[&_p.font-mono]:!text-cyan-200 " +
  "[&_li]:text-zinc-100 [&_li]:drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)] " +
  "[&_.text-gradient]:from-white [&_.text-gradient]:via-cyan-200 [&_.text-gradient]:to-cyan-300 " +
  "[&_.text-gradient]:drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)] " +
  "[&_span.text-accent]:text-cyan-200 [&_span.text-accent]:drop-shadow-[0_1px_10px_rgba(0,0,0,0.95)] " +
  "[&_.font-mono]:text-cyan-200 [&_.font-mono]:drop-shadow-[0_1px_8px_rgba(0,0,0,0.95)]";

export function ParallaxCapsule({ image, children, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const [imgOk, setImgOk] = useState(true);
  const src = assetUrl(image);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.1]);

  return (
    <div
      ref={ref}
      className={clsx(
        "relative isolate min-h-[200px] overflow-hidden rounded-card border border-line",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
        {imgOk ? (
          reduced ? (
            <img
              src={src}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
              style={IMG_STYLE}
            />
          ) : (
            <motion.div
              className="absolute inset-[-8%] will-change-transform"
              style={{ y: bgY, scale: bgScale }}
            >
              <img
                src={src}
                alt=""
                onError={() => setImgOk(false)}
                className="h-full w-full object-cover"
                style={IMG_STYLE}
              />
            </motion.div>
          )
        ) : (
          <div className="absolute inset-0 bg-bg-2" />
        )}

        <div className="absolute inset-0 bg-[#070708]/25" />
        {/* Vignette behind copy — art stays visible at edges */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 92% 82% at 50% 42%, rgba(7,7,8,0.88) 0%, rgba(7,7,8,0.55) 52%, transparent 100%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070708]/65 via-[#070708]/20 to-[#070708]/30" />
        <div className="absolute inset-0 ring-1 ring-inset ring-white/[0.08]" />
      </div>

      <div className={CONTENT_CLASS}>{children}</div>
    </div>
  );
}
