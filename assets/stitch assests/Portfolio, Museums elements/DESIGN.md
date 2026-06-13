---
name: Techxtreme Studio
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
  violet: '#a78bfa'
  lime: '#a3e635'
  glass-fill: rgba(255, 255, 255, 0.06)
  glass-border: rgba(255, 255, 255, 0.08)
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
    letterSpacing: -0.03em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
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
  body-sm:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: 0.01em
  label-caps:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.1em
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

This design system is built for a high-end digital studio that prioritizes precision, technical mastery, and forward-thinking aesthetics. It draws heavily from **Glassmorphism** and **Modern Corporate** styles, specifically the "Developer-Experience" aesthetic characterized by deep canvases and ethereal light play.

The mood is one of quiet authority and extreme polish—evoking the feeling of a sophisticated command center. The visual language relies on structural grid systems and translucent surfaces rather than heavy textures or stock photography, ensuring a clean, high-performance interface.

## Colors

The palette is anchored by a near-black **#070708 canvas**, providing a void-like depth for luminous accents. **Electric Cyan** serves as the primary action color, suggesting energy and connectivity. **Secondary Violet** is used for depth and softening, while **Lime Status** provides high-visibility cues for progress and "live" states.

Ambient depth is achieved through large, ultra-soft "orbs" of cyan and violet blurred behind the glass layers. These should have a maximum opacity of 15% to maintain legibility while adding a premium, atmospheric glow.

## Typography

The typographic system contrasts the technical, geometric personality of **Space Grotesk** with the balanced readability of **Manrope**.

**Space Grotesk** is reserved for headlines. It must be set with tight tracking (negative letter spacing) to achieve the aggressive, modern "marketing" look typical of high-end SaaS brands.

**Manrope** handles all functional and long-form text, ensuring the interface remains grounded and professional. All labels should lean towards semi-bold weights to maintain contrast against the dark backgrounds.

## Layout & Spacing

This design system employs a structural **64px grid** visible as low-opacity (5%) lines. This grid acts as the foundation for all component alignment, creating a sense of engineering precision.

The layout is a **fixed-fluid hybrid**. While content containers follow a maximum width (typically 1280px), the background grid and ambient orbs extend to the edges of the viewport. 

- **Desktop:** 12-column system with 24px gutters.
- **Mobile:** 4-column system with 16px gutters and a 20px safe margin.
- **Rhythm:** All internal padding and margin should be multiples of 8px to maintain vertical rhythm within the larger 64px grid blocks.

## Elevation & Depth

Elevation is defined by **transparency and blur** rather than traditional drop shadows.

1.  **Canvas:** The base layer is the solid #070708.
2.  **Grid Layer:** 5% white lines sit directly on the canvas.
3.  **Ambient Layer:** Blurred orbs of Electric Cyan and Secondary Violet move behind the glass components.
4.  **Glass Surfaces:** 4-8% white fill with a **24px backdrop blur**. This creates a frosted "glass" effect that picks up the colors of the ambient orbs beneath.
5.  **Strokes:** Every glass surface must have a 1px solid border at 8% white opacity to define its edges against the dark background. No shadows are used; the contrast is achieved through the 1px edge highlight.

## Shapes

The design uses a **Rounded (Level 2)** shape language. This provides a "hardware-inspired" feel—like a precision-milled device—rather than the overly soft or playful feel of pill-shaped elements.

- **Standard Elements:** 0.5rem (8px) for buttons, inputs, and small cards.
- **Large Containers:** 1rem (16px) for main content glass panels.
- **Outer Wrappers:** 1.5rem (24px) for the most prominent UI sections.

## Components

### Buttons
- **Primary:** Solid Electric Cyan with black text for maximum contrast. No border.
- **Secondary/Glass:** The standard glass fill (6% white) with the 1px border. On hover, the border opacity increases to 20%.
- **Ghost:** No fill, cyan text, 1px cyan border.

### Input Fields
Inputs use the 4% white glass fill. The bottom border should be highlighted in Electric Cyan when the field is active. Labels use the `label-caps` style for a technical, metadata appearance.

### Cards
Cards are the primary expression of the glassmorphic style. They feature the 24px backdrop blur and the 8% white 1px border. For interactive cards, a very subtle inner glow (top-down linear gradient, white at 5% to 0%) can be added to the top edge to simulate light hitting the glass.

### Chips & Status
Chips use a low-opacity version of the status colors (e.g., Lime at 10% opacity) with a solid text color of the same hue. These should be set in `body-sm` with a slightly higher font weight for legibility.

### Data Grid
Tables and lists should align strictly to the 64px grid lines. Horizontal dividers should be 1px at 5% opacity, matching the background grid to create a seamless, integrated appearance.