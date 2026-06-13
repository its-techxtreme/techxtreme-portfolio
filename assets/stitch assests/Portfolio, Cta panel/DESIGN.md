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
typography:
  display:
    fontFamily: Space Grotesk
    fontSize: 80px
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
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: -0.01em
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
  body-sm:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
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
  margin_desktop: 64px
  margin_mobile: 20px
  stack_xs: 4px
  stack_sm: 8px
  stack_md: 16px
  stack_lg: 32px
  stack_xl: 64px
---

## Brand & Style
This design system embodies "Precision-Grade Digitalism." It is built for a high-end, remote-first digital studio where technical excellence meets aesthetic sophistication. The visual language is inspired by the ultra-refined aesthetics of modern developer tools and award-winning marketing sites, characterized by a "dark mode by default" philosophy.

The style is a hybrid of **Minimalism** and **Glassmorphism**, emphasizing structural integrity through visible grid systems and depth through high-fidelity translucency. It evokes a sense of "the future of work"—clean, fast, and impeccably polished. The emotional response should be one of absolute trust in technical capability and a feeling of being at the cutting edge of digital craft.

## Colors
The palette is rooted in deep space. The **Canvas** (#070708) provides a near-black foundation that allows accent colors to vibrate. **Electric Cyan** serves as the primary action color, representing energy and precision. **Secondary Violet** is used for depth and creative flair, often appearing in gradients or ambient lighting. **Lime Status** is reserved for success states and highlighting growth metrics.

Contrast is maintained through a grayscale ramp that prioritizes legibility on dark backgrounds. Interactive elements leverage the primary Cyan for high visibility, while background depth is achieved through the interaction of glass layers and blurred ambient orbs in Cyan and Violet.

## Typography
The typography strategy creates a sharp tension between technical geometry and human-centric readability. **Space Grotesk** is used for all display and headline roles; it must always be set with tight tracking (-0.04em for large sizes) to create the "compressed" professional look found in modern tech branding.

**Manrope** handles all functional UI and long-form text. Its balanced, modern proportions provide a neutral counterpoint to the expressive headlines. Labels and metadata should utilize the `label-md` style—all-caps with increased tracking—to mimic the appearance of technical specifications or code environments.

## Layout & Spacing
The layout is governed by a **12-column fluid grid** with a visible 64px structural rhythm. A foundational 5% opacity grid line overlay should be visible in the background of primary sections to reinforce the studio's focus on precision.

Generous whitespace is mandatory. The "Stack" system uses an 8px base increment, with a preference for larger gaps (`stack_xl`) between major sections to prevent visual clutter. On desktop, content should feel expansive with 64px side margins. On mobile, the grid collapses to a single column, but the 64px vertical rhythm is maintained to ensure a consistent sense of scale.

## Elevation & Depth
Depth in this design system is achieved through translucency rather than heavy shadows. 
- **Glass Surfaces:** Containers use a 4% to 8% white fill with a 24px backdrop blur. This allows the background ambient orbs (soft Cyan and Violet glows) to bleed through, creating a sense of three-dimensional space.
- **Structural Borders:** Every glass surface is defined by a 1px solid border at 8% white opacity. This creates "sharp" edges that suggest precision manufacturing.
- **Ambient Lighting:** Large, low-opacity (10-15%) blurred circles of Cyan and Violet are placed behind the UI layers to provide a source of light and break the monotony of the dark canvas.
- **Interactions:** Upon hover, the glass fill opacity increases slightly, and the border brightness doubles to provide tactile feedback.

## Shapes
The shape language is "Modern Geometric." A **0.5rem (8px)** base radius is applied to most UI components (buttons, inputs, cards) to maintain a balance between technical sharpness and modern software friendliness. 

Larger containers (e.g., dashboard panels, hero sections) should use `rounded-xl` (1.5rem) to soften the overall composition. Circular shapes are strictly reserved for avatars and status indicators; all other elements must conform to the geometric radius system.

## Components
- **Buttons:** Primary buttons are Solid Cyan with black text. Secondary buttons are "Glass Ghost"—transparent with a 1px white border and backdrop blur. High-polish hover states should include a subtle Cyan outer glow.
- **Cards:** Use the standard glass surface definition. No shadows. Content inside should be padded by `stack_lg` (32px) to maintain the airy, professional feel.
- **Chips/Badges:** Small, high-contrast pills. For technical data, use the Secondary Violet with 20% opacity and a solid Violet text.
- **Input Fields:** Minimalist design with a bottom border only by default, or a full glass container. Focus states must trigger a Cyan border and a 0.5px Cyan glow.
- **Lists:** Separated by 1px borders at 5% white opacity. Hovering over a list item should reveal a subtle glass highlight.
- **Status Indicators:** Use the Lime Status color for "Online" or "Complete" states. These should have a small "breathing" animation (pulsing glow) to add life to the remote-first interface.