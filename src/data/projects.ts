export type ProjectCategory = "live" | "client" | "ai" | "rd";

export interface MobileScreen {
  src: string;
  label: string;
}

export interface Project {
  slug: string;
  title: string;
  short: string;
  description: string;
  caseStudy: string[];
  image: string;
  logoCard?: boolean;
  categories: ProjectCategory[];
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
  bentoClass?: string;
  stats?: { value: string; label: string }[];
  gallery?: string[];
  mobileScreenshots?: MobileScreen[];
  deliverables?: string[];
  techScope?: string[];
}

export const projects: Project[] = [
  {
    slug: "outreachos",
    title: "OutreachOS",
    short: "Production lead vault · Excel import · Cold outreach CRM",
    description:
      "OutreachOS is a production lead management tool for cold outreach — private per-account vaults, Excel import, niche/country/status filters, sticky call scripts, CSV export, and a sketchbook UI that replaces spreadsheet chaos.",
    caseStudy: [
      "Cold outreach dies in messy sheets: duplicates, half-updated statuses, and scripts buried in another tab. OutreachOS was built as a personal lead vault — one place to import contacts, filter what matters today, and dial with scripts still on screen.",
      "The product ships with a distinctive sketchbook interface (lined paper, doodle chrome), demo mode for instant tryouts, Excel import with a format guide, multi-attribute filters, vector vault overview, and sticky call-script pads with live placeholders like {business} and {niche}.",
      "Stack: Next.js on Vercel with Supabase-backed auth and data. Live at outreachos.techxtreme.me — production tool, not a concept mock. Free vault signup; demo peek available without typing a password.",
    ],
    image: "/assets/projects/outreachos/landing.png",
    categories: ["live", "ai"],
    tags: ["Live", "Production", "SaaS", "Lead gen", "Next.js", "2026"],
    liveUrl: "https://outreachos.techxtreme.me",
    repoUrl: "https://github.com/its-techxtreme/OutreachOS",
    featured: true,
    bentoClass: "md:col-span-7 md:row-span-2",
    stats: [
      { value: "Live", label: "Production on Vercel" },
      { value: "Excel", label: "Import + CSV export" },
      { value: "Private", label: "Per-account vaults" },
    ],
    gallery: [
      "/assets/projects/outreachos/landing.png",
      "/assets/projects/outreachos/dashboard.png",
      "/assets/projects/outreachos/vector.png",
      "/assets/projects/outreachos/scripts.png",
      "/assets/projects/outreachos/lead-table.png",
      "/assets/projects/outreachos/table.png",
    ],
    techScope: [
      "Next.js App Router + Tailwind + sketchbook design system",
      "Supabase auth and per-account lead vaults",
      "Excel import, format guide, and CSV export",
      "Niche / country / status filters with search",
      "Sticky call scripts with live field placeholders",
      "Demo mode + Google / email signup paths",
    ],
    deliverables: [
      "Production lead vault UI with metrics, filters, and lead table",
      "Excel import pipeline + public format guide",
      "Sticky call-script panel for live dialing",
      "Vector vault graph view for niche/country overview",
      "Auth, demo peek, and privacy-minded cookie handling",
    ],
  },
  {
    slug: "project-ap-i",
    title: "Project AP-I",
    short: "R&D + automation · Short-form intake → watermark → publish",
    description:
      "Project AP-I turns repetitive multi-account short-form posting into a tracked job queue — paste an approved Reel or Short, pick a niche (Memes / Anime / Sports), and the pipeline downloads, watermarks, writes metadata, stages to Drive, and publishes to mapped YouTube + Instagram accounts.",
    caseStudy: [
      "Manual short-form ops looks simple until you repeat it every day: download, watermark, caption, upload twice, remember failures. Project AP-I replaces that loop with a submit → process → publish queue and an operator dashboard for retries, review, and account health.",
      "Niches map server-side to exact destination accounts so submitters never pick destinations by hand. Heavy work (yt-dlp, FFmpeg, Playwright with real Chrome profiles) runs on a local worker by design; the public app and admin UI run on Vercel with Supabase status and audit logs.",
      "Demo at ap-i.techxtreme.me: public submit form plus a read-only admin account (ProjectAPIDemo) so reviewers can browse overview, jobs, failed review, and accounts without mutating the live queue.",
    ],
    image: "/assets/projects/ap-i/submit.png",
    categories: ["rd", "ai"],
    tags: ["R&D", "Automation", "YouTube", "Instagram", "n8n", "2026"],
    liveUrl: "https://ap-i.techxtreme.me",
    featured: true,
    bentoClass: "md:col-span-5 md:row-span-2",
    stats: [
      { value: "3", label: "Niches mapped" },
      { value: "2", label: "Platforms per niche" },
      { value: "Queue", label: "Retry + review workflow" },
    ],
    gallery: [
      "/assets/projects/ap-i/submit.png",
      "/assets/projects/ap-i/admin.png",
      "/assets/projects/ap-i/jobs.png",
      "/assets/projects/ap-i/failed.png",
      "/assets/projects/ap-i/accounts.png",
    ],
    techScope: [
      "Vercel web app + local worker (yt-dlp, FFmpeg, Playwright)",
      "Supabase job queue, status, and audit logging",
      "Niche → YouTube + Instagram account mapping",
      "Google Drive staging and cleanup steps",
      "Admin overview, jobs, failed review, accounts, logs",
      "Read-only demo auth for safe public review",
    ],
    deliverables: [
      "Public content submission form with rights confirmation",
      "Operator dashboard: overview metrics and recent activity",
      "Jobs pipeline queue with niche/platform/status filters",
      "Failed / needs-review workflows for manual recovery",
      "Account health views for mapped publishing destinations",
    ],
  },
  {
    slug: "london-museums",
    title: "London Museums Directory",
    short: "Fully custom WordPress theme · SEO directory · 350+ monthly visits",
    description:
      "A production museum directory at londonmuseums.co.uk — built from scratch with a bespoke theme, custom plugin logic, and SEO architecture that now drives consistent organic traffic without ad spend.",
    caseStudy: [
      "The client needed more than a template swap: a discoverable directory where visitors filter by category (art, science, history, free entry), browse featured listings, and subscribe — all while staying fast and maintainable in WordPress.",
      "We delivered a fully custom theme (not a child theme off a marketplace kit): typography, listing cards, category rails, museum detail templates, and newsletter blocks tuned for editorial content. A companion plugin handles directory-specific behaviour so content editors are not fighting the page builder.",
      "SEO was treated as product work: structured URLs, sitemap generation, meta patterns per listing type, and internal linking between hubs and individual museums. Result: 100+ live listings and 350+ monthly organic visits with zero paid acquisition.",
    ],
    image: "/assets/projects/londonmuseums-home.png",
    categories: ["live", "client"],
    tags: ["Live", "Client work", "WordPress", "SEO", "2024–26"],
    liveUrl: "https://londonmuseums.co.uk",
    featured: true,
    bentoClass: "md:col-span-6",
    stats: [
      { value: "350+", label: "Monthly organic visits" },
      { value: "100+", label: "Museum listings" },
      { value: "$0", label: "Ad spend to date" },
    ],
    gallery: [
      "/assets/projects/londonmuseums-home.png",
      "/assets/projects/londonmuseums-featured.png",
    ],
    deliverables: [
      "Fully custom WordPress theme — layout, components, and listing templates",
      "Custom directory plugin for filters, featured rails, and editor workflows",
      "Category system (Art, Science, History, Free museums) with clean URL structure",
      "SEO foundations: sitemap, meta templates, hub ↔ detail internal linking",
      "Newsletter capture and resource pages wired into the theme",
    ],
  },
  {
    slug: "pla",
    title: "Project Logic Arbitrage",
    short: "Enterprise AI research terminal · n8n automation",
    description:
      "Enterprise-grade prediction market research terminal — 2,600+ active markets, multi-model AI consensus, semantic search, and fully automated n8n pipelines. Private client · NDA.",
    caseStudy: [
      "A trading-adjacent client needed one surface to monitor thousands of prediction markets, run multi-model research, and export decisions — without tab-hopping across APIs.",
      "The dashboard orchestrates six model providers, semantic search over 2,600+ records, charting modules, and role-based access. n8n automations handle imports, scheduled research, and price refresh so analysts open the product to current data.",
      "Every module was built for density and auditability: who ran which query, what the consensus was, and what changed overnight. Handover included operational runbooks for the automation layer.",
    ],
    image: "/assets/pla/pla-2.png",
    categories: ["ai", "client"],
    tags: ["Private", "Client work", "AI", "PHP", "n8n"],
    bentoClass: "md:col-span-6",
    stats: [
      { value: "6", label: "AI models" },
      { value: "2.6k+", label: "markets tracked" },
      { value: "8", label: "UI modules" },
      { value: "24/7", label: "Automation" },
    ],
    gallery: Array.from({ length: 8 }, (_, i) => `/assets/pla/pla-${i + 1}.png`),
    techScope: [
      "Multi-model orchestration (Perplexity, DeepSeek, Gemini, Claude, Groq)",
      "Semantic search across 2,600+ market records",
      "n8n pipelines for import, research, and price updates",
      "PHP dashboard with auth, charts, and export",
    ],
    deliverables: [
      "Research terminal UI with market tables, consensus views, and exports",
      "Auth, roles, and session-safe API integrations",
      "n8n workflows for ingest, enrichment, and scheduled updates",
      "Documentation for operators maintaining automations",
    ],
  },
  {
    slug: "virtalent",
    title: "Virtalent VA Platform",
    short: "Custom service-site theme · virtalent.com · Lead-gen funnel",
    description:
      "Virtalent.com — a high-converting virtual assistant service site with a fully custom theme, video-led hero, trust strips, and consultation funnels designed to turn visitors into booked calls.",
    caseStudy: [
      "Virtalent sells high-trust B2B services: the site had to feel premium, explain the offer in seconds, and push visitors toward consultation — not bounce from a generic WordPress skin.",
      "We designed and built a custom theme around their brand green: cinematic hero with video, service grid (admin, marketing, tech support), logo wall, case-study carousel, and repeated consultation CTAs. Forms and tracking were wired for marketing handoff.",
      "The build is live at virtalent.com — real copy, real client logos, real booking flow. This is the same quality bar we bring to directory and product work: custom layout systems, not page-builder soup.",
    ],
    image: "/assets/projects/virtalent-hero.png",
    categories: ["live", "client"],
    tags: ["Live", "Client work", "Lead gen", "Custom theme"],
    liveUrl: "https://virtalent.com",
    bentoClass: "md:col-span-4",
    gallery: [
      "/assets/projects/virtalent-hero.png",
      "/assets/projects/virtalent-services.png",
      "/assets/projects/virtalent-cases.png",
    ],
    deliverables: [
      "Fully custom WordPress theme aligned to Virtalent brand and offer",
      "Video hero, email capture, and consultation CTAs across key scroll depths",
      "Service grid and case-study modules for social proof",
      "Client logo strip and testimonial carousel patterns",
      "Performance-conscious asset loading for marketing traffic",
    ],
  },
  {
    slug: "aura",
    title: "Project Aura",
    short: "Local-first assistant · Memory · Persona engine",
    description:
      "Local-first personal AI — voice I/O, hierarchical memory (ChromaDB), persona engine with trust/mood, approval-gated OS automation, and a terminal UI with a cartoon mascot (not human stock imagery).",
    caseStudy: [
      "Aura is R&D for a personal assistant that stays on your machine: voice in/out, tool use with explicit approval, and memory that compounds across sessions instead of resetting every chat.",
      "The interface layer includes a command terminal, neural map visualisation, memory archive, and system settings — all designed as a cohesive dark product language with cyan telemetry accents (see showcase on the homepage).",
      "Under the hood: four-tier memory, hybrid Ollama + cloud inference, 56+ automated tests, and a mascot-driven persona surface planned for Live2D. This is product design + systems engineering, not a chat wrapper.",
    ],
    image: "/assets/projects/aura-dashboard-hero.png",
    categories: ["rd"],
    tags: ["R&D", "Phase 2", "Python", "Voice AI"],
    bentoClass: "md:col-span-4",
    stats: [
      { value: "56+", label: "Tests passing" },
      { value: "4-tier", label: "Memory system" },
      { value: "Hybrid", label: "Ollama + Bedrock" },
    ],
    gallery: [
      "/assets/projects/aura-dashboard-hero.png",
      "/assets/aura/neural-map.png",
      "/assets/aura/memory-archive.png",
      "/assets/aura/system-settings.png",
      "/assets/projects/aura-mascot.png",
    ],
    deliverables: [
      "Terminal UI with live status, model routing, and log feed",
      "Neural map + memory archive visualisations for long-term recall",
      "Persona engine (trust, mood) with approval-gated automation hooks",
      "Cartoon mascot identity — professional, not photorealistic humans",
      "Test suite and hybrid local/cloud inference path",
    ],
  },
  {
    slug: "panache-designs",
    title: "Panache Designs",
    short: "Luxury interior design studio · Next.js · Premium portfolio",
    description:
      "A premium interior design portfolio for Panache Designs in Noida — showcasing luxury residential and commercial projects with elegant typography, immersive galleries, and consultation booking flows.",
    caseStudy: [
      "Panache Designs needed a sophisticated web presence that reflects their high-end interior work: the site had to feel premium, showcase their portfolio effectively, and convert visitors into consultation bookings.",
      "Built with Next.js and modern web technologies, the site features a cinematic hero section, elegant service showcases, and immersive project galleries. The design system uses warm neutrals and sophisticated typography to match their luxury positioning.",
      "The result is a conversion-focused portfolio that positions Panache as the go-to studio for luxury interiors in Noida's premium residential and commercial sectors.",
    ],
    image: "/assets/projects/panache-hero.png",
    categories: ["live", "client"],
    tags: ["Live", "Client work", "Next.js", "Interior design", "2026"],
    liveUrl: "https://panache.techxtreme.me",
    bentoClass: "md:col-span-4",
    gallery: [
      "/assets/projects/panache-hero.png",
      "/assets/projects/panache-services.png",
      "/assets/projects/panache-contact.png",
      "/assets/projects/panache-portfolio.png",
    ],
    deliverables: [
      "Premium Next.js website with sophisticated design system",
      "Immersive hero section showcasing luxury residential work",
      "Service portfolio grid with residential, commercial, and consultation options",
      "Mobile-optimized galleries and booking flow integration",
      "SEO-optimized content structure for local Noida market",
    ],
  },
  {
    slug: "clientverse",
    title: "Clientverse",
    short: "Automated lead scraper · Reddit & X scanning · AI filtering",
    description:
      "Custom lead generation platform that automatically scans Reddit and X for potential clients using intelligent keyword matching, configurable filtering rules, and real-time monitoring to identify high-quality prospects.",
    caseStudy: [
      "Developed a specialized lead generation tool to automate the time-intensive process of finding potential clients on social platforms. The system runs continuous scans across Reddit and X, filtering posts based on configurable keyword criteria.",
      "Features include hourly automated scanning with manual trigger options, sophisticated keyword pre-filtering (include/exclude logic), lead categorization, and a comprehensive dashboard for monitoring scan progress and managing discovered prospects.",
      "Built with scalability in mind, the platform handles rate limiting, provides detailed analytics on scan performance, and includes advanced settings for fine-tuning discovery algorithms based on specific business requirements.",
    ],
    image: "/assets/projects/clientverse-scans.png",
    categories: ["ai"],
    tags: ["SaaS", "Lead generation", "Automation", "Web scraping", "2026"],
    bentoClass: "md:col-span-4",
    stats: [
      { value: "Hourly", label: "Automated scans" },
      { value: "2", label: "Platform integrations" },
      { value: "Smart", label: "Keyword filtering" },
    ],
    gallery: [
      "/assets/projects/clientverse-scans.png",
      "/assets/projects/clientverse-settings.png",
      "/assets/projects/clientverse-leads.png",
      "/assets/projects/clientverse-profile.png",
    ],
    techScope: [
      "Reddit API integration with rate limiting and error handling",
      "X (Twitter) platform scanning and content analysis", 
      "Configurable keyword matching with include/exclude filters",
      "Automated scan scheduling with manual trigger capabilities",
      "Lead management dashboard with analytics and export features",
    ],
    deliverables: [
      "Full-stack lead scanning platform with intuitive dashboard",
      "Automated Reddit and X content monitoring system",
      "Advanced keyword filtering with boolean logic support",
      "Lead categorization and export functionality",
      "Real-time scan progress tracking and analytics",
    ],
  },
  {
    slug: "study-notes",
    title: "JEE Notes Wallah",
    short: "Client EdTech app · Firebase · Premium note marketplace",
    description:
      "Notes for Toppers, By Toppers — a client EdTech product with Google auth, gated premium notes, Firebase backend, and a full mobile UI suite for JEE preparation.",
    caseStudy: [
      "JEE Notes Wallah targets serious exam prep: topper-authored notes, subject libraries, and a reader experience that feels like studying from a real notebook — not a generic PDF viewer.",
      "We built a distinct orange brand system (shield logo, EdTech pills, dark UI) and product screens for home, library, subjects, and deep reader flows. Auth and paywall architecture use Firebase (Google Sign-In, Firestore, Storage) for a membership SaaS shape.",
      "Below, UI screenshots are shown inside phone frames so stakeholders see how the product reads on device — the same presentation we use before shipping to TestFlight or Play Console.",
    ],
    image: "/assets/projects/jee-notes-wallah-logo.jpg",
    logoCard: true,
    categories: ["client"],
    tags: ["Client work", "EdTech", "Firebase", "Mobile app"],
    bentoClass: "md:col-span-4",
    mobileScreenshots: [
      { src: "/assets/jee/home.png", label: "Home dashboard" },
      { src: "/assets/jee/library.png", label: "Notes library" },
      { src: "/assets/jee/reader.png", label: "Note reader" },
      { src: "/assets/jee/subjects.png", label: "Subject explorer" },
      { src: "/assets/jee/profile.png", label: "Student profile" },
    ],
    deliverables: [
      "Custom orange brand system — logo, typography, and chip language",
      "Mobile UI screenshots: home, library, reader, subject explorer",
      "Google Sign-In and role-based access patterns",
      "Premium note packs with paywall and Firestore content model",
      "Firebase Auth / Firestore / Storage integration",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
