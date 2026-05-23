# Techxtreme Portfolio

Premium **React + Tailwind + Framer Motion** portfolio — live at **[techxtreme.is-a.dev](https://techxtreme.is-a.dev)** (also [Vercel](https://techxtreme-portfolio.vercel.app) · [GitHub Pages project URL](https://its-techxtreme.github.io/techxtreme-portfolio/)).

## Stack

- **Vite** · **React 19** · **TypeScript**
- **Tailwind CSS** · **Framer Motion** · **Lenis** smooth scroll
- **React Router** — client-side navigation
- **FormSubmit** — contact form (no backend)

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

## Deploy (Vercel — quick preview while is-a.dev is pending)

1. Sign in at [vercel.com](https://vercel.com) with GitHub (`its-techxtreme`)
2. **Add New… → Project** → import **techxtreme-portfolio**
3. Framework: **Vite** (auto-detected) · Build: `npm run build` · Output: `dist`
4. Deploy — you get a free `*.vercel.app` URL (SPA routing is in `vercel.json`)

CLI (optional): `npx vercel login` then `npx vercel --prod`

## Deploy (GitHub Pages + is-a.dev)

**GitHub:** [@its-techxtreme](https://github.com/its-techxtreme)  
**Primary:** https://techxtreme.is-a.dev  
**Vercel:** https://techxtreme-portfolio.vercel.app  
**GitHub Pages (project URL):** https://its-techxtreme.github.io/techxtreme-portfolio/

### 1. Push to GitHub

```powershell
gh auth login
cd "C:\Users\notte\OneDrive\Desktop\Portfolio"
git remote set-url origin https://github.com/its-techxtreme/techxtreme-portfolio.git
gh repo create techxtreme-portfolio --public --source=. --remote=origin --push
```

(If the repo already exists, use `git push -u origin main` instead.)

### 2. Enable GitHub Pages

1. Repo → **Settings** → **Pages**
2. **Build and deployment** → Source: **GitHub Actions**
3. **Custom domain:** `techxtreme.is-a.dev` (set in repo settings + `public/CNAME`)
4. Enable **Enforce HTTPS** when GitHub shows the option (after DNS verifies)

Build uses `VITE_BASE=/` in `.github/workflows/pages.yml` so assets load at the custom domain root.

### 3. DNS (is-a.dev)

In your [is-a.dev](https://is-a.dev) dashboard for **techxtreme**:

| Type | Name | Value |
|------|------|--------|
| CNAME | `techxtreme` (or `@` if supported) | `its-techxtreme.github.io` |

DNS can take a few minutes to propagate. GitHub will show a green check when the domain is verified.

### 4. FormSubmit redirect

After the site is live, confirm FormSubmit’s `_next` URL uses `https://techxtreme.is-a.dev/contact?sent=1` (see `Contact.tsx`).

## Assets

- `public/assets/` — production screenshots and logos
- `assets/stitch assests/` — Stitch source exports (not deployed)

## Contact

techxtremebuisness@gmail.com
