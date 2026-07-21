import { writeFileSync } from "node:fs";

const site = "https://techxtreme.me";
const projectSlugs = [
  "outreachos",
  "project-ap-i",
  "london-museums",
  "pla",
  "virtalent",
  "aura",
  "panache-designs",
  "clientverse",
  "study-notes",
];
const pages = ["/", "/work", "/about", "/contact", ...projectSlugs.map((s) => `/work/${s}`)];
const today = new Date().toISOString().slice(0, 10);

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map((p) => {
    const loc = `${site}${p === "/" ? "" : p}`;
    const priority = p === "/" ? "1.0" : p.startsWith("/work/") ? "0.8" : "0.7";
    const changefreq = p === "/" || p === "/work" ? "weekly" : "monthly";
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  })
  .join("\n")}
</urlset>
`;

writeFileSync("public/sitemap.xml", xml);
console.log(`Wrote sitemap with ${pages.length} URLs`);
