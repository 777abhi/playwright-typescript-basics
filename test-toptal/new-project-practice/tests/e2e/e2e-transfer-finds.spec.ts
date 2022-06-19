import { test, expect } from "@playwright/test";

test.describe("transfer funds and make payments", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://zero.webappsecurity.com/index.html");
    await page.click(".signin");
    await page.type("input[name=user_login]", "username");
    await page.type("input[name=user_password]", "password");
    await page.click('input[value="Sign in"]');
    await page.goBack();
  });
  test("perform transfer", async ({ page }) => {
    await page.click('strong:has-text("Online Banking")');
    await page.click('span:has-text("Transfer Funds")');
    await page.selectOption("#tf_fromAccountId", "2");
    await page.selectOption("#tf_toAccountId", "3");
    await page.type("#tf_amount", "10");
    await page.type("#tf_description", "test transfer");
    await page.click("#btn_submit");

    const verifyHeader = await page.locator("h2.board-header");
    await expect(verifyHeader).toContainText("Verify");

    await page.click("#btn_submit");

    const successMessage = await page.locator(".alert-success");
    await expect(successMessage).toContainText(
      "You successfully submitted your transaction."
    );
  });
});
