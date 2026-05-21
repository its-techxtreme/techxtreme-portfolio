import { TECH_MARQUEE } from "../../lib/constants";

export function Marquee() {
  const items = [...TECH_MARQUEE, ...TECH_MARQUEE];
  return (
    <div className="relative z-10 overflow-hidden border-y border-line bg-bg-2 py-5" aria-hidden>
      <div className="flex w-max animate-marquee">
        {items.map((t, i) => (
          <span key={`${t}-${i}`} className="flex items-center whitespace-nowrap pr-12 font-display text-lg font-semibold text-muted">
            {t}
            <span className="ml-12 text-accent">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
