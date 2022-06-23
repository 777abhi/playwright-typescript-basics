import { Page, Locator, expect } from "@playwright/test";

export class LoggedInHomePage {
  readonly page: Page;
  readonly feedbackTab: Locator;
  readonly bankingMenu: Locator;
  readonly accountActivityLink: Locator;

  constructor(page) {
    this.page = page;
    this.feedbackTab = page.locator("#feedback");
    this.bankingMenu = page.locator("#onlineBankingMenu");
    this.accountActivityLink = page.locator('#account_activity_link');
  }

  async verifyLoggedInPage() {
    await expect(this.feedbackTab).toContainText("Feedback");
  }
  async visitFeedbackPage() {
    await this.feedbackTab.click();
  }
  async clickBankingMenu() {
    await this.bankingMenu.click();
  }
  async clickAccountActivityLink(){
    await this.accountActivityLink.click();
  }
}
