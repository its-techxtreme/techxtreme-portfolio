# Techxtreme Portfolio

Multi-page premium portfolio — **GitHub Pages ready** (no Vercel).

## Pages

| File | URL |
|------|-----|
| `index.html` | Home — bento work, stats, tabs, testimonials |
| `work.html` | All projects + filters |
| `about.html` | Story, stack, timeline |
| `contact.html` | **Working form** (FormSubmit) + FAQ |
| `work/*.html` | Full case studies with galleries |

## Preview locally

```powershell
cd "C:\Users\notte\OneDrive\Desktop\Portfolio"
python -m http.server 8080
```

Open http://localhost:8080

## Git backup

Local repo is initialized on `main`. To push to a **new** GitHub repo:

```powershell
cd "C:\Users\notte\OneDrive\Desktop\Portfolio"
gh auth login
gh repo create techxtreme-portfolio --public --source=. --remote=origin --push
```

Or create an empty repo on GitHub (e.g. `techxtreme-portfolio`), then:

```powershell
git remote add origin https://github.com/YOUR_USERNAME/techxtreme-portfolio.git
git push -u origin main
```

## Deploy (GitHub Pages)

1. Push repo to GitHub (see above)
2. Settings → Pages → Source: **GitHub Actions**
3. Optional domain: `techxtreme.is-a.dev` (see [is-a.dev](https://github.com/is-a-dev/register))

## Contact form

Uses [FormSubmit](https://formsubmit.co) — first submission emails you a confirmation link to activate. Update `_next` URL in `contact.html` after you know your live domain.

## Assets

- `assets/projects/` — London Museums & Virtalent screenshots (live captures)
- `assets/pla/` — PLA UI screenshots (client-approved, no secrets visible)
- `assets/stitch assests/` — old Stitch exports (ignore; use prompts in `STITCH_PROMPTS.md`)
- `assets/stitch/` — put **new** Stitch exports here after generating

## Stack

Lenis smooth scroll · GSAP ScrollTrigger · Swiper · GLightbox · Pure HTML/CSS

## Email

techxtremebuisness@gmail.com
