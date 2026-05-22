# Techxtreme Portfolio

Premium **React + Tailwind + Framer Motion** portfolio — live at **[techxtreme-portfolio.vercel.app](https://techxtreme-portfolio.vercel.app)** (custom domain **techxtreme.is-a.dev** after is-a.dev PR merges).

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
**Preview (use in is-a.dev PR):** https://techxtreme-portfolio.vercel.app  
**GitHub Pages:** https://its-techxtreme.github.io/techxtreme-portfolio/  
**Custom domain (after PR merge):** https://techxtreme.is-a.dev — add `public/CNAME` then re-enable in Pages settings

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
3. After the workflow runs, under **Custom domain** enter: `techxtreme.is-a.dev`
4. Enable **Enforce HTTPS** when available

Do **not** add `public/CNAME` until the is-a.dev PR is merged (otherwise preview URLs redirect to the is-a.dev homepage).

After merge, add `public/CNAME` and set `VITE_BASE=/` in `.github/workflows/pages.yml` build step so the custom domain serves assets from root.

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
