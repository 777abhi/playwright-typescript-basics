import { Page, Locator, expect } from "@playwright/test";

export class FeedbackPage {
  readonly page: Page;
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly subInput: Locator;
  readonly commentInput: Locator;
  readonly clearBtn: Locator;
  readonly sendMessageBtn: Locator;
  readonly feedbackTitle: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nameInput = page.locator("#name");
    this.emailInput = page.locator("#email");
    this.subInput = page.locator("#subject");
    this.commentInput = page.locator("#comment");
    this.clearBtn = page.locator("input[name=clear]");
    this.sendMessageBtn = page.locator("input[name=submit]");
    this.feedbackTitle = page.locator("#feedback-title");
  }

  async fillForm(name: string, email: string, sub: string, comment: string) {
    await this.nameInput.type(name);
    await this.emailInput.type(email);
    await this.subInput.type(sub);
    await this.commentInput.type(comment);
  }
  async clearForm() {
    await this.clearBtn.click();
  }

  async submitForm() {
    await this.sendMessageBtn.click();
  }

  async validateEmptyForm() {
    await expect(this.nameInput).toBeEmpty();
    await expect(this.commentInput).toBeEmpty();
  }

  async validateSubmitForm() {
    await expect(this.feedbackTitle).toBeVisible();
  }
}
