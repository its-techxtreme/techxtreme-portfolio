import { motion, useReducedMotion } from "framer-motion";
import { useRef, useState } from "react";
import clsx from "clsx";
import { assetUrl } from "../../lib/assets";

type Props = {
  src: string;
  alt: string;
  label?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  /** Offset screenshot below dynamic island (hero uses compact island) */
  compact?: boolean;
};

const widths = {
  sm: "w-[min(200px,72vw)]",
  md: "w-[min(240px,78vw)]",
  lg: "w-[min(280px,42vw)]",
};

/** Screen inset so app header clears the dynamic island */
function PhoneScreen({
  src,
  alt,
  failed,
  onError,
  compact,
}: {
  src: string;
  alt: string;
  failed: boolean;
  onError: () => void;
  compact?: boolean;
}) {
  const contentTop = compact ? "top-[22px]" : "top-[26px]";

  return (
    <div className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[2rem] bg-zinc-950 ring-1 ring-white/10">
      <div
        className={clsx(
          "absolute left-1/2 z-30 -translate-x-1/2 rounded-full bg-[#0a0a0c] ring-1 ring-white/10",
          compact ? "top-1.5 h-[10px] w-[22%]" : "top-2 h-[11px] w-[24%]"
        )}
        aria-hidden
      />
      <div className={clsx("absolute inset-x-0 bottom-0 overflow-hidden", contentTop)}>
        {failed ? (
          <div className="flex h-full items-center justify-center p-4 text-center text-xs text-muted">
            Screenshot unavailable
          </div>
        ) : (
          <img
            src={src}
            alt={alt}
            className="h-full w-full object-cover object-top"
            loading="eager"
            decoding="async"
            onError={onError}
          />
        )}
      </div>
    </div>
  );
}

export function PhoneMockup({ src, alt, label, className, size = "md", compact }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [failed, setFailed] = useState(false);
  const url = assetUrl(src);

  const onMove = (e: React.MouseEvent) => {
    if (reduced || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - 0.5) * 10;
    const y = ((e.clientY - r.top) / r.height - 0.5) * -10;
    setTilt({ x, y });
  };

  return (
    <motion.figure
      ref={ref}
      className={clsx("flex shrink-0 flex-col items-center", className)}
      onMouseMove={onMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={
        reduced
          ? undefined
          : {
              transform: `perspective(900px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
              transition: "transform 0.15s ease-out",
            }
      }
    >
      <div
        className={clsx(
          "relative rounded-[2.4rem] border border-white/15 bg-[#0a0a0c] p-2 shadow-[0_24px_80px_-20px_rgba(0,0,0,0.85)]",
          widths[size],
          size === "lg" && "shadow-[0_0_50px_-10px_rgba(251,146,60,0.35)]"
        )}
      >
        <PhoneScreen src={url} alt={alt} failed={failed} onError={() => setFailed(true)} compact={compact} />
        <div
          className="pointer-events-none absolute inset-x-4 bottom-3 h-1 rounded-full bg-white/20"
          aria-hidden
        />
      </div>
      {label && (
        <figcaption className="mt-3 max-w-[min(240px,78vw)] text-center font-mono text-[0.7rem] uppercase tracking-[0.14em] text-muted sm:mt-4 sm:text-xs">
          {label}
        </figcaption>
      )}
    </motion.figure>
  );
}

/** Inline phone frame for hero / bento (no figure wrapper) */
export function PhoneFrame({
  src,
  alt,
  className,
  compact = true,
}: {
  src: string;
  alt: string;
  className?: string;
  compact?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  return (
    <div className={clsx("relative rounded-[1.75rem] border border-white/15 bg-[#0a0a0c] p-1.5 shadow-2xl", className)}>
      <PhoneScreen
        src={assetUrl(src)}
        alt={alt}
        failed={failed}
        onError={() => setFailed(true)}
        compact={compact}
      />
    </div>
  );
}
