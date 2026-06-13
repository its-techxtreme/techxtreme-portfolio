# Google Stitch — High-fidelity prompts for Techxtreme

Use at [stitch.withgoogle.com](https://stitch.withgoogle.com).

**Do not use** anything in `assets/stitch assests/` yet — those were from weak prompts. Generate fresh exports, save to `assets/stitch/` (new folder), then tell Cursor which file maps to which section.

---

## Brand system (paste into every prompt)

```
DESIGN SYSTEM — Techxtreme remote digital studio
Canvas: #070708 near-black, NOT pure black
Accent: electric cyan #22d3ee, secondary violet #a78bfa, lime status #a3e635
Typography: Space Grotesk headlines (bold, -0.04em tracking), Manrope body
UI: glassmorphism 4–8% white fill, 1px borders rgba(255,255,255,0.08), 24px backdrop blur
Background: subtle 64px grid lines at 5% opacity, soft cyan/violet ambient orbs (blurred, no hard edges)
Mood: Awwwards 2024–2026, Linear.app precision, Vercel marketing polish — NOT generic AI slop, NOT purple gradient clichés, NOT stock photos of people
Aspect: desktop-first 1440×900 unless noted
```

---

## 1. Homepage hero — atmospheric (PRIMARY)

**Filename:** `hero-atmosphere.png`  
**Use for:** optional full-bleed hero background behind headline on `index.html`

```
Full-width hero section for a remote developer agency portfolio, 1440×900px.

COMPOSITION:
- Left 55%: massive headline in Space Grotesk, two lines — line 1 solid white "We engineer digital", line 2 outline-only hollow text "leverage." (1px white stroke, transparent fill)
- Below headline: muted gray subcopy 18px, max-width 480px
- Two CTAs: primary pill button cyan gradient #22d3ee→#0891b2 with soft cyan glow; secondary ghost pill 1px white border
- Top center: floating dock nav pill — dark glass bar, "TX" gradient logo left, links Work About Contact, white "Start project" button right
- Small badge above headline: green pulsing dot + monospace "Available worldwide · All timezones"

BACKGROUND:
- Base #070708 with faint grid
- Large soft cyan orb top-right (blur 120px, 18% opacity), violet orb bottom-left (14% opacity)
- NO photographs, NO 3D robots, NO faces

STYLE: cinematic dark SaaS, razor-sharp type, generous whitespace, premium agency — reference Linear marketing pages and dark-mode Stripe landing sections
```

---

## 2. Bento work section — layout reference

**Filename:** `bento-work-reference.png`  
**Use for:** design reference only (recreate in HTML/CSS; do not replace screenshots)

```
Portfolio "Selected work" section mockup, 1440×1200px, dark #070708.

STRUCTURE:
- Section label: cyan monospace "SELECTED WORK" with 32px cyan line before it
- H2: "Shipped products." white + "*Real screenshots." with gradient text cyan→violet→pink
- Subtext muted #71717a

BENTO GRID (12-col, 16px gap):
- Card 1 (7 cols × 2 rows): website screenshot of museum directory with Big Ben hero — glass gradient overlay bottom, tags "LIVE" green pill + "CLIENT WORK" cyan pill, title "London Museums Directory"
- Card 2 (5 cols × 2 rows): dark trading dashboard screenshot, tags "PRIVATE" + "6 AI MODELS"
- Row 2: three equal cards — VA service site green hero, AI neural network abstract UI image, orange EdTech logo on dark card

Each card: 28px corner radius, 1px border rgba(255,255,255,0.08), circular arrow button top-right, hover lift implied

Below grid: two live URL pills with green dots — londonmuseums.co.uk, virtalent.com

NO lorem ipsum blocks, NO placeholder gray rectangles — show realistic UI thumbnails
```

---

## 3. Stats + marquee strip

**Filename:** `stats-marquee.png`  
**Use for:** reference for stats bento + tech ticker

```
Horizontal UI strip 1440×400px dark theme.

TOP: infinite marquee — WordPress ◆ PHP ◆ Python ◆ n8n ◆ Firebase ◆ SEO in Space Grotesk, muted gray text, cyan diamond separators

BOTTOM: 4 stat cards in a row, equal width, #0f0f12 background, 16px radius borders:
- "350+" gradient number + "Monthly organic visits"
- "2600+" + "Active markets tracked"
- "24/7" + "Async delivery · Any timezone"
- "5" + "Production-grade builds"

Numbers use white→cyan gradient. Subtle hover border cyan on one card shown.
```

---

## 4. Process section — "From brief to live URL"

**Filename:** `process-steps.png`

```
Four-step process section, 1440×500px, #070708 background.

Title: "From brief to live URL." with "live URL" in cyan→violet gradient.

Four cards in a row, glass style:
01 Discovery — goals & metrics
02 Design & build — high-fidelity UI, real content
03 Launch — DNS, SEO, handover docs
04 Grow — traffic & automation

Each card: large faint watermark number top-right (01–04 at 6% opacity), bold title, gray description, 28px radius, 1px border. Third card has subtle cyan border glow (active state).

Clean, editorial, no icons clipart
```

---

## 5. Capabilities tab panel — Websites

**Filename:** `capability-websites.png`

```
Split panel UI 1200×600px for agency services tab "Websites".

LEFT: rounded screenshot frame showing museum directory listing page (cards grid, search bar)
RIGHT: three stacked list items with borders:
- "Niche directories that rank" + one-line description
- "Service & lead-gen sites" + description  
- "WordPress at scale" + description

Tab bar above: Websites (active white pill), AI Systems, Automation (ghost pills)

Dark glass container, cyan accent on active tab only
```

---

## 6. Contact page — split layout

**Filename:** `contact-split.png`  
**Use for:** `contact.html` layout polish reference

```
Contact page 1440×900px, dark agency.

LEFT COLUMN (40%):
- H1 "Let's build something that ships."
- Email techxtremebuisness@gmail.com in cyan
- FAQ accordion: 4 questions, plus icons, 1px dividers, first item expanded

RIGHT COLUMN (60%):
- Glass form card #0f0f12, 28px radius
- Fields: Name, Email, Project type dropdown, Budget dropdown, Message textarea
- Cyan focus ring on focused field
- Full-width cyan submit "Send inquiry →"

Floating dock nav at top center. Grid background. Professional, trustworthy, zero illustration characters
```

---

## 7. Case study hero — London Museums

**Filename:** `case-study-london-museums.png`

```
Project case study header 1440×700px.

Top: breadcrumb "← All work" muted
Meta pills: LIVE (green), CLIENT WORK (cyan), WordPress, SEO
H1: "London Museums Directory" Space Grotesk 64px
Lead paragraph gray, link londonmuseums.co.uk in cyan

Hero image: full-width browser chrome frame (minimal dark browser bar with three dots) containing museum site screenshot — Big Ben hero, search bar, "Discover the Best Museums in London"

Below: 3 stat cards in row — 350+ visits, 100+ listings, $0 ad spend

Museum/travel editorial feel, not generic corporate
```

---

## 8. Case study hero — Virtalent (client VA site)

**Filename:** `case-study-virtalent.png`

```
Project case study header 1440×700px, same chrome as prompt 7.

Meta: LIVE, CLIENT WORK, Lead gen, Service site
H1: "Virtalent — Virtual Assistant Platform"
Screenshot inside browser frame: UK VA website — deep forest green hero, white headline "The UK's leading Virtual Assistant service", professional woman at laptop, lime green play button

Tags and typography match Techxtreme dark wrapper — case study is FRAMED in dark #070708 agency shell around the client's green site
```

---

## 9. Project Aura — portfolio mockup (paste into Stitch)

**Purpose:** One marketing-quality UI preview for the Techxtreme portfolio only (home bento, work tile, `/work/aura` case study). **Not** the full app — skip tablet status, dream modals, approval flows, and every peripheral screen for now.

**Inspired by** `Project-Aura/docs/prompts/stitch-ui-prompt.md` + `docs/11-ui-and-3d.md` (read-only; do not edit that repo).

**After export:** save PNG as `public/assets/projects/aura-portfolio-ui.png` → tell Cursor to wire it in and remove `aura-ui.jpg` / `aura-holo.jpg` / `aura-laptop.jpg`.

**Optional second run:** only if you want a second gallery image — use the short follow-up block at the end.

---

### Copy from here ↓ (single paste for Stitch)

```
Design a portfolio hero mockup of a desktop app UI named "AURA" — a local-first personal AI assistant (voice, memory, persona engine). This is for a developer portfolio case study, not a full product build. Show only the screens we need to communicate the product vision.

CANVAS: 1440×900px, 16:9 friendly composition, crisp and readable when scaled down to a small project card.

THEME
- Sci-fi command center / holographic dashboard
- Background #05060B with subtle grid lines at 4% opacity
- Panel backgrounds #0D1018, borders rgba(120, 195, 255, 0.25)
- Accents: cyan #6BE3FF (primary), violet #B58CFF (secondary), touch of magenta #FF6BD0 only on character halo or mood badge
- Soft glow on panels; premium and restrained — NOT gamer RGB, NOT generic ChatGPT layout, NOT stock photos

CENTERPIECE — CARTOON AI COMPANION (not a real person)
- Large center stage (~45% of width): a professional 2D animated cartoon mascot for the AI assistant
- Style: modern cel-shaded or clean vector cartoon — polished app mascot quality (think high-end game UI companion or motion-design character), friendly and composed
- Character is fully fictional/stylized: simplified features, expressive eyes, elegant silhouette — NO photorealism, NO live-action, NO specific anime character likeness, NO human stock photo, NO uncanny realism
- Soft cyan-violet radial halo behind the character; mood badge pill below reading "Focused"; small label "Listening..."
- Optional subtle voice waveform under the character

INCLUDE ONLY THESE UI ZONES (keep it simple):

1) TOP BAR (~40px): "AURA" wordmark left · green-dot status "Connected · Local Brain" center · minimal window controls right

2) LEFT COLUMN (~30% width): "Conversation" header · 3 chat bubbles (user right, assistant left with faint cyan edge) · 2 quick-prompt chips — do NOT draw a full memory graph, tiny node hint is enough

3) CENTER: cartoon mascot + halo + mood badge (dominant focal point)

4) RIGHT COLUMN (~28% width): ONE card titled "Brain Monitor" only — pill "Local · Llama 8B", small tokens/sec sparkline, VRAM bar, context bar with JetBrains Mono numbers

5) BOTTOM BAR: mic icon · input placeholder "Type or speak…" · send button · thin status line "Local Llama 8B · GPU 23%"

DO NOT INCLUDE: approval modals, tablet pairing UI, action history lists, system toggle matrix, dream-cycle dialogs, settings drawers, or extra screens — we are not generating the full software today.

TYPOGRAPHY: Inter or Geist for UI labels; JetBrains Mono for numeric stats.

OUTPUT: One polished static mockup PNG. If Stitch offers code export, include HTML/CSS as a bonus — but the PNG is what matters for the portfolio.

MOOD: intimate, intelligent, slightly futuristic — personal AI command center you would trust on a laptop.
```

---

### Follow-up paste (only if the first result needs a fix)

**Character too realistic / looks like a real person:**
```
Replace the center character with a fully stylized 2D cartoon AI mascot — cel-shaded illustration, no photorealistic skin, no anime schoolgirl likeness, no human photography. Bigger head-to-body ratio, cleaner shapes, professional app-mascot style.
```

**Too crowded / character too small:**
```
Make the cartoon mascot 50% larger in the center. Remove extra widgets — keep only Conversation (left), Brain Monitor (right), title bar, and chat input. Narrow the side panels.
```

**Optional second image (gallery only — skip if one PNG is enough):**
```
Close-up crop 1200×675 of the AURA "Brain Monitor" card and left chat bubbles only — same #05060B / #6BE3FF palette, no character, no stock AI art. For portfolio case-study gallery slide 2. Save as aura-portfolio-detail.png.
```

---

### Portfolio wiring (after Stitch)

| File | Use |
|------|-----|
| `aura-portfolio-ui.png` | Bento card, work tile, case study hero, gallery image 1 |
| `aura-portfolio-detail.png` | Gallery image 2 (optional) |

Tell Cursor: *"Replace Project Aura stock images with aura-portfolio-ui.png."*

---

## 10. JEE Notes Wallah — brand card

**Filename:** `jee-brand-card.png`

```
EdTech brand showcase card 800×600px.

Background: warm dark gradient #1c1410 to #0f0f12, soft orange glow top center (brand accent #fb923c at 20% opacity)
CENTER: large square logo placeholder area — orange "NW" style study notes branding, text below "Notes for Toppers, By Toppers" in white
Bottom tags: EdTech, Firebase, Prototype in monospace pills

NO apple, NO books stock photo, NO students — logo-forward minimal card only
(If Stitch supports image upload: upload jee-notes-wallah-logo.jpg as reference)
```

---

## 11. CTA band + footer

**Filename:** `cta-footer.png`

```
Bottom page section 1440×500px.

CTA band: rounded 28px container, dual radial gradients cyan+violet at 15% opacity, centered:
- H2 "Ready to ship something serious?" with "serious" in gradient
- Muted subtext about 24h reply
- Cyan primary button "Start your project →"

Footer below 1px top border: TX logo left, links Work About Contact center, copyright right — all muted gray

Elegant closing section, high conversion focus
```

---

## Export checklist

| File | Stitch prompt # | Maps to |
|------|-----------------|---------|
| `hero-atmosphere.png` | 1 | `index.html` hero (optional bg) |
| `bento-work-reference.png` | 2 | CSS/layout reference |
| `stats-marquee.png` | 3 | stats + marquee |
| `process-steps.png` | 4 | process grid |
| `capability-websites.png` | 5 | service tabs |
| `contact-split.png` | 6 | `contact.html` |
| `case-study-london-museums.png` | 7 | `work/london-museums.html` |
| `case-study-virtalent.png` | 8 | `work/virtalent.html` |
| `aura-portfolio-ui.png` | 9 | Bento, work tile, case study (primary) |
| `aura-portfolio-detail.png` | 9 (optional follow-up) | Case study gallery slide 2 |
| `jee-brand-card.png` | 10 | `work/study-notes.html` (optional) |
| `cta-footer.png` | 11 | `index.html` footer CTA |

**Tips for Stitch:**
1. Run prompt **#1** first — if the palette drifts, paste the Brand system block again at the top of each run.
2. Prefer **one section per generation** — combined mega-prompts produce muddy layouts.
3. Export **2× PNG** when available; compress with Squoosh before committing.
4. After export: `assets/stitch/hero-atmosphere.png` etc. — tell Cursor exactly which file to wire in.

---

## What went wrong last time (avoid)

- Prompts were one sentence → Stitch invented random "Cyber-Precision" themes off-brief
- No hex codes, no "do not include" list → stock faces and generic purple AI art
- Mixed hero + grid + contact in one shot → unusable all-in-one mockups
- No mapping to real project screenshots → didn't match londonmuseums.co.uk / virtalent.com reality
- Project Aura used generic stock photos → use section **9** paste prompt; cartoon mascot, not realistic humans

Techxtreme prompts use `css/site.css`. **Aura uses `#05060B` / `#6BE3FF` from Project Aura spec** — separate from the portfolio site palette.
