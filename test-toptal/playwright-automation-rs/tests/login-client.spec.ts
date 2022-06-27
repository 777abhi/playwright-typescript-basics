import { test, request, expect } from "@playwright/test";
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
    const orderID = await homePage.orderProduct();
    await homePage.viewCreatedOrder(orderID);
  });
});

test.describe("verify E2E scenarios API + UI mix", () => {
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
  });
  test("LOGIN via API, create order via UI and view order from UI", async ({
    page,
  }) => {
    const apiContext = await request.newContext();
    const response = await apiContext.post(
      "https://www.rahulshettyacademy.com/api/ecom/auth/login",
      {
        data: {
          userEmail: "test@no-reply.com",
          userPassword: "Test@1234",
        },
      }
    );

    const responseBody = await response.text();
    await expect(response.ok()).toBeTruthy();
    await expect(response.status()).toBe(200);
    console.log(await JSON.parse(responseBody));

    await page.addInitScript((value) => {
      window.localStorage.setItem("token", value);
    }, JSON.parse(responseBody).token);


    await loginPage.visit();
    await loginPage.assertPageTitle();
    const orderID = await homePage.orderProduct();
    await homePage.viewCreatedOrder(orderID);
    await page.pause();
  });

  test.only("LOGIN via API, create order via API and view order from UI", async ({
    page,
  }) => {
    const apiContext = await request.newContext();

    const responseLogin = await apiContext.post(
      "https://www.rahulshettyacademy.com/api/ecom/auth/login",
      {
        data: {
          userEmail: "test@no-reply.com",
          userPassword: "Test@1234",
        },
      }
    );
    await expect(await responseLogin.ok()).toBeTruthy();
    await expect(await responseLogin.status()).toBe(200);

    const responseLoginJson = await responseLogin.json();
    const responseLoginJsonToken = await responseLoginJson.token;


    const responseCreateOrder = await apiContext.post(
      "https://www.rahulshettyacademy.com/api/ecom/order/create-order",
      {
        data: {
          orders: [
            {
              country: "Cuba",
              productOrderedId: "6262e990e26b7e1a10e89bfa",
            },
          ],
        },
        headers: {
          Authorization: responseLoginJsonToken,
        },
      }
    );

    expect(await responseCreateOrder.ok()).toBeTruthy();
    expect(await responseCreateOrder.status()).toBe(201);

    const responseCreateOrderJson = await responseCreateOrder.json();
    console.log(await responseCreateOrderJson.orders[0]);



    //Set token for login at UI
    await page.addInitScript((value) =>{
      window.localStorage.setItem('token',value);
    },responseLoginJsonToken);





    await loginPage.visit();

    await homePage.viewCreatedOrder(await responseCreateOrderJson.orders[0]);
  });
});
