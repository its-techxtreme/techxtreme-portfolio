---
name: Kinetic Precision
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
  tertiary: '#adf140'
  on-tertiary: '#213600'
  tertiary-container: '#93d420'
  on-tertiary-container: '#395800'
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
  tertiary-fixed: '#b2f746'
  tertiary-fixed-dim: '#98da27'
  on-tertiary-fixed: '#121f00'
  on-tertiary-fixed-variant: '#334f00'
  background: '#131314'
  on-background: '#e5e2e3'
  surface-variant: '#353436'
  canvas: '#070708'
  surface-stroke: rgba(255, 255, 255, 0.08)
  surface-fill: rgba(255, 255, 255, 0.04)
  grid-line: rgba(255, 255, 255, 0.05)
  text-primary: '#FFFFFF'
  text-secondary: '#8B93A1'
typography:
  headline-xl:
    fontFamily: spaceGrotesk
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: spaceGrotesk
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.04em
  headline-lg-mobile:
    fontFamily: spaceGrotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.04em
  headline-md:
    fontFamily: spaceGrotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.02em
  body-lg:
    fontFamily: manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  body-md:
    fontFamily: manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  label-md:
    fontFamily: manrope
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.02em
  label-sm:
    fontFamily: manrope
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  gap-xs: 8px
  gap-sm: 16px
  gap-md: 24px
  gap-lg: 48px
  margin-mobile: 20px
  margin-desktop: 80px
  max-width: 1280px
---

## Brand & Style

This design system embodies a high-performance, developer-centric aesthetic tailored for a remote digital studio. The brand personality is technical, ambitious, and meticulously polished, drawing heavy inspiration from the "Software 2.0" movement characterized by dark canvases and high-contrast accents.

The design style is a refined **Glassmorphism**, emphasizing structural clarity and depth through semi-transparent layers rather than heavy skeuomorphism. It utilizes a sophisticated interplay of frosted surfaces, precision linework, and ambient light orbs to create an environment that feels both expansive and focused. The visual narrative rejects generic imagery in favor of generative patterns, subtle grids, and sharp typography to signal professional-grade tooling and high-precision execution.

## Colors

The palette is anchored by a deep, near-black canvas (`#070708`) that provides maximum contrast for its electric accents. 

- **Primary (Electric Cyan):** Used for primary actions, progress indicators, and focal points.
- **Secondary (Violet):** Used for supplemental branding elements and interactive states.
- **Tertiary (Lime):** Reserved strictly for success states, status indicators, and positive growth metrics.
- **Neutral:** A range of low-opacity whites and greys are used to build the glass layers and functional UI borders.

The background should feature large, extremely soft-focus ambient orbs of Cyan and Violet at 10-15% opacity, positioned at the edges of the viewport to create a sense of depth without distracting from content. A 64px square grid overlay at 5% opacity must be present across the base canvas to reinforce the studio's technical precision.

## Typography

The typographic hierarchy relies on the tension between the geometric, technical character of **Space Grotesk** and the neutral, highly legible **Manrope**.

- **Headlines:** Must always use Space Grotesk with tight tracking (`-0.04em` for large displays) to evoke a modern, high-tech editorial feel.
- **Body & Labels:** Manrope provides a professional, approachable balance. 
- **Scale:** On mobile, headlines should aggressively scale down to maintain layout integrity while preserving the tight letter spacing that defines the brand.

## Layout & Spacing

The layout utilizes a **fixed grid** approach for desktop content, centered with a maximum width of 1280px to ensure optimal line lengths and readability. 

- **Grid Model:** A 12-column system on desktop, 8-column on tablet, and 4-column on mobile.
- **Rhythm:** An 8px linear scale (4, 8, 16, 24, 32, 48, 64) ensures consistent vertical rhythm.
- **Safe Areas:** Large 80px side margins on desktop create an "island" effect for content, reinforcing the premium studio feel. On mobile, margins reduce to 20px.

## Elevation & Depth

This system avoids traditional shadows in favor of **Glassmorphism and Tonal Layers**. 

- **Surfaces:** Use a 4-8% white fill with a 24px backdrop blur. This allows the background ambient orbs to bleed through subtly, creating a dynamic sense of place.
- **Borders:** Every glass surface must have a 1px solid border (`rgba(255, 255, 255, 0.08)`). This "ghost border" provides definition against the dark canvas.
- **Layering:** Higher elevation components (like modals) should increase the fill to 10% and the blur to 40px to visually advance toward the user.

## Shapes

The shape language is "Soft" (`0.25rem` base), leaning into a disciplined, engineering-inspired look. 

- **Base Radius:** 4px for small components like inputs and buttons.
- **Container Radius:** 8px for cards and sections (`rounded-lg`).
- **Accent Shapes:** Use 1px thick lines and small, unfilled geometric shapes (circles, squares) as decorative "data points" in the UI to reinforce the studio's precision.

## Components

- **Buttons:** Primary buttons use a solid Electric Cyan fill with black text for maximum contrast. Secondary buttons use the glass style (blur + border) with Cyan text.
- **Inputs:** Darker than the canvas (`#000000`) with a 1px border. Focus states trigger a 1px Electric Cyan glow.
- **Cards:** Utilize the standard glass fill and 24px blur. Cards should not have shadows; their depth is defined by the backdrop blur and the contrast of the 1px border.
- **Chips/Status:** Lime (`#a3e635`) is reserved for "Active" or "Complete" states. Use a 10% opacity fill of the status color with a 100% opacity text color for a modern, legible look.
- **Glass Navigation:** The header should be a sticky glass bar with a `1px` bottom border and `24px` blur, creating a seamless transition as content scrolls beneath it.