import { test, expect } from "@playwright/test";

import { extractCredentials } from "../e2e-helpers/helpers";

// functionality changed on the website, refactor required
test.describe.skip("login / Logout flow", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.phptravels.net/login");
  });

  test("Negative login check", async ({ page }) => {
    await page.type('[placeholder="Email"]', "username@no-reply.com");
    await page.type('[placeholder="Password"]', "password");
    await page.click('button:has-text("Login")');
    const errorMessage = await page.locator(".alert-danger");
    await expect(errorMessage.first()).toContainText(
      "Wrong credentials. try again!"
    );
  });
  test("positive - get login credentoals and perform login and logout", async ({
    page,
  }) => {
    await page.goto("https://www.phptravels.com/demo");
    let [email, password] = await extractCredentials(page);
    await page.goBack();
    await page.type('[placeholder="Email"]', email);
    await page.type('[placeholder="Password"]', password);
    await page.click('button:has-text("Login")');

    const checkLoginSucessElements = await page.locator(".info__desc");
    await expect(checkLoginSucessElements.first()).toContainText(
      "Wallet Balance"
    );
    await expect(checkLoginSucessElements.last()).toContainText(
      "Cancellation made easy and automated"
    );
  });
});
