import { test, expect } from "@playwright/test";
import { HomePage } from "../../page/HomePage";
import { LoginPage } from "../../page/LoginPage";
import { LoggedInHomePage } from "../../page/LoggedInHomePage";
import { FeedbackPage } from "../../page/FeedbackPage";

test.describe("feedback form tests", () => {
  let homePage: HomePage;
  let loggedInHomePage: LoggedInHomePage;
  let loginPage: LoginPage;
  let feedbackPage: FeedbackPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    loggedInHomePage = new LoggedInHomePage(page);
    loginPage = new LoginPage(page);
    feedbackPage = new FeedbackPage(page);

    await homePage.visit();
    await homePage.clickSignIn();
    await loginPage.performLogin("username", "password");
    await loggedInHomePage.verifyLoggedInPage();
    await loggedInHomePage.visitFeedbackPage();
  });

  test("feedback form reset/clear form test", async () => {
    await feedbackPage.fillForm("name", "email", "sub", "comment");
    await feedbackPage.clearForm();
    await feedbackPage.validateEmptyForm();
  });

  test("feedback form submit positive", async () => {
    await feedbackPage.fillForm("name", "email", "sub", "comment");
    await feedbackPage.submitForm();
    await feedbackPage.validateSubmitForm();
  });
});
