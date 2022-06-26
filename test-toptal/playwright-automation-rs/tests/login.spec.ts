import { test } from "@playwright/test";
import { LoginPage } from "../page/LoginPage";

test.describe("test suite", () => {
  let loginPage: LoginPage;
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
  });
  test.only("Negative Login Scenario", async () => {
    await loginPage.visit();
    await loginPage.submitLogin("username", "password");
    await loginPage.assertPageTitle();
  });
  test('Positive Login Scenario', async ({page})=>{
    await loginPage.visit();
    await loginPage.submitLogin('rahulshettyacademy', 'learning');
    await loginPage.assertLoggedInPage();
  });
});
