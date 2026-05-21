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
    <Reveal className="mt-12">
      <h2 className="font-display text-xl font-bold sm:text-2xl">{title}</h2>
      <p className="mt-2 max-w-xl text-sm text-muted sm:text-base">
        Product screens captured in device frames — the same views users see in the shipped app experience.
      </p>
      <div className="relative -mx-4 mt-8 sm:mx-0 sm:mt-10">
        <div
          className="pointer-events-none absolute -left-20 top-1/2 hidden h-64 w-64 -translate-y-1/2 rounded-full bg-orange-500/10 blur-[80px] sm:block"
          aria-hidden
        />
        <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-4 sm:justify-center sm:gap-10 md:gap-12 lg:justify-between lg:overflow-visible lg:px-0">
          {screens.map((s, i) => (
            <div key={s.label} className="shrink-0 snap-center first:pl-0 last:pr-4 sm:last:pr-0">
              <PhoneMockup
                src={s.src}
                alt={s.label}
                label={s.label}
                size={i === 1 ? "lg" : "md"}
              />
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
