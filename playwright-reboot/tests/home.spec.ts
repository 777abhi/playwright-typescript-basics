import { expect, test } from "@playwright/test";

const homePageTitle = "Practice E-Commerce Site – SDET Unicorns";
const appURL = "https://practice.sdetunicorns.com";
const aboutPageTitle = "About – Practice E-Commerce Site";

test.describe("Home", () => {
  
  test('About page validation', async ({ page }) => {
    await page.goto(appURL+"/about");
    await expect(page).toHaveTitle(aboutPageTitle);
  })
  


  
  
  
  test("Open HomePage and verify title", async ({ page }) => {
    await page.goto(appURL);
    await expect(page).toHaveTitle(homePageTitle);
  });
  test("Open HomePage and verify title - failure", async ({ page }) => {
    await page.goto(appURL);
    await expect(page).toHaveTitle(homePageTitle+"with S");
  });
});
