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

## Deploy (GitHub Pages)

1. Push repo to GitHub
2. Settings → Pages → Source: **GitHub Actions**
3. Optional domain: `techxtreme.is-a.dev` (see [is-a.dev](https://github.com/is-a-dev/register))

## Contact form

Uses [FormSubmit](https://formsubmit.co) — first submission emails you a confirmation link to activate. Update `_next` URL in `contact.html` after you know your live domain.

## Assets

- `assets/projects/` — London Museums & Virtalent screenshots (live captures)
- `assets/pla/` — PLA UI screenshots (client-approved, no secrets visible)

## Stack

Lenis smooth scroll · GSAP ScrollTrigger · Swiper · GLightbox · Pure HTML/CSS

## Email

techxtremebuisness@gmail.com
