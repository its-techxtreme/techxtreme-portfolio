import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const outRoot = path.resolve("public/assets/projects");

async function shot(page, file, fullPage = false) {
  await page.waitForTimeout(1200);
  await page.screenshot({ path: file, fullPage, type: "png" });
  console.log("saved", file);
}

const browser = await chromium.launch();

// --- OutreachOS ---
{
  const dir = path.join(outRoot, "outreachos");
  await mkdir(dir, { recursive: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto("https://outreachos.techxtreme.me/", { waitUntil: "networkidle", timeout: 60000 });
  await shot(page, path.join(dir, "landing.png"));

  // Try demo sign-in
  const demo = page.getByRole("button", { name: /demo|peek|sign in as demo/i }).first();
  if (await demo.isVisible().catch(() => false)) {
    await demo.click();
    await page.waitForTimeout(2500);
    await shot(page, path.join(dir, "dashboard.png"));
  } else {
    // fallback: click any link that looks like demo/login
    const link = page.locator("a,button").filter({ hasText: /demo|sign in|login/i }).first();
    if (await link.isVisible().catch(() => false)) {
      await link.click();
      await page.waitForTimeout(2500);
      await shot(page, path.join(dir, "dashboard.png"));
    }
  }

  // Vector / scripts if present in nav
  for (const [label, name] of [
    [/vector/i, "vector.png"],
    [/script/i, "scripts.png"],
  ]) {
    const nav = page.getByRole("link", { name: label }).first();
    if (await nav.isVisible().catch(() => false)) {
      await nav.click();
      await page.waitForTimeout(1500);
      await shot(page, path.join(dir, name));
    }
  }
  await page.close();
}

// --- Project AP-I ---
{
  const dir = path.join(outRoot, "ap-i");
  await mkdir(dir, { recursive: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto("https://project-ap-i.vercel.app/", { waitUntil: "networkidle", timeout: 60000 });
  await shot(page, path.join(dir, "submit.png"));

  // Find login / admin
  const adminLink = page.locator("a,button").filter({ hasText: /admin|login|sign in|dashboard/i }).first();
  if (await adminLink.isVisible().catch(() => false)) {
    await adminLink.click();
    await page.waitForTimeout(1500);
  } else {
    await page.goto("https://project-ap-i.vercel.app/admin", { waitUntil: "domcontentloaded", timeout: 30000 }).catch(() => {});
    await page.waitForTimeout(1000);
  }

  // Fill demo credentials if login form present
  const user = page.locator('input[name="username"], input[type="text"], input[placeholder*="user" i]').first();
  const pass = page.locator('input[name="password"], input[type="password"]').first();
  if (await user.isVisible().catch(() => false)) {
    await user.fill("ProjectAPIDemo");
    await pass.fill("ProjectAPI@13");
    const submit = page.getByRole("button", { name: /sign in|log in|login|continue/i }).first();
    if (await submit.isVisible().catch(() => false)) await submit.click();
    else await page.keyboard.press("Enter");
    await page.waitForTimeout(2500);
  }
  await shot(page, path.join(dir, "admin.png"));

  for (const [label, name] of [
    [/job|queue/i, "jobs.png"],
    [/fail|review/i, "failed.png"],
    [/account|health/i, "accounts.png"],
  ]) {
    const nav = page.getByRole("link", { name: label }).first();
    if (await nav.isVisible().catch(() => false)) {
      await nav.click();
      await page.waitForTimeout(1500);
      await shot(page, path.join(dir, name));
    }
  }
  await page.close();
}

await browser.close();
console.log("done");
