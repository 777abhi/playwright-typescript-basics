import {test,expect} from '@playwright/test'

test.describe("feedbackm form tests", () => {
    test.beforeEach(async ({ page }) => {
      await page.goto("http://zero.webappsecurity.com/index.html");
      await page.click("#signin_button");
      await page.type("#user_login", "username");
      await page.type("#user_password", "password");
      await page.click('input[value="Sign in"]');
      await page.goto("http://zero.webappsecurity.com/index.html");
      await page.click('#feedback div:has-text("Feedback")');
    });
  
    test("feedbackform reset/clear form test", async ({ page }) => {
      await page.type("#name", "name");
      await page.type("#email", "email");
      await page.type("#subject", "subject");
      await page.type("#comment", "message");
      await page.click("input[name=clear]");
  
      const elementName = await page.locator("#name");
      await expect(elementName).toBeEmpty();
      const elementComment = await page.locator("#comment");
      await expect(elementComment).toBeEmpty();
    });
  
    test("feedbackform submit positive", async ({ page }) => {
      await page.type("#name", "name");
      await page.type("#email", "email");
      await page.type("#subject", "subject");
      await page.type("#comment", "message");
      await page.click("input[type=submit]");
      await page.waitForSelector('#feedback-title')
  
    });
  });