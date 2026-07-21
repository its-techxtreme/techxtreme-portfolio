import { chromium } from "playwright";
import path from "node:path";

const out = path.resolve("public/assets/projects/outreachos");
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

await page.goto("https://outreachos.techxtreme.me/", { waitUntil: "networkidle", timeout: 60000 });
await page.getByRole("button", { name: /peek the demo/i }).click();
await page.waitForTimeout(4000);
// dismiss tutorial if present
const skip = page.getByRole("button", { name: /skip|got it|close|next|done/i }).first();
if (await skip.isVisible().catch(() => false)) {
  for (let i = 0; i < 8; i++) {
    if (!(await skip.isVisible().catch(() => false))) break;
    await skip.click().catch(() => {});
    await page.waitForTimeout(600);
  }
}
await page.screenshot({ path: path.join(out, "dashboard.png"), type: "png" });
console.log("dashboard ok");

// try lead table / main area scrolled
await page.evaluate(() => window.scrollBy(0, 400));
await page.waitForTimeout(500);
await page.screenshot({ path: path.join(out, "table.png"), type: "png" });

await browser.close();
