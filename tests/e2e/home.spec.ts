import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test("renders the complete portfolio", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", { level: 1, name: /your name/i }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Thoughtful work, built to last." }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "A practical toolkit." }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Selected work, described honestly." }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Where the work happens." }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Foundations and continued learning." }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Let's build something considered." }),
  ).toBeVisible();
});

test("navigation targets exist and work", async ({ page }) => {
  await page.goto("/");

  const footerNav = page.getByRole("navigation", { name: "Footer" });
  const links = footerNav.getByRole("link");

  for (const href of [
    "#about",
    "#skills",
    "#projects",
    "#experience",
    "#education",
    "#contact",
  ]) {
    await expect(page.locator(href)).toHaveCount(1);
    await expect(footerNav.locator(`a[href="${href}"]`)).toHaveCount(1);
  }

  await expect(links).toHaveCount(6);
  await footerNav.getByRole("link", { name: "Projects" }).click();
  await expect(page).toHaveURL(/#projects$/);
});

test("theme toggle switches and persists", async ({ page }) => {
  await page.goto("/");
  const toggle = page.getByRole("button", { name: "Toggle color theme" });
  const wasDark = await page.evaluate(() =>
    document.documentElement.classList.contains("dark"),
  );

  await toggle.click();

  await expect
    .poll(() =>
      page.evaluate(() => document.documentElement.classList.contains("dark")),
    )
    .toBe(!wasDark);

  await page.reload();
  await expect
    .poll(() =>
      page.evaluate(() => document.documentElement.classList.contains("dark")),
    )
    .toBe(!wasDark);
});

test("mobile navigation opens, closes, and supports Escape", async ({
  page,
}) => {
  const width = page.viewportSize()?.width ?? 1280;
  test.skip(width >= 768, "Mobile navigation is only shown on narrow screens.");

  await page.goto("/");
  const openButton = page.getByRole("button", { name: "Open menu" });

  await openButton.click();
  const mobileNav = page.getByRole("navigation", { name: "Mobile" });
  await expect(mobileNav).toBeVisible();

  await page.keyboard.press("Escape");
  await expect(mobileNav).toBeHidden();
  await expect(openButton).toBeFocused();

  await openButton.click();
  await mobileNav.getByRole("link", { name: "Contact" }).click();
  await expect(mobileNav).toBeHidden();
  await expect(page).toHaveURL(/#contact$/);
});

test("verified contact link is usable", async ({ page }) => {
  await page.goto("/");

  const emailLinks = page.locator('a[href="mailto:hello@example.com"]');
  await expect(emailLinks.first()).toBeVisible();
  await expect(emailLinks.first()).toHaveAttribute(
    "href",
    "mailto:hello@example.com",
  );
});

test("page does not overflow horizontally", async ({ page }) => {
  await page.goto("/");

  const overflow = await page.evaluate(
    () =>
      document.documentElement.scrollWidth -
      document.documentElement.clientWidth,
  );

  expect(overflow).toBeLessThanOrEqual(1);
});

test("home page has no serious accessibility violations", async ({ page }) => {
  await page.goto("/");

  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
    .analyze();

  const serious = results.violations.filter(
    (violation) =>
      violation.impact === "critical" || violation.impact === "serious",
  );

  expect(
    serious.map((violation) => ({
      id: violation.id,
      help: violation.help,
      targets: violation.nodes.map((node) => node.target),
    })),
  ).toEqual([]);
});

test("page loads without console errors", async ({ page }) => {
  const errors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  page.on("pageerror", (error) => errors.push(error.message));

  await page.goto("/");
  await page.waitForLoadState("networkidle");

  expect(errors).toEqual([]);
});
