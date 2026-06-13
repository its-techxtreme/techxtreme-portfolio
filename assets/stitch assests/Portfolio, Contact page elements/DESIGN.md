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
typography:
  display-lg:
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
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.02em
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  label-md:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
  code:
    fontFamily: JetBrains Mono
    fontSize: 14px
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
  grid_unit: 64px
  gutter: 24px
  margin_desktop: 80px
  margin_mobile: 20px
  stack_xs: 4px
  stack_sm: 8px
  stack_md: 16px
  stack_lg: 32px
  stack_xl: 64px
---

## Brand & Style
This design system embodies the "Future-Forward Studio" aesthetic, blending the technical precision of high-end developer tools with the ethereal polish of award-winning digital agencies. The visual narrative is built on the concept of "Digital Craftsmanship"—where every pixel feels intentional and every interaction feels high-performance.

The style is a hybrid of **Minimalism** and **Glassmorphism**, leaning heavily into the "Linear.app" and "Vercel" aesthetic. It utilizes a near-black foundation to provide a sense of depth and infinite space, punctuated by vibrant, neon-inflected accents. The mood is professional, sophisticated, and uncompromisingly modern, evoking trust through structural rigour rather than traditional corporate tropes.

## Colors
The palette is rooted in a "Deep Space" black (#070708), which serves as the canvas for all elements. 

- **Primary (Electric Cyan):** Used for primary actions, progress indicators, and key focus states. It represents the "energy" of the studio.
- **Secondary (Violet):** Used for supporting visual interest, gradients, and distinguishing secondary brand moments.
- **Status (Lime):** Reserved strictly for success states, "live" indicators, and positive growth metrics.
- **Surface Strategy:** Layers are built using varying opacities of white (4-8%) over the deep background, creating a glass effect rather than solid gray steps. 

Ambient backgrounds should feature low-opacity, large-scale radial gradients (orbs) of Cyan and Violet to prevent the UI from feeling flat.

## Typography
The typography strategy creates a high-contrast hierarchy between "Technical Headers" and "Functional Body" text. 

**Space Grotesk** is used for all headlines. It must be set with tight tracking (-0.04em) to achieve the aggressive, modern "agency" look. It communicates precision and engineering.

**Manrope** provides a balanced, highly readable counterpoint for all UI labels, body copy, and inputs. It ensures that while the brand looks "extreme," the information remains accessible. For data-heavy or technical specs, an optional monospaced font (JetBrains Mono) can be used to reinforce the studio's technical roots.

## Layout & Spacing
The layout is governed by a **64px hard grid**. This grid should be visually hinted at in the background using 5% opacity lines to create a "blueprint" or "drafting" feel.

- **Desktop:** A 12-column fluid grid with 24px gutters. Content is often contained within the central 10 columns for breathability.
- **Spacing Logic:** All spacing between elements (margins/padding) should be multiples of 8px. Use 64px (stack_xl) for major section breaks to maintain the grid's rhythm.
- **Alignment:** Elements should snap to the 64px intersections where possible. This creates the "Precision" feeling requested, mimicking specialized software interfaces.

## Elevation & Depth
Depth in this design system is not achieved through traditional drop shadows, but through **translucency and refraction**.

1.  **Backdrop Blur:** All floating panels, modals, and navigation bars must use a 24px backdrop blur.
2.  **Glass Layers:** Use a 4-8% white fill to define surfaces.
3.  **The "Ghost Border":** Every surface container must have a 1px solid border at `rgba(255,255,255,0.08)`. This creates a sharp edge that defines the shape against the dark background.
4.  **Interactive Glow:** Instead of shadows, focused or active elements may emit a subtle, soft outer glow using the Primary Cyan color at very low (10-15%) opacity.

## Shapes
The shape language is "Soft-Technical." We avoid fully sharp 0px corners to maintain a premium, modern feel, but we avoid "bubbly" pill shapes to keep the aesthetic professional.

- **Standard Radius:** 0.5rem (8px) for buttons, inputs, and small cards.
- **Large Radius:** 1.5rem (24px) for major sections or large containers.
- **Iconography:** Icons should be stroke-based (1.5px to 2px weight) with slight rounding on joins to match the UI radius.

## Components

### Buttons
- **Primary:** Solid Cyan fill with black text for maximum contrast. No shadow.
- **Secondary:** Glass background (8% white) with 1px white border (10% opacity) and Cyan text.
- **Interaction:** On hover, primary buttons should increase in brightness; secondary buttons should increase background opacity to 12%.

### Input Fields
- **Base:** Darker than the canvas (#040405) with the 1px border.
- **Focus:** Border color changes to Primary Cyan, and a subtle Cyan inner-glow is applied. Label text should use the `label-md` style.

### Cards
- **Construction:** 4% white glass fill, 24px backdrop blur, 1px border. 
- **Content:** Headlines inside cards use `headline-md`. Ensure 32px internal padding for a spacious, "Vercel-like" feel.

### Chips/Tags
- Small, uppercase labels with a 1px border. For "Live" or "Active" status, include a 6px solid Lime circle to the left of the text.

### Navigation
- A fixed top header, completely transparent with 24px backdrop blur. Use a 1px bottom border to separate it from the content.