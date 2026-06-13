import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import type { ReactNode } from "react";
import { useRef, useState } from "react";
import clsx from "clsx";
import { assetUrl } from "../../lib/assets";
import { useTheme } from "../../contexts/ThemeContext";

type Props = {
  image: string;
  children: ReactNode;
  className?: string;
};

const IMG_STYLE_DARK = { filter: "blur(6px) saturate(1.15)" };
const IMG_STYLE_LIGHT = { filter: "blur(4px) saturate(1.2)" };

const CONTENT_CLASS = clsx(
  "relative z-10",
  "dark:[&_h1]:!text-white dark:[&_h2]:!text-white dark:[&_h3]:!text-white",
  "dark:[&_h1]:drop-shadow-[0_2px_16px_rgba(0,0,0,0.95)] dark:[&_h2]:drop-shadow-[0_2px_16px_rgba(0,0,0,0.95)]",
  "dark:[&_h3]:drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]",
  "dark:[&_p]:!text-zinc-100 dark:[&_p]:drop-shadow-[0_1px_10px_rgba(0,0,0,0.95)]",
  "dark:[&_p.font-mono]:!text-cyan-200",
  "dark:[&_.text-gradient]:from-white dark:[&_.text-gradient]:via-cyan-200 dark:[&_.text-gradient]:to-cyan-300",
  "dark:[&_.text-gradient]:drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)]",
  "dark:[&_span.text-accent]:text-cyan-200",
  "dark:[&_.font-mono]:text-cyan-200",
  "light:[&_h1]:!text-[#0f2433] light:[&_h2]:!text-[#0f2433] light:[&_h3]:!text-[#0f2433]",
  "light:[&_h1]:font-bold light:[&_h2]:font-bold",
  "light:[&_p]:!text-[#1e4a63] light:[&_p.font-mono]:!text-[#2b6f8f]",
  "light:[&_.text-gradient]:from-[#1a5f7a] light:[&_.text-gradient]:via-[#2b6f8f] light:[&_.text-gradient]:to-[#4a9ec4]",
  "light:[&_span.text-accent]:text-[#2b6f8f]",
  "light:[&_.font-mono]:text-[#2b6f8f]"
);

export function ParallaxCapsule({ image, children, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { theme } = useTheme();
  const [imgOk, setImgOk] = useState(true);
  const src = assetUrl(image);
  const imgStyle = theme === "light" ? IMG_STYLE_LIGHT : IMG_STYLE_DARK;

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
              style={imgStyle}
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
                style={imgStyle}
              />
            </motion.div>
          )
        ) : (
          <div className="absolute inset-0 bg-bg-2" />
        )}

        {/* Dark mode overlays */}
        <div className="absolute inset-0 hidden dark:block bg-[#070708]/25" />
        <div
          className="absolute inset-0 hidden dark:block"
          style={{
            background:
              "radial-gradient(ellipse 92% 82% at 50% 42%, rgba(7,7,8,0.88) 0%, rgba(7,7,8,0.55) 52%, transparent 100%)",
          }}
        />
        <div className="absolute inset-0 hidden bg-gradient-to-t dark:block dark:from-[#070708]/65 dark:via-[#070708]/20 dark:to-[#070708]/30" />

        {/* Light mode: moderate dark scrim — graphics visible, text readable */}
        <div className="absolute inset-0 hidden light:block bg-[#0f2433]/10" />
        <div
          className="absolute inset-0 hidden light:block"
          style={{
            background:
              "radial-gradient(ellipse 88% 72% at 50% 38%, rgba(15,36,51,0.22) 0%, rgba(15,36,51,0.08) 50%, transparent 100%)",
          }}
        />
        <div className="absolute inset-0 hidden bg-gradient-to-t light:block light:from-[#0f2433]/55 light:via-[#0f2433]/20 light:to-transparent" />

        <div className="absolute inset-0 ring-1 ring-inset dark:ring-white/[0.08] light:ring-[#2b6f8f]/20" />
      </div>

      <div className={CONTENT_CLASS}>{children}</div>
    </div>
  );
}
