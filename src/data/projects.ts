export type ProjectCategory = "live" | "client" | "ai" | "rd";

export interface Project {
  slug: string;
  title: string;
  short: string;
  description: string;
  image: string;
  logoCard?: boolean;
  categories: ProjectCategory[];
  tags: string[];
  liveUrl?: string;
  featured?: boolean;
  bentoClass?: string;
  stats?: { value: string; label: string }[];
  gallery?: string[];
  deliverables?: string[];
  techScope?: string[];
}

export const projects: Project[] = [
  {
    slug: "london-museums",
    title: "London Museums Directory",
    short: "Client directory at londonmuseums.co.uk · WordPress · SEO · Custom plugin",
    description:
      "Client-built museum directory deployed at londonmuseums.co.uk — search, categories, featured listings, newsletter, and organic traffic growth without paid ads.",
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
      "WordPress directory architecture + custom plugin",
      "Category filters (Art, Science, History, Free museums)",
      "SEO structure, sitemap, meta templates",
      "Newsletter capture + resource pages",
    ],
  },
  {
    slug: "pla",
    title: "Project Logic Arbitrage",
    short: "Enterprise AI research terminal · n8n automation",
    description:
      "Enterprise-grade prediction market research terminal — 2,600+ active markets, multi-model AI consensus, semantic search, and fully automated n8n pipelines. Private client · NDA.",
    image: "/assets/pla/pla-2.png",
    categories: ["ai", "client"],
    tags: ["Private", "Client work", "AI", "PHP", "n8n"],
    bentoClass: "md:col-span-5 md:row-span-2",
    stats: [
      { value: "6", label: "AI models" },
      { value: "2.6k+", label: "Markets tracked" },
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
  },
  {
    slug: "virtalent",
    title: "Virtalent VA Platform",
    short: "Live client site at virtalent.com · UK VA service · Consultation funnel",
    description:
      "High-converting virtual assistant service website built for a UK-based client. Hero funnels, trust logos, video CTAs, case studies, and consultation booking — deployed at virtalent.com.",
    image: "/assets/projects/virtalent-hero.png",
    categories: ["live", "client"],
    tags: ["Live", "Client work", "Lead gen", "Service site"],
    liveUrl: "https://virtalent.com",
    bentoClass: "md:col-span-4",
    gallery: [
      "/assets/projects/virtalent-hero.png",
      "/assets/projects/virtalent-services.png",
      "/assets/projects/virtalent-cases.png",
    ],
    deliverables: [
      "Premium brand positioning — UK's leading VA service narrative",
      "Multi-section homepage with video hero + email capture",
      "Service grid (admin, marketing, tech support)",
      "Client logo strip + testimonial case study carousel",
      "Consultation CTA throughout",
    ],
  },
  {
    slug: "aura",
    title: "Project Aura",
    short: "Local-first assistant · Memory · Persona engine",
    description:
      "Local-first personal AI — voice I/O, hierarchical memory (ChromaDB), persona engine with trust/mood, approval-gated OS automation, and a planned Live2D interface layer.",
    image: "/assets/projects/aura-ui.jpg",
    categories: ["rd"],
    tags: ["R&D", "Phase 2", "Python", "Voice AI"],
    bentoClass: "md:col-span-4",
    stats: [
      { value: "56+", label: "Tests passing" },
      { value: "4-tier", label: "Memory system" },
      { value: "Hybrid", label: "Ollama + Bedrock" },
    ],
    gallery: [
      "/assets/projects/aura-ui.jpg",
      "/assets/projects/aura-holo.jpg",
      "/assets/projects/aura-laptop.jpg",
    ],
  },
  {
    slug: "study-notes",
    title: "JEE Notes Wallah",
    short: "Notes for Toppers — auth, gated premium notes",
    description:
      "Notes for Toppers, By Toppers — monetized JEE study-notes app with Google auth, gated premium content, and Firebase Auth / Firestore / Storage.",
    image: "/assets/projects/jee-notes-wallah-logo.jpg",
    logoCard: true,
    categories: ["rd"],
    tags: ["EdTech", "Firebase", "Prototype"],
    bentoClass: "md:col-span-4",
    deliverables: [
      "Custom orange brand system — not stock education imagery",
      "Google Sign-In and role-based access",
      "Premium note packs with paywall flow",
      "Firestore-backed content delivery",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
