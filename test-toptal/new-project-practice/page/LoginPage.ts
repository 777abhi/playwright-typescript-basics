import { Page, expect, Locator } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly userNameInput: Locator;
  readonly passwordInput: Locator;
  readonly signInBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.userNameInput = page.locator("#user_login");
    this.passwordInput = page.locator("#user_password");
    this.signInBtn = page.locator('input[value="Sign in"]');
  }

  async performLogin(username: string, passowrd: string) {
    await this.userNameInput.type(username);
    await this.passwordInput.type(passowrd);
    await this.signInBtn.click();
    await this.page.goBack(); // fix security issue with the test website
  }
}
