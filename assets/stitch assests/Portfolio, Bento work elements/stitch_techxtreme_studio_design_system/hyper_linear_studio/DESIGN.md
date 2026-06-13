---
name: Hyper-Linear Studio
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
  violet-accent: '#a78bfa'
  lime-status: '#a3e635'
  glass-border: rgba(255, 255, 255, 0.08)
  glass-fill: rgba(255, 255, 255, 0.04)
typography:
  headline-xl:
    fontFamily: Space Grotesk
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
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
    lineHeight: '1.6'
    letterSpacing: 0em
  label-md:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  grid-size: 64px
---

## Brand & Style
The design system is engineered for a high-fidelity digital studio aesthetic, drawing inspiration from the "Linear-style" precision of 2024-2026 design trends. It prioritizes technical excellence, dark-mode specialization, and professional polish.

The style is defined by **Glassmorphism** and **Cyber-Minimalism**. It utilizes deep, near-black surfaces contrasted with hyper-saturated electric accents. The brand personality is forward-looking, innovative, and highly structured, evoking the feeling of a sophisticated developer tool or a premium creative agency. Visuals rely on abstract geometry, ambient light orbs, and architectural grid systems rather than traditional photography.

## Colors
This design system is natively dark-mode. The foundation is a "True Deep" canvas (`#070708`).

- **Primary (Electric Cyan):** Used for primary actions, active states, and focus indicators. 
- **Secondary (Violet):** Used for decorative accents, gradients, and secondary brand moments.
- **Tertiary (Lime):** Reserved strictly for success states and status indicators to ensure high-visibility functional cues.
- **Surface Strategy:** Backgrounds utilize subtle cyan/violet ambient orbs (low opacity, massive blur) to prevent the dark mode from feeling flat. A global 64px grid at 5% opacity provides a structural skeleton for the interface.

## Typography
Typography is a juxtaposition between technical geometry and modern legibility.

**Space Grotesk** is used for all headlines. It must always be set with tight tracking (-0.04em) to achieve the desired high-fidelity look. This creates a rhythmic, compact appearance that feels engineered.

**Manrope** provides the balance as the body typeface. It is chosen for its refined, neutral characteristics that ensure long-form readability without distracting from the headline personality. 

Maintain ample line height (1.6x) for body text to ensure clarity against dark backgrounds and frosted glass textures.

## Layout & Spacing
The layout follows a **Fixed-Fluid Hybrid** model. Large containers adhere to a 12-column grid on desktop, while inner elements utilize a strict 4px/8px modular scale.

- **Grid Alignment:** All primary sections should align with the 64px background grid lines.
- **Desktop:** 12 columns, 24px gutters, 64px side margins.
- **Mobile:** 4 columns, 16px gutters, 16px side margins.
- **Section Spacing:** Use large vertical gaps (128px - 192px) between major content blocks to emphasize the minimalist, "Vercel-like" polish.

## Elevation & Depth
Depth is created through **Atmospheric Refraction** rather than traditional shadows.

1.  **Surfaces:** Elements use a white fill between 4% and 8% opacity. This semi-transparency allows the background ambient orbs and grid lines to peak through.
2.  **Borders:** Every glass container must have a 1px solid border (`rgba(255, 255, 255, 0.08)`). This provides "edge-lighting" that defines the shape against the dark canvas.
3.  **Blur:** A consistent 24px backdrop-blur is applied to all elevated surfaces to simulate frosted glass.
4.  **Interactive States:** On hover, the white fill opacity should increase slightly (to 12%) and the border color should transition toward the Primary Cyan.

## Shapes
The shape language is "Soft-Tech." While the brand is geometric and precise, it avoids harsh 0px corners to maintain a premium, approachable feel.

- **Standard Elements:** Buttons, inputs, and small cards use a 0.5rem (8px) radius.
- **Large Containers:** Hero sections or main glass cards use a 1rem (16px) or 1.5rem (24px) radius to create a distinct framing effect.
- **Pill Elements:** Tags and Status Chips are fully rounded (pill-shaped) to distinguish them from structural UI components.

## Components

- **Buttons:** Primary buttons use a solid Electric Cyan fill with black text. Secondary buttons use the glass style (8% fill, 1px white border) with cyan text.
- **Input Fields:** Styled as glass containers with a 4% fill. On focus, the border transitions to 1px solid Electric Cyan and adds a subtle 10px outer glow in the same color.
- **Chips:** Small, pill-shaped with a violet-tinted border (`rgba(167, 139, 250, 0.2)`) and label-sm typography.
- **Cards:** The signature component. 24px backdrop blur, 8% fill, 1px border. Cards should not have shadows; their "depth" is defined solely by the border light and the blur intensity.
- **Status Indicators:** Use the Lime color strictly for "Online," "Success," or "Active" signals.
- **Lists:** Clean, horizontal dividers using the 1px `rgba(255, 255, 255, 0.08)` border. High contrast between primary Manrope text and secondary metadata in lower opacity.