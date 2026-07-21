import { useEffect } from "react";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL, SOCIAL } from "../../lib/constants";
import { projects } from "../../data/projects";

type SeoProps = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: "website" | "article" | "profile";
  noIndex?: boolean;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
};

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function upsertJsonLd(id: string, data: Record<string, unknown> | Record<string, unknown>[]) {
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement("script");
    el.id = id;
    el.type = "application/ld+json";
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

export function Seo({
  title,
  description = SITE_DESCRIPTION,
  path = "/",
  image = `${SITE_URL}/assets/projects/londonmuseums-home.png`,
  type = "website",
  noIndex = false,
  jsonLd,
}: SeoProps) {
  useEffect(() => {
    const fullTitle = title ? `${title} · ${SITE_NAME}` : `${SITE_NAME} — Remote Digital Studio`;
    const url = `${SITE_URL}${path === "/" ? "" : path}`;
    const absImage = image.startsWith("http") ? image : `${SITE_URL}${image.startsWith("/") ? "" : "/"}${image}`;

    document.title = fullTitle;
    upsertMeta("name", "description", description);
    upsertMeta("name", "robots", noIndex ? "noindex,nofollow" : "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1");
    upsertMeta("name", "author", SITE_NAME);
    upsertLink("canonical", url);

    upsertMeta("property", "og:type", type);
    upsertMeta("property", "og:site_name", SITE_NAME);
    upsertMeta("property", "og:title", fullTitle);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:image", absImage);
    upsertMeta("property", "og:locale", "en_US");

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", fullTitle);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", absImage);

    if (jsonLd) upsertJsonLd("seo-jsonld-page", jsonLd);
  }, [title, description, path, image, type, noIndex, jsonLd]);

  return null;
}

/** Sitewide graph — keep separate from per-page JSON-LD */
export function SiteJsonLd() {
  useEffect(() => {
    upsertJsonLd("seo-jsonld-site", [organizationJsonLd(), websiteJsonLd()]);
  }, []);
  return null;
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    email: "techxtremebuisness@gmail.com",
    description: SITE_DESCRIPTION,
    foundingDate: "2024",
    areaServed: "Worldwide",
    sameAs: [SOCIAL.github],
    knowsAbout: [
      "Web development",
      "WordPress custom themes",
      "SEO directories",
      "AI platforms",
      "Workflow automation",
      "Lead generation software",
      "Next.js",
      "n8n",
    ],
    makesOffer: {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Custom websites, directories, and AI platforms",
      },
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en",
  };
}

export function projectsItemListJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Techxtreme portfolio projects",
    itemListElement: projects.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE_URL}/work/${p.slug}`,
      name: p.title,
      description: p.short,
    })),
  };
}

export function projectJsonLd(slug: string) {
  const p = projects.find((x) => x.slug === slug);
  if (!p) return null;
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: p.title,
    description: p.description,
    url: `${SITE_URL}/work/${p.slug}`,
    image: `${SITE_URL}${p.image}`,
    creator: { "@id": `${SITE_URL}/#organization` },
    keywords: p.tags.join(", "),
    ...(p.liveUrl ? { sameAs: [p.liveUrl] } : {}),
  };
}
