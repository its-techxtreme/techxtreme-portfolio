import { PhoneMockup } from "../ui/PhoneMockup";
import { Reveal } from "../ui/Reveal";

export type MobileScreen = { src: string; label: string };

export function MobileScreenshots({
  screens,
  title = "Mobile UI screenshots",
}: {
  screens: MobileScreen[];
  title?: string;
}) {
  return (
    <Reveal className="mt-10 sm:mt-12">
      <h2 className="font-display text-xl font-bold sm:text-2xl">{title}</h2>
      <p className="mt-2 max-w-xl text-sm text-muted sm:text-base">
        Product screens captured in device frames — the same views users see in the shipped app experience.
      </p>
      <div className="relative mt-6 sm:mt-8">
        <div
          className="pointer-events-none absolute -left-20 top-1/2 hidden h-64 w-64 -translate-y-1/2 rounded-full bg-orange-500/10 blur-[80px] md:block"
          aria-hidden
        />
        <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-6 sm:px-0 md:gap-8 [&::-webkit-scrollbar]:hidden">
          {screens.map((s, i) => (
            <div key={s.label} className="shrink-0 snap-center">
              <PhoneMockup
                src={s.src}
                alt={s.label}
                label={s.label}
                size={i === 1 ? "lg" : "md"}
              />
            </div>
          ))}
        </div>
        <p className="mt-3 text-center font-mono text-[0.65rem] uppercase tracking-widest text-muted lg:hidden">
          Swipe to view all screens
        </p>
      </div>
    </Reveal>
  );
}
