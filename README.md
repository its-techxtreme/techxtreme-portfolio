# Techxtreme Portfolio

Premium **React + Tailwind + Framer Motion** portfolio — GitHub Pages ready.

## Stack

- **Vite** · **React 19** · **TypeScript**
- **Tailwind CSS** · **Framer Motion** · **Lenis** smooth scroll
- **React Router** — client-side navigation (all links, menus, filters work)
- **FormSubmit** — working contact form (no backend required)

## Commands

```powershell
cd "C:\Users\notte\OneDrive\Desktop\Portfolio"
npm install
npm run dev      # http://localhost:5173
npm run build    # output → dist/
npm run preview  # preview production build
```

## Pages

| Route | Page |
|-------|------|
| `/` | Home — hero, bento, process, services tabs, testimonials |
| `/work` | Portfolio grid with live filters |
| `/work/:slug` | Case studies + image lightbox |
| `/about` | Story, stack, timeline |
| `/contact` | FAQ accordion + FormSubmit form |

## Deploy (GitHub Pages)

1. Push to GitHub
2. Settings → Pages → Source: **GitHub Actions**
3. Workflow builds `dist/` and deploys automatically
4. For **user/org site** (`username.github.io`): set `base: "/"` in `vite.config.ts` (default)
5. For **project site** (`username.github.io/repo-name/`): build sets `GITHUB_PAGES=true` in CI — update repo name in `vite.config.ts` if needed

Optional domain: `techxtreme.is-a.dev`

## Assets

- `public/assets/` — screenshots (synced from `assets/` for Vite)
- `assets/stitch assests/` — old Stitch exports (ignore)
- New Stitch exports → `public/assets/stitch/` — see `STITCH_PROMPTS.md`

## Contact form

Uses [FormSubmit](https://formsubmit.co). First submission emails you an activation link. `_next` redirects back to `/contact?sent=1`.

## Legacy static HTML

Pre-React files (`work/*.html`, `css/site.css`, etc.) remain in the repo for reference but are **not** deployed — GitHub Pages serves the Vite build only.

## Email

techxtremebuisness@gmail.com
