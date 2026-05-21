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
    bentoClass: "md:col-span-7 md:row-span-2",
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
    bentoClass: "md:col-span-5 md:row-span-2",
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
