import { chromium, test } from "@playwright/test";
import { HomePage } from "../page-loginPagePractise/HomePage";
import { LoginPage } from "../page-loginPagePractise/LoginPage";
const settings = require('../stage.settings.json')

let loginPage: LoginPage;
let homePage: HomePage;
const username = settings.login_loginPagePractise.username;
const password = settings.login_loginPagePractise.password;

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

  test('UI dropdown, checkbox, radio control and child window handling', async ({context})=>{
    await loginPage.visit();
    await loginPage.selectUserRoleAs('consult');
    await loginPage.selectUserAccessLevel('user');
    await loginPage.selectUserAccessLevel('admin');
    await loginPage.selectTerms('yes');
    await loginPage.checkBlinkingText(context);
  })
})
