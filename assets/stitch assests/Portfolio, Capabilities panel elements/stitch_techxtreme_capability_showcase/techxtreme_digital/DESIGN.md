---
name: Techxtreme Digital
colors:
  surface: '#131314'
  surface-dim: '#131314'
  surface-bright: '#3a393a'
  surface-container-lowest: '#0e0e0f'
  surface-container-low: '#1c1b1d'
  surface-container: '#201f21'
  surface-container-high: '#2a2a2b'
  surface-container-highest: '#353436'
  on-surface: '#e5e2e3'
  on-surface-variant: '#bbc9cd'
  inverse-surface: '#e5e2e3'
  inverse-on-surface: '#313031'
  outline: '#859397'
  outline-variant: '#3c494c'
  surface-tint: '#2fd9f4'
  primary: '#8aebff'
  on-primary: '#00363e'
  primary-container: '#22d3ee'
  on-primary-container: '#005763'
  inverse-primary: '#006877'
  secondary: '#cebdff'
  on-secondary: '#381385'
  secondary-container: '#4f319c'
  on-secondary-container: '#bea8ff'
  tertiary: '#ffd6a3'
  on-tertiary: '#462b00'
  tertiary-container: '#ffb13b'
  on-tertiary-container: '#6e4600'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#a2eeff'
  primary-fixed-dim: '#2fd9f4'
  on-primary-fixed: '#001f25'
  on-primary-fixed-variant: '#004e5a'
  secondary-fixed: '#e8ddff'
  secondary-fixed-dim: '#cebdff'
  on-secondary-fixed: '#21005e'
  on-secondary-fixed-variant: '#4f319c'
  tertiary-fixed: '#ffddb5'
  tertiary-fixed-dim: '#ffb957'
  on-tertiary-fixed: '#2a1800'
  on-tertiary-fixed-variant: '#643f00'
  background: '#131314'
  on-background: '#e5e2e3'
  surface-variant: '#353436'
  status-lime: '#a3e635'
  border-glass: rgba(255, 255, 255, 0.08)
  fill-glass: rgba(255, 255, 255, 0.04)
  grid-line: rgba(255, 255, 255, 0.05)
typography:
  headline-xl:
    fontFamily: Space Grotesk
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.03em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.02em
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: -0.01em
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  body-sm:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: '0'
  label-mono:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.05em
  headline-xl-mobile:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  grid-unit: 64px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
---

## Brand & Style

The design system is engineered for a high-precision digital studio, blending the technical rigor of developer-centric tools with the editorial polish of award-winning creative agencies. The brand personality is "Advanced, Precise, and Hyper-functional." It targets sophisticated tech founders and engineering-led organizations who value speed and craft.

The aesthetic follows a **High-Contrast Tech-Minimalism** style. It utilizes deep canvas layers, precision-engineered borders, and "Glassmorphic" overlays. The interface should feel like a premium command center: dark, immersive, and strictly organized. Visual interest is generated through light—specifically ambient blurs and hairline strokes—rather than heavy textures or illustrative stock imagery.

## Colors

The palette is anchored in a "True Dark" ecosystem. The canvas uses `#070708` as its base to provide maximum contrast for technical accents.

- **Primary (Electric Cyan):** Used sparingly for primary actions, active states, and critical technical indicators. It represents "Active Power."
- **Secondary (Violet):** Used for supporting accents and subtle secondary highlights, providing a sophisticated depth that avoids typical tech-blue clichés.
- **Status (Lime):** Reserved exclusively for "Success," "Online," or "Completed" states.
- **Atmospheric Elements:** Use soft, highly diffused ambient orbs of Cyan and Violet in the background (15-20% opacity) to prevent the dark interface from feeling "flat."

## Typography

The typography strategy relies on the tension between the geometric, technical character of **Space Grotesk** and the refined, legible humanist traits of **Manrope**.

Headlines must always be tightly tracked (`-0.04em`) to create a "locked" architectural feel. Body text uses Manrope for its high readability in dense data contexts. Use the `label-mono` style for metadata, technical specs, and small UI tags to reinforce the "studio" aesthetic.

## Layout & Spacing

The design system utilizes a **Fixed Grid Overlay** model. A visible 64px square grid at 5% opacity should be persistent across large canvas areas to guide the eye and reinforce the "Precision Studio" concept.

- **Desktop:** 12-column grid with a maximum content width of 1440px. Gutters are fixed at 24px.
- **Mobile:** 4-column fluid grid with 16px margins.
- **Rhythm:** All spacing (padding, margins) must be increments of the 8px base unit. Component height should align strictly to the 64px grid lines where possible.

## Elevation & Depth

Depth is achieved through **Optical Glassmorphism** rather than traditional drop shadows. 

1.  **The Canvas:** Deepest layer, `#070708` with the 64px grid.
2.  **Glass Layers:** Components (cards, modals) use a 4% white fill with a `24px` backdrop blur. 
3.  **The Stroke:** Every elevated element must have a `1px` solid border using `rgba(255,255,255,0.08)`. This creates the "Linear" precision look.
4.  **Light Sources:** Use a subtle top-down linear gradient (White at 5% to Transparent) on borders to simulate a faint overhead light hitting the edge of the "glass."

## Shapes

The shape language is "Soft-Technical." We avoid sharp 0px corners to maintain a premium feel, but we avoid large "bubbly" radii to keep the tech-forward tone. 

- **Standard Radius:** 4px (0.25rem) for inputs and small buttons.
- **Large Radius:** 8px (0.5rem) for cards and containers.
- **Interactive Elements:** Maintain consistent corner radii across nested elements to ensure "inner radius = outer radius - padding" logic is visually harmonized.

## Components

- **Buttons:** Primary buttons use a solid Electric Cyan background with black text. Secondary buttons use the Glassmorphic style (4% fill, 1px border) with white text. No gradients.
- **Input Fields:** Dark background (blacker than the canvas), 1px border. On focus, the border transitions to Electric Cyan with a subtle 2px outer glow.
- **Cards:** Utilize the Glassmorphic stack (Blur + Stroke + Subtle Fill). Content should be padded by 24px. Header sections within cards should be separated by a 1px border line.
- **Chips/Status:** Small, pill-shaped but with only 4px radius. Use the Lime status color for positive indicators.
- **Lists:** Rows separated by 1px horizontal strokes at 5% opacity. Hover states should trigger a 2% white surface highlight.
- **Data Display:** Use a "Monospace-lite" treatment for numbers using Manrope Medium to ensure tabular alignment and a technical feel.