import { test, expect } from "@playwright/test";
import { HomePage } from "../../page/HomePage";
import { LoginPage } from "../../page/LoginPage";
import { LoggedInHomePage } from "../../page/LoggedInHomePage";
import { Navbar } from "../../page/components/Navbar";

test.describe("transfer funds and make payments", () => {
  let homePage: HomePage;
  let loginPage: LoginPage;
  let loggedInHomePage: LoggedInHomePage;
  let navbar: Navbar;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);
    loggedInHomePage = new LoggedInHomePage(page);
    navbar = new Navbar(page);

    await homePage.visit();
    await homePage.clickSignIn();
    await loginPage.performLogin("username", "password");
  });
  test("perform transfer", async ({ page }) => {
    await loggedInHomePage.clickBankingMenu();
    await loggedInHomePage.clickAccountActivityLink();
    await navbar.clickNavbarTab("Transfer Funds");
    await navbar.transferFunds();
  });
});
