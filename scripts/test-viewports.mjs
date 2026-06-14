import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const baseUrl = process.argv[2] || "http://localhost:5173/";
const outDir = path.resolve("scripts/viewport-screenshots");

const viewports = [
  { name: "mobile", width: 390, height: 844 },
  { name: "mobile-sm", width: 320, height: 568 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "laptop", width: 1280, height: 800 },
  { name: "desktop", width: 1440, height: 900 },
];

await mkdir(outDir, { recursive: true });

const browser = await chromium.launch();
const context = await browser.newContext({ colorScheme: "light" });

const routes = ["/", "/work", "/about", "/contact", "/work/study-notes"];

for (const vp of viewports) {
  for (const route of routes) {
    const page = await context.newPage();
    await page.setViewportSize({ width: vp.width, height: vp.height });
    const url = new URL(route, baseUrl).toString();
    await page.goto(url, { waitUntil: "domcontentloaded" });
    await page.waitForSelector('a[href="/"]', { timeout: 15000 });
    await page.waitForTimeout(2500);
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(300);

    const routeSlug = route === "/" ? "home" : route.slice(1);
    const nav = page.locator("header.fixed").first();
    const navBox = await nav.boundingBox();
    console.log(`${vp.name} ${routeSlug}: nav box`, navBox);

    if (navBox) {
      await page.screenshot({
        path: path.join(outDir, `nav-${vp.name}-${routeSlug}.png`),
        clip: {
          x: Math.max(0, navBox.x - 4),
          y: Math.max(0, navBox.y - 4),
          width: Math.min(vp.width, navBox.width + 8),
          height: navBox.height + 8,
        },
      });
    }

    await page.screenshot({ path: path.join(outDir, `page-${vp.name}-${routeSlug}.png`) });

    const menuBtn = page.getByRole("button", { name: /open menu/i });
    const menuVisible = await menuBtn.isVisible().catch(() => false);
    console.log(`${vp.name} ${routeSlug}: menu visible=${menuVisible}`);

    if (menuVisible) {
      await menuBtn.click();
      await page.waitForTimeout(400);
      await page.screenshot({ path: path.join(outDir, `menu-${vp.name}-${routeSlug}.png`) });
    }

    await page.close();
  }
}

await browser.close();
console.log(`Screenshots saved to ${outDir}`);
