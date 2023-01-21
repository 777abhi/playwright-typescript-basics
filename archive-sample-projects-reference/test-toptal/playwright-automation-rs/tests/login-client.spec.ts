import { test, request, expect } from "@playwright/test";
import { HomePage } from "../page-client/HomePage";
import { LoginPage } from "../page-client/LoginPage";
import { APIUtils } from "../util/APIUtils";
const settings = require("../stage.settings.json");

let loginPage: LoginPage;
let homePage: HomePage;
let apiUtils: APIUtils;

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
    const orderID = await homePage.orderProduct();
    await homePage.viewCreatedOrder(orderID);
  });
});

test.describe("verify E2E scenarios with API + UI mix", () => {
  test.beforeEach(async ({ page }) => {
    const apiContext = await request.newContext();
    apiUtils = new APIUtils(apiContext);

    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
  });
  test("LOGIN via API, create order via UI and view order from UI", async ({
    page,
  }) => {
    const token = await apiUtils.getToken();

    await page.addInitScript((value) => {
      window.localStorage.setItem("token", value);
    }, await token);

    await loginPage.visit();
    await loginPage.assertPageTitle();
    const orderID = await homePage.orderProduct();
    await homePage.viewCreatedOrder(orderID);
  });

  test("LOGIN via API, create order via API and view order from UI", async ({
    page,
  }) => {
    const token = await apiUtils.getToken();

    //Set token for login at UI
    await page.addInitScript((value) => {
      window.localStorage.setItem("token", value);
    }, await token);

    const orderID = await apiUtils.createOrderID(token);

    await loginPage.visit();

    await homePage.viewCreatedOrder(await orderID);
  });
});
