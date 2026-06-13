---
name: Techxtreme Digital Studio
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
    fontSize: 44px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 40px
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
    letterSpacing: 0em
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  grid_line: 64px
  gutter: 24px
  margin_desktop: 80px
  margin_mobile: 20px
  container_max: 1440px
---

## Brand & Style
The design system embodies a "Hyper-Precision Studio" aesthetic, blending the technical rigor of developer tools with the high-end polish of award-winning digital agencies. The target audience consists of tech-native founders and engineering teams who value speed, clarity, and structural integrity.

The style is **Premium Glassmorphism** rooted in a **Minimalist/Corporate-Modern** hybrid. It avoids decorative fluff in favor of functional transparency, ultra-thin strokes, and a disciplined layout grid. The UI should evoke a sense of "The Future of Work"—efficient, luminous, and deeply focused.

**Key Visual Principles:**
- **Mathematical Layouts:** Rigid adherence to grid lines.
- **Luminous Depth:** Color is used as light (ambient orbs) rather than surface pigment.
- **Anti-Generic:** No stock photography. Use abstract 3D renders, code snippets, or high-fidelity wireframe illustrations.

## Colors
The palette is built on a "Void and Neon" logic. The base is an uncompromising near-black (#070708) that provides the necessary contrast for the glass effects to appear physical.

- **Primary (Electric Cyan):** Used for primary actions, progress indicators, and focal points.
- **Secondary (Violet):** Reserved for accent details, hover states, and categorizing specialized studio services.
- **Tertiary (Lime):** Strictly for "Status" indicators, success messages, and "Available" badges.
- **Neutrals:** Grayscale is minimized. Instead, use varying opacities of white (4% to 60%) to create hierarchy without introducing muddy grays.

## Typography
The typographic system creates a tension between the geometric, expressive **Space Grotesk** and the neutral, highly-legible **Manrope**.

**Space Grotesk** is the voice of the brand—bold, technical, and slightly aggressive in its tight tracking. It should be used for large headings and punchy statements.

**Manrope** handles all long-form content, ensuring a sophisticated and professional reading experience.

**JetBrains Mono** (Label Font) is introduced for metadata, small labels, and "System Status" text to reinforce the studio's technical/developer-centric identity.

## Layout & Spacing
The layout is governed by a **Hard Grid** philosophy. A background grid of 64px cells at 5% opacity should be visible or felt in every composition.

- **Grid Alignment:** All glass containers must snap to the 64px grid lines.
- **Margins:** Desktop utilizes generous 80px margins to allow the ambient orbs to breathe in the periphery.
- **Spacing Rhythm:** Use a strict 8px base unit. Gaps between related components should typically be 24px (3 units) or 48px (6 units) to maintain a feeling of airy precision.
- **Orbs:** Place 400px - 600px soft blurred orbs (#22d3ee and #a78bfa) behind the grid but above the #070708 base. These should move slowly or appear statically in opposite corners to provide depth.

## Elevation & Depth
Depth is not created with shadows, but through **refraction and opacity stacking**.

- **Level 0 (Canvas):** #070708 Background with 5% opacity 64px grid lines.
- **Level 1 (Surface):** 4% White fill, 24px backdrop blur, 1px border (rgba 255, 255, 255, 0.08).
- **Level 2 (Floating/Hover):** 8% White fill, 40px backdrop blur, 1px border (rgba 255, 255, 255, 0.15).
- **Accents:** Inner glows (1px, top-left) using the primary color at 20% opacity are encouraged for active states to simulate light catching the edge of a glass pane.

## Shapes
The shape language is "Soft-Technical." We avoid the playfulness of hyper-rounded corners in favor of a disciplined, architectural feel.

- **Standard Radius:** 4px (0.25rem) for inputs and small buttons.
- **Large Radius:** 8px (0.5rem) for cards and main UI containers.
- **Pill:** Only used for "Status" tags (e.g., "Available for Work") to provide a distinct visual break from the rectangular grid.

## Components
- **Buttons:** Primary buttons use a solid Electric Cyan (#22d3ee) with black text for maximum contrast. Secondary buttons use the glass style (4% fill) with a 1px white border. Hover states should increase the border opacity to 30%.
- **Input Fields:** Completely transparent background. Only a bottom border (1px, rgba 255,255,255,0.1). On focus, the border becomes Electric Cyan and a subtle 2px Cyan outer glow appears.
- **Cards:** Use the "Level 1" glass specification. Headlines inside cards should be Space Grotesk (24px).
- **Chips/Tags:** Minimalist. No fill, 1px border, and a small 6px circular dot of the status color (Cyan, Violet, or Lime) next to the text.
- **Lists:** Separated by 1px rgba(255, 255, 255, 0.05) lines. Hovering over a list item should trigger a 2% white background highlight.
- **Data Visualizations:** Use thin (1px to 1.5px) lines for charts. Avoid filled area charts; prefer stroke-only or very low-opacity gradients.