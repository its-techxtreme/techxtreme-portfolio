---
name: Techxtreme Precision
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
  electric-cyan: '#22d3ee'
  secondary-violet: '#a78bfa'
  lime-status: '#a3e635'
  glass-stroke: rgba(255, 255, 255, 0.08)
  glass-fill: rgba(255, 255, 255, 0.04)
typography:
  headline-xl:
    fontFamily: Space Grotesk
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-xl-mobile:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.04em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.02em
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.1em
  mono-technical:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: -0.01em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  grid-unit: 64px
  gutter: 24px
  margin-desktop: 80px
  margin-mobile: 20px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

This design system is built for a high-end digital studio, focusing on the intersection of technical precision and avant-garde aesthetics. It draws heavy inspiration from the "Linear-style" ecosystem—characterized by high-fidelity details, deep dark modes, and subtle motion. The brand personality is elite, innovative, and uncompromisingly modern.

The visual style is a sophisticated blend of **High-End Glassmorphism** and **Technical Minimalism**. It utilizes mathematical layout structures (grid lines) paired with organic atmospheric elements (ambient orbs) to create a space that feels both engineered and atmospheric. Every element must feel intentional, with sharp borders and expansive negative space to evoke a sense of premium craftsmanship found in Awwwards-tier digital experiences.

## Colors

The palette is rooted in a "near-black" canvas (#070708), providing a deep, ink-like depth that allows vibrant accents to pop without causing visual fatigue. 

- **Primary (Electric Cyan):** Used for primary actions, critical focus states, and key data visualizations.
- **Secondary (Secondary Violet):** Utilized for depth, secondary interactive elements, and ambient background accents.
- **Status (Lime):** Reserved strictly for "Success" states, active indicators, or highlighting growth/positive metrics.
- **Background Strategy:** Backgrounds are not flat; they are enhanced by "Ambient Orbs"—large, extremely blurred gradients of Cyan and Violet that sit behind the UI layers to provide a sense of three-dimensional space.

## Typography

Typography in this design system is used to create a clear hierarchy between "Editorial" and "Functional" content.

- **Space Grotesk (Headlines):** Must always be set with tight tracking (-0.04em for large sizes) to create a dense, modern aesthetic. It is the voice of the brand’s authority.
- **Manrope (Body):** Chosen for its high legibility and neutral, friendly tone. It handles all long-form content and user-generated text.
- **Labeling:** Small labels and metadata should use Space Grotesk in uppercase with increased letter spacing to lean into the technical, "engineered" look.

## Layout & Spacing

The layout is governed by a **Mathematical Fixed Grid**. A visible 64px structural grid is rendered at 5% white opacity in the background, serving as the blueprint for all component alignment.

- **Desktop:** 12-column grid with a maximum content width of 1440px. Components should snap to the 64px grid lines where possible.
- **Mobile:** 4-column fluid grid. The 64px grid lines remain but may act more as a decorative texture than a strict alignment guide.
- **Rhythm:** Vertical spacing follows a strict 8px baseline to ensure consistency across the technical interface.

## Elevation & Depth

Depth is achieved through **Glassmorphism** rather than traditional shadows. This creates a "multi-layered glass" effect.

1.  **Surfaces:** All containers use a 4% to 8% white fill (depending on importance).
2.  **Backdrop:** A mandatory 24px backdrop blur (`backdrop-filter: blur(24px)`) is applied to all floating surfaces to maintain legibility over the ambient background orbs.
3.  **Borders:** Every glass element must have a 1px solid border at 8% white opacity. This creates the "sharp" technical edge required for this aesthetic.
4.  **Z-Index Layers:** Hierarchy is indicated by border brightness—higher elements in the stack may use slightly more opaque borders (up to 12% white).

## Shapes

The shape language is "Soft-Precise." While the grid is rigid, the elements themselves use moderate rounding to appear modern and approachable. 

- **Base Radius:** 0.5rem (8px) for standard components like buttons and inputs.
- **Large Radius:** 1.5rem (24px) for major sections and card containers to emphasize the glass panels.
- **Strictness:** Avoid pill-shaped buttons unless used for secondary tags/chips; standard interaction points should feel more structured.

## Components

- **Buttons:** Primary buttons use a solid Cyan-to-Violet gradient or solid Cyan with black text. Secondary buttons are "Glass" style: transparent fill, 1px white (8%) border, and 24px backdrop blur.
- **Inputs:** Darker than the canvas (#000000) with a 1px glass border. On focus, the border transitions to Electric Cyan with a subtle outer glow (0px 0px 8px rgba(34, 211, 238, 0.3)).
- **Cards:** Large glass panels. They must include the 1px border and 24px blur. Content inside cards should be padded by at least 32px to maintain a "premium" feel.
- **Chips/Status:** Use the Lime color for "Active" or "Online" indicators. These should be small, bold, and use Space Grotesk.
- **Grid Lines:** A decorative component where thin 1px lines (5% white) extend horizontally or vertically across the entire viewport to divide major sections.
- **Ambient Orbs:** Background elements. Large radial gradients (e.g., 600px wide) with 150px blur, positioned off-center to break the symmetry of the grid.