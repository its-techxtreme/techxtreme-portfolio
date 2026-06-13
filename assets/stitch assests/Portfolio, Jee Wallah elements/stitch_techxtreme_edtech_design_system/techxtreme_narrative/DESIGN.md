---
name: Techxtreme Narrative
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
typography:
  display-lg:
    fontFamily: Space Grotesk
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  code-sm:
    fontFamily: jetbrainsMono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: '1.5'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  grid-size: 64px
  base-unit: 8px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
---

## Brand & Style

The design system is engineered for a high-precision remote digital studio, blending technical rigor with avant-garde aesthetics. The visual language is inspired by the "Linear" and "Vercel" schools of thought—minimalist, high-performance, and meticulously polished. 

The aesthetic is rooted in **Glassmorphism** and **Modern Corporate** styles. It utilizes deep obsidian backgrounds contrasted with vibrant neon accents to evoke a sense of late-night productivity and cutting-edge innovation. The presence of subtle grid lines and ambient orbs adds a layer of spatial depth, suggesting a workspace that is both structured and limitless. The emotional response is one of trust, speed, and elite craftsmanship.

## Colors

The palette is anchored by a deep obsidian background (`#070708`), creating a canvas where light and color feel intentional. 

- **Primary (Electric Cyan):** Used for primary actions, progress indicators, and focal points.
- **Secondary (Violet):** Used for creative highlights and to provide depth in gradients.
- **Tertiary (Lime):** Reserved for success states, specialized tags, or high-energy callouts.
- **Surface Strategy:** Backgrounds are purely black or near-black. Components utilize a semi-transparent white fill (4–8%) to create a "glass" effect, allowing background orbs to bleed through subtly.

## Typography

This design system employs a dual-font strategy. **Space Grotesk** handles all display and headline roles; its geometric and slightly quirky terminals reinforce the technical nature of the studio. For body copy and interface labels, **Manrope** provides a refined, legible, and balanced experience.

Headlines should use tight letter-spacing to appear more impactful, while labels utilize uppercase styling and increased tracking for a systematic, professional feel. Monospaced elements (JetBrains Mono) are used sparingly for data and technical identifiers.

## Layout & Spacing

The layout is governed by a **fixed 64px grid system**. Visible but subtle grid lines (1px width, 5% opacity white) should be used as background textures in marketing sections to emphasize precision.

- **Grid:** A 12-column layout on desktop with 24px gutters.
- **Rhythm:** Spacing between elements follows an 8px scale (8, 16, 24, 32, 48, 64, 80, 128).
- **Adaptation:** On mobile, margins shrink to 20px, and the grid collapses to a 4-column structure. Spacing units remain consistent, but larger vertical gaps are reduced by one step on the scale.

## Elevation & Depth

Depth is not communicated through traditional shadows, but through **transparency and blur**. 

1.  **Backdrop Blur:** All container elements must use a 24px backdrop blur.
2.  **Borders:** Use a 1px solid border (`rgba(255, 255, 255, 0.1)`) on all glass containers to define edges against the dark background.
3.  **Ambient Orbs:** Large, soft-edged radial gradients in Cyan, Violet, or Lime are placed deep in the background layer. They should have an opacity between 10-20% and a blur radius exceeding 100px.
4.  **Layering:** Active elements (like modals or hovered cards) increase their fill opacity from 6% to 10% rather than increasing shadow size.

## Shapes

The design system uses a **Rounded** shape language to soften the "hard tech" feel of the typography and grid.

- **Standard Elements:** 0.5rem (8px) corner radius for buttons, inputs, and small cards.
- **Large Containers:** 1rem (16px) corner radius for main content sections and large glass cards.
- **Pills:** Full rounding is reserved exclusively for tags, status chips, and specific toggle switches.

## Components

- **Buttons:** Primary buttons use a solid Electric Cyan fill with black text for maximum contrast. Secondary buttons are glassmorphic with a 1px border and white text.
- **Input Fields:** Minimalist design with a 1px bottom border by default; transitions to a full glassmorphic box with a cyan border on focus.
- **Cards:** Glass surfaces with 24px blur. Content within cards should follow the 64px grid alignment.
- **Chips/Tags:** Small, pill-shaped elements. Use subtle background tints based on the accent colors (e.g., 10% Cyan fill with 100% Cyan text).
- **Progress Bars:** Thin 4px lines. The track is `rgba(255, 255, 255, 0.1)` and the indicator is a vibrant gradient from Cyan to Violet.
- **Grid Lines:** Background-level components that span the full viewport width and height, rendered in `rgba(255, 255, 255, 0.03)`.