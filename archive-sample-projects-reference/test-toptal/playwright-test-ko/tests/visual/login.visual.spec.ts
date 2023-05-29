import { test } from "@playwright/test";
import { HomePage } from "../../page/HomePage";
import { LoginPage } from "../../page/LoginPage";

test.describe("login snapshot visual test", () => {
  let homepage: HomePage;
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    homepage = new HomePage(page);
    loginPage = new LoginPage(page);

    await homepage.visit();
    await homepage.clickSignIn();
  });

  test("login form", async ({ page }) => {
      await loginPage.snapshotLoginForm();
  });
});
