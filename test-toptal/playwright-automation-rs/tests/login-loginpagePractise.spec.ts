import { test } from "@playwright/test";
import { HomePage } from "../page-loginpagePractise/HomePage";
import { LoginPage } from "../page-loginpagePractise/LoginPage";

let loginPage: LoginPage;
let homePage: HomePage;
const username = 'rahulshettyacademy';
const password = 'learning';

test.describe("verify Login Scenarios", () => {
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
  });
  test("Negative Login Scenario", async () => {
    await loginPage.visit();
    await loginPage.assertPageTitle();
    await loginPage.submitLogin("username", "password");
    await loginPage.assertIncorrectLoginMessage();
  });
  test('Positive Login Scenario', async ()=>{
    await loginPage.visit();
    await loginPage.assertPageTitle();
    await loginPage.submitLogin(username, password);
    await homePage.assertHomePage();
  });
});

test.describe('verify after login scenarios', ()=>{
  
  test.beforeEach(async ({page})=>{    
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
  })
  test('display product list at home page', async ()=>{
    await loginPage.visit()
    await loginPage.assertPageTitle();
    await loginPage.submitLogin(username, password) 
    await homePage.assertHomePage();
    await homePage.getProductList();

  })
})
