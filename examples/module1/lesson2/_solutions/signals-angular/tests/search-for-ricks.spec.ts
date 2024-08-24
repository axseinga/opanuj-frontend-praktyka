import test, { expect } from '@playwright/test';

test("search for Ricks", async ({ page }) => {
    await page.goto("/");

    await page.getByRole("textbox", { name: /Name/i}).fill("Rick");

    await expect(page.getByRole("listitem")).toHaveCount(20);
})

test("search for any Genderless with show Rick only checkbox checked", async ({ page }) => {
    await page.goto("/");

    await page.getByRole("textbox", { name: /Name/i}).fill("");

    await page.locator('select').first().selectOption({ label: 'Genderless' });

    await expect(page.getByRole("listitem")).toHaveCount(0);
})

test("search for Blamph with Gender select set to Uknknown", async ({ page }) => {
    await page.goto("/");

    await page.getByRole("textbox", { name: /Name/i}).fill("Blamph");

    await page.locator("select").first().selectOption({ label: "Unknown" });

    await expect(page.getByRole("listitem").first()).toHaveText("Blamph");
})