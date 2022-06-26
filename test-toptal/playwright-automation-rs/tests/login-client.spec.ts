import { test } from "@playwright/test";
import { HomePage } from "../page-client/HomePage";
import { LoginPage } from "../page-client/LoginPage";

let loginPage: LoginPage;
let homePage: HomePage;
const username = 'test@no-reply.com';
const password = 'Test@1234';

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
