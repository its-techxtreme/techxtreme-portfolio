---
name: Cyber-Precision Portfolio
colors:
  surface: '#121317'
  surface-dim: '#121317'
  surface-bright: '#38393d'
  surface-container-lowest: '#0d0e12'
  surface-container-low: '#1a1b1f'
  surface-container: '#1e1f23'
  surface-container-high: '#292a2e'
  surface-container-highest: '#343539'
  on-surface: '#e3e2e7'
  on-surface-variant: '#b9caca'
  inverse-surface: '#e3e2e7'
  inverse-on-surface: '#2f3034'
  outline: '#849495'
  outline-variant: '#3a494a'
  surface-tint: '#00dce5'
  primary: '#e9feff'
  on-primary: '#003739'
  primary-container: '#00f5ff'
  on-primary-container: '#006c71'
  inverse-primary: '#00696e'
  secondary: '#c6c6c7'
  on-secondary: '#2f3131'
  secondary-container: '#454747'
  on-secondary-container: '#b4b5b5'
  tertiary: '#fff9f0'
  on-tertiary: '#3a3000'
  tertiary-container: '#ffdb3f'
  on-tertiary-container: '#736000'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#63f7ff'
  primary-fixed-dim: '#00dce5'
  on-primary-fixed: '#002021'
  on-primary-fixed-variant: '#004f53'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#ffe16c'
  tertiary-fixed-dim: '#e7c427'
  on-tertiary-fixed: '#221b00'
  on-tertiary-fixed-variant: '#544600'
  background: '#121317'
  on-background: '#e3e2e7'
  surface-variant: '#343539'
typography:
  display-xl:
    fontFamily: Space Grotesk
    fontSize: 80px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  display-lg:
    fontFamily: Space Grotesk
    fontSize: 56px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  label-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.05em
  mono-sm:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  bento-gap: 16px
---

## Brand & Style

The design system embodies a "Futurist Precision" aesthetic, tailored for a high-end developer agency that operates at the intersection of technical excellence and avant-garde design. The core personality is hyper-focused, sophisticated, and slightly mysterious.

The visual direction blends **Minimalism** with **Glassmorphism**, using a "Dark Mode First" approach. Every element is designed to feel like a high-fidelity instrument. Key characteristics include:
- **Atmospheric Depth:** Heavy use of `#070708` as a canvas for translucent layers.
- **Grid-Centricity:** Subtle, semi-transparent background grids (1px lines) provide a sense of architectural structure.
- **High-Contrast Accents:** Vibrant cyan neon used sparingly for critical interactive paths and data visualization.
- **Bento Logic:** Information is compartmentalized into modular tiles with varying aspect ratios, creating a sense of organized complexity.

## Colors

The palette is anchored in deep darkness to allow the content to "glow."

- **Primary (Cyan Neon):** Used for focus states, primary buttons, and decorative accents. It should feel electric against the dark background.
- **Secondary (Pure White):** Reserved for high-contrast typography and iconography to ensure maximum legibility.
- **Background (#070708):** A near-black that provides more depth than pure black, allowing for subtle shadow and glow play.
- **Surface/Glass:** A series of translucent whites (2% to 8% opacity) with backdrop blurs used to create the bento grid containers.

## Typography

The typography system relies on a pairing of technical fonts. **Space Grotesk** is used for headlines to provide a geometric, slightly industrial character. Its exaggerated terminals and tabular-feeling widths emphasize the agency's technical roots.

**Geist** is utilized for body copy and UI labels. It offers a clean, developer-centric aesthetic that remains highly readable at small sizes. 

For mobile devices, `display-xl` should scale down to 48px to maintain screen integrity. All labels and technical specs should use the `mono-sm` or `label-md` roles to distinguish metadata from narrative content.

## Layout & Spacing

The layout is built on a 12-column **Bento Grid** system. 
- **Desktop:** Elements are arranged in modular blocks. Large sections use 6 or 8 columns, while supporting information uses 4 or 2 columns. 
- **The Dock:** A floating navigation element is centered at the bottom of the viewport, using a `fixed` position with a heavy backdrop blur.
- **Spacing Rhythm:** An 8px linear scale governs all padding and margins. 
- **Grid Pattern:** A repeating 32px CSS grid pattern is applied to the background with a 5% opacity stroke to reinforce the "development environment" feel.

## Elevation & Depth

This design system eschews traditional drop shadows in favor of **Tonal Layering** and **Glassmorphism**.

1.  **Level 0 (Background):** Pure `#070708` with the subtle grid pattern.
2.  **Level 1 (Bento Cards):** 4% white opacity fill with a 24px backdrop blur and a 1px solid border (10% white opacity).
3.  **Level 2 (Hover States/Modals):** 8% white opacity fill with a 40px backdrop blur. Borders may transition to the primary Cyan neon color on interaction.
4.  **Accents:** Subtle outer glows (5px-10px blur) are applied only to primary action buttons and active status indicators to simulate light emission.

## Shapes

The shape language is "Soft-Tech." While the grid is rigid, the containers are slightly softened to feel premium and polished.

- **Bento Tiles:** Use `rounded-lg` (1rem) for all main containers to create a modern, iOS-adjacent feel.
- **Buttons & Inputs:** Use `rounded-md` (0.5rem) for a more precise, tool-like appearance.
- **Dock Navigation:** Fully pill-shaped (rounded-full) to distinguish it as a floating utility separate from the content grid.

## Components

### Buttons
- **Primary:** Solid Cyan Neon fill with black text. No shadow, but a subtle "bloom" glow on hover.
- **Secondary (Ghost):** 1px white border (20% opacity) with white text. Fills to 10% white on hover.

### Bento Cards
- Standard containers for all portfolio pieces and stats. 
- Must include a `1px` inner border to catch "light" from the background blurs.
- Content inside cards should follow a consistent 32px internal padding.

### Floating Dock
- Positioned `bottom: 32px`. 
- High backdrop blur (blur-xl).
- Icons should be minimal line-art (2px stroke) in white, turning Cyan on active state.

### Input Fields
- Underlined style or subtle glass-filled boxes. 
- Focus state triggers a Cyan bottom-border and a subtle vertical "scanline" animation or glow.

### Lists
- Technical lists (e.g., tech stacks) should use `mono-sm` typography and be separated by `1px` horizontal lines with 5% opacity.