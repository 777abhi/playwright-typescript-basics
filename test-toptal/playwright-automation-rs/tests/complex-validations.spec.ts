import { test, expect } from "@playwright/test";

test.describe("Test SUITE - more complex validation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  });

  test("toBeVisible, toBeHidden", async ({ page }) => {
    await expect(page.locator("#displayed-text")).toBeVisible();
    await page.locator("#hide-textbox").click();
    await expect(page.locator("#displayed-text")).toBeHidden();
  });

  test("Alert pop-up", async ({ page }) => {
    page.on("dialog", (dialog) => dialog.accept());
    await page.locator("#confirmbtn").click();
  });

  test("hover", async({page})=>{
      await page.locator('#mousehover').hover();
  })
  test("frames handle", async ({page})=>{

    await page.locator('#mousehover').scrollIntoViewIfNeeded();
      const framesPage = page.frameLocator('#courses-iframe');
      await framesPage.locator('li a[href*="lifetime-access"]:visible').click();
      await expect((await framesPage.locator('.text h2').textContent()).split(' ')[1]).toContain('13,522');
  })

});
