import { PANEL_GRAPHICS } from "../../lib/panelGraphics";
import { ButtonLink } from "../ui/Button";
import { ParallaxCapsule } from "../ui/ParallaxCapsule";
import { Reveal } from "../ui/Reveal";

export function CtaBand() {
  return (
    <Reveal className="relative z-10 mx-4 mb-20 sm:mx-6 md:mx-12 md:mb-24">
      <ParallaxCapsule
        image={PANEL_GRAPHICS.cta}
        className="px-6 py-14 text-center sm:px-8 md:py-20"
      >
        <h2 className="font-display text-[clamp(1.75rem,5vw,3.5rem)] font-bold leading-tight">
          Ready to ship something <span className="text-gradient">serious</span>?
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm font-medium sm:text-base">
          Limited capacity — replying within 24 hours to serious inquiries.
        </p>
        <div className="mt-8">
          <ButtonLink to="/contact">Start your project →</ButtonLink>
        </div>
      </ParallaxCapsule>
    </Reveal>
  );
}
