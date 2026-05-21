/** Rolling subject/skill strip — inspired by Stitch stats marquee (portfolio use only) */
const JEE_SKILLS = [
  "Physics",
  "Chemistry",
  "Mathematics",
  "JEE Mains",
  "JEE Advanced",
  "Organic Chemistry",
  "Calculus",
  "Mechanics",
  "Firebase",
  "Premium Notes",
  "Mock Tests",
] as const;

export function SkillsMarquee({ className = "" }: { className?: string }) {
  const items = [...JEE_SKILLS, ...JEE_SKILLS];

  return (
    <div
      className={`overflow-hidden rounded-2xl border border-orange-500/20 bg-gradient-to-r from-[#1c1410]/80 to-bg-2/80 py-4 ${className}`}
    >
      <div className="flex w-max animate-marquee" style={{ animationDuration: "32s" }}>
        {items.map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="flex items-center whitespace-nowrap px-5 font-display text-xs font-semibold uppercase tracking-[0.18em] text-orange-400/90 md:text-sm"
          >
            {t}
            <span className="mx-5 text-orange-500/60" aria-hidden>
              ◆
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
