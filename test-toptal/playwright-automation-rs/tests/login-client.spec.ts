import { test } from "@playwright/test";
import { HomePage } from "../page-client/HomePage";
import { LoginPage } from "../page-client/LoginPage";
const settings = require("../stage.settings.json");

let loginPage: LoginPage;
let homePage: HomePage;
const username = settings.login_client.username;
const password = settings.login_client.password;

test.describe("verify Login Scenarios", () => {
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
  });
  test("Negative Login Scenario", async () => {
    await loginPage.visit();
    await loginPage.assertPageTitle();
    await loginPage.submitLogin("username@no-reply.com", "password");
    await loginPage.assertIncorrectLoginMessage();
  });
  test("Positive Login Scenario", async () => {
    await loginPage.visit();
    await loginPage.assertPageTitle();
    await loginPage.submitLogin(username, password);
    await homePage.assertHomePage();
  });
});

test.describe("verify E2E scenarios", () => {
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
  });
  test("order a product on the website", async () => {
    await loginPage.visit();
    await loginPage.assertPageTitle();
    await loginPage.submitLogin(username, password);
    await homePage.assertHomePage();
    await homePage.getProductList();
  });
});
