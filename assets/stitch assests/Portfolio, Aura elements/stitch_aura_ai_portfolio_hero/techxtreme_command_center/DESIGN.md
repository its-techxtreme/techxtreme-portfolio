---
name: Techxtreme Command Center
colors:
  surface: '#121319'
  surface-dim: '#121319'
  surface-bright: '#383940'
  surface-container-lowest: '#0d0e14'
  surface-container-low: '#1a1b21'
  surface-container: '#1e1f26'
  surface-container-high: '#282a30'
  surface-container-highest: '#33343b'
  on-surface: '#e3e1ea'
  on-surface-variant: '#bcc9cd'
  inverse-surface: '#e3e1ea'
  inverse-on-surface: '#2f3037'
  outline: '#879397'
  outline-variant: '#3d494c'
  surface-tint: '#5cd6f2'
  primary: '#d4f5ff'
  on-primary: '#003640'
  primary-container: '#6be3ff'
  on-primary-container: '#006475'
  inverse-primary: '#006879'
  secondary: '#d4bbff'
  on-secondary: '#3f0b84'
  secondary-container: '#572c9c'
  on-secondary-container: '#c6a5ff'
  tertiary: '#d0ff8a'
  on-tertiary: '#213600'
  tertiary-container: '#a4e736'
  on-tertiary-container: '#426500'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#aaedff'
  primary-fixed-dim: '#5cd6f2'
  on-primary-fixed: '#001f26'
  on-primary-fixed-variant: '#004e5c'
  secondary-fixed: '#ebdcff'
  secondary-fixed-dim: '#d4bbff'
  on-secondary-fixed: '#260058'
  on-secondary-fixed-variant: '#572c9c'
  tertiary-fixed: '#b2f746'
  tertiary-fixed-dim: '#98da27'
  on-tertiary-fixed: '#121f00'
  on-tertiary-fixed-variant: '#334f00'
  background: '#121319'
  on-background: '#e3e1ea'
  surface-variant: '#33343b'
  bg-deep: '#05060B'
  bg-panel: '#0D1018'
  border-glass: rgba(255, 255, 255, 0.08)
  fill-glass: rgba(255, 255, 255, 0.04)
  status-lime: '#A3E635'
typography:
  display-xl:
    fontFamily: Space Grotesk
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.03em
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
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.02em
  stats-xl:
    fontFamily: JetBrains Mono
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: -0.01em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  grid-line: 64px
  gutter: 24px
  margin-desktop: 80px
  margin-mobile: 20px
  base-unit: 4px
---

## Brand & Style

The design system is engineered for a high-performance remote digital studio, blending the technical precision of **Linear.app** with the immersive, "holographic" aesthetic of modern sci-fi interfaces. It targets developers, designers, and tech-forward clients who value speed, clarity, and futuristic craftsmanship.

The visual style is a refined **Glassmorphism**, characterized by hyper-thin borders, deep backdrop blurs, and layered translucency. The aesthetic mimics a sophisticated command center—dark, focused, and data-rich, yet polished with high-end marketing gradients and "Awwwards-tier" motion.

**Key Stylistic Pillars:**
- **Technical Utility:** Functional layouts inspired by IDEs and developer consoles.
- **Luminous Accents:** Electric cyan and violet provide directional focus against a light-absorbing background.
- **Structural Integrity:** Elements are defined by 1px "ghost" borders rather than heavy shadows.

## Colors

The color system is optimized for OLED displays and high-contrast dark environments. The foundation is a near-black `#05060B`, preventing pure-black "crushing" while maintaining deep contrast.

- **Primary Cyan (#6BE3FF):** Used for primary actions, active states, and "holographic" glows.
- **Secondary Violet (#B58CFF):** Used for branding accents, secondary categories, and sophisticated gradients.
- **Functional Neutrals:** Panels use `#0D1018` to subtly lift content off the base layer.
- **Ambient Orbs:** Large, blurred radial gradients of cyan and violet (5-10% opacity) should be placed behind main content areas to provide depth and atmosphere.

## Typography

This system employs a tripartite typographic strategy to balance marketing impact with functional utility:

1.  **Display & Headlines:** Use **Space Grotesk**. The tight tracking (-0.04em) and bold weights create a futuristic, high-tech architectural feel.
2.  **Body Text:** Use **Manrope**. Its high legibility and contemporary geometric character ensure comfort during long reading sessions.
3.  **Data & Interface:** Use **JetBrains Mono**. Reserved for stats, code snippets, and status labels to reinforce the "command center" utility.

**Mobile Scaling:**
- Reduce `display-xl` to 40px for mobile devices.
- `headline-lg` should scale to 28px on mobile.

## Layout & Spacing

The layout is built on a strict **64px technical grid**. Visible grid lines at 5% opacity should be rendered in the background to provide a sense of alignment and structural engineering.

- **Grid Model:** 12-column fluid grid for desktop (max-width 1440px), transitioning to a 4-column grid for mobile.
- **Rhythm:** An 8px linear scale is used for all internal component spacing (padding, gaps).
- **Margins:** Large 80px side margins on desktop to allow the "ambient orbs" to breathe and maintain a premium, focused feel.

## Elevation & Depth

This system avoids traditional shadows in favor of **Tonal Layering** and **Glassmorphism**.

1.  **Level 0 (Background):** Deepest layer `#05060B` with 5% opacity grid lines.
2.  **Level 1 (Panels):** `#0D1018` with a 1px border `rgba(255,255,255,0.08)`.
3.  **Level 2 (Glass Overlays):** 4% to 8% white fill with a 24px backdrop blur. These surfaces should feel like "floating HUD" elements.
4.  **Accent Depth:** Use "Glow Borders"—a subtle, 2px outer blur of the primary cyan color—to indicate active or focused states for interactive elements.

## Shapes

The shape language is **Soft (0.25rem/4px)**. While the overall vibe is "sci-fi," the small radius prevents the UI from feeling dated or overly aggressive.

- **Containers:** 4px radius for standard inputs and small cards.
- **Large Sections:** 8px (rounded-lg) for main dashboard panels.
- **Pills:** Used exclusively for status chips (e.g., "Active", "Live") to contrast against the otherwise rectilinear grid.

## Components

- **Buttons:** 
  - **Primary:** Gradient fill (Cyan to Blue-tinted Cyan), black text (Space Grotesk Bold), no border.
  - **Secondary:** Glass fill (8% white), 1px border, white text.
- **Inputs:** Dark background (`#0D1018`), 1px border. On focus, the border transitions to Cyan with a subtle 4px outer glow. Labels use JetBrains Mono.
- **Chips:** Monospace text, 2px radius, with a subtle left-side indicator dot in Lime or Cyan for status.
- **Cards:** Use the Glassmorphism specification (backdrop blur + 1px border). Hover states should increase border opacity from 8% to 20%.
- **Lists:** Clean rows separated by 1px `#ffffff14` lines. Use JetBrains Mono for secondary metadata (e.g., timestamps, file sizes).
- **HUD Elements:** Small, non-interactive labels in uppercase JetBrains Mono with 0.1em letter spacing, positioned in corners of panels to mimic technical schematics.