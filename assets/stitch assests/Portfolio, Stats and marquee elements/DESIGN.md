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
  canvas-black: '#070708'
  electric-cyan: '#22d3ee'
  studio-violet: '#a78bfa'
  status-lime: '#a3e635'
  glass-fill: rgba(255, 255, 255, 0.06)
  glass-border: rgba(255, 255, 255, 0.08)
  grid-line: rgba(255, 255, 255, 0.05)
typography:
  display-xl:
    fontFamily: Space Grotesk
    fontSize: 80px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.04em
  headline-md:
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
    letterSpacing: 0em
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: 0em
  label-sm:
    fontFamily: Manrope
    fontSize: 13px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.05em
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
  margin-mobile: 24px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style
The design system embodies a "Remote Precision" narrative, blending high-performance engineering aesthetics with futuristic marketing polish. It targets high-end enterprise clients and tech-forward startups seeking a digital studio that operates at the cutting edge of the 2024–2026 design zeitgeist.

The visual style is **High-Fidelity Glassmorphism** set against a "Infinite Void" canvas. It leverages deep space blacks, vibrant neon accents, and sophisticated light refraction to create a sense of depth and technical mastery. The mood is sharp, clinical, and premium, prioritizing clarity of motion and structural integrity over decorative clutter.

## Colors
The palette is anchored by a near-black `#070708` canvas. **Electric Cyan** acts as the primary action color, signifying interactivity and energy. **Secondary Violet** is used for depth and secondary branding elements, while **Lime Status** is reserved for high-visibility success states and "live" indicators.

Backgrounds should feature 64px fixed grid lines at 5% opacity. Strategically place large, soft-blurred ambient orbs (300-600px radius, 10-20% opacity) in Cyan and Violet behind content layers to provide a sense of atmospheric depth.

## Typography
The typography strategy creates a high-contrast hierarchy. **Space Grotesk** is used for all headlines with tight tracking (-0.04em) and heavy weights to achieve a "brutalist-modern" look. **Manrope** provides a highly legible, neutral counterpoint for body copy and UI labels.

Large display text should always be set in bold Space Grotesk. For interactive labels and small metadata, use Manrope SemiBold with slight letter spacing to ensure readability against dark, blurred backgrounds.

## Layout & Spacing
This design system utilizes a **Fixed Grid** philosophy built on a 64px module. All major layout sections should align their vertical boundaries to the 64px grid lines.

- **Desktop:** 12-column grid, 24px gutters, 80px side margins.
- **Tablet:** 8-column grid, 20px gutters, 40px side margins.
- **Mobile:** 4-column grid, 16px gutters, 24px side margins.

Spacing between components should be strictly mathematical (multiples of 8px). Vertical "stack" spacing between sections should use 128px or 192px to maintain the minimal, spacious aesthetic common in award-winning digital studio portfolios.

## Elevation & Depth
Depth is achieved through **Glassmorphism** rather than traditional shadows. 
- **Surfaces:** Use a 4-8% white fill (`rgba(255, 255, 255, 0.06)`) with a 24px backdrop blur.
- **Borders:** Every elevated element must have a 1px solid border at 8% white opacity. For primary elements, the top and left borders can slightly increase to 12% opacity to simulate a subtle light source.
- **Interaction:** Upon hover, the backdrop blur should increase to 32px and the white fill to 10% to "pull" the element toward the user.

## Shapes
Shapes are "Soft-Geometric." A base roundedness of **0.5rem (8px)** is used for standard components (inputs, buttons). Larger container cards and glass sections use **1rem (16px)** to feel more integrated and premium.

Avoid fully circular pills for buttons; keep them strictly within the `rounded-lg` or `rounded-xl` range to maintain the architectural, sharp-edged feel of the studio brand.

## Components
- **Buttons:** Primary buttons use a solid Electric Cyan fill with black text. Secondary buttons use the glass style (blur + border) with Cyan text.
- **Inputs:** Dark `#000000` backgrounds with a 1px `glass-border`. On focus, the border transitions to a 1px Electric Cyan stroke with a subtle 4px Cyan outer glow.
- **Cards:** The signature component. 24px padding, 16px border-radius, 24px backdrop-blur. No shadows. Content must be perfectly aligned to an internal 8px sub-grid.
- **Chips/Status:** Use the Lime Status color for "Available" or "Live" indicators, paired with a subtle breathing pulse animation (scale 1.0 to 1.1).
- **Lists:** Separated by 1px `grid-line` dividers. Hover states should trigger a subtle 4% white background highlight.
- **Visuals:** Strictly no stock photography. Use high-quality 3D renders, abstract geometric wireframes, or code-based generative art that complements the Cyan/Violet ambient orbs.