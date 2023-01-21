import { Page, expect, Locator } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly userNameInput: Locator;
  readonly passwordInput: Locator;
  readonly signInBtn: Locator;
  readonly loginForm: Locator;

  constructor(page: Page) {
    this.page = page;
    this.userNameInput = page.locator("#user_login");
    this.passwordInput = page.locator("#user_password");
    this.signInBtn = page.locator('input[value="Sign in"]');
    this.loginForm = page.locator("#login_form");
  }

  async performLogin(username: string, password: string) {
    await this.userNameInput.type(username);
    await this.passwordInput.type(password);
    await this.signInBtn.click();
    await this.page.goBack(); // fix security issue with the test website
  }

  async snapshotLoginForm() {
    expect(await this.loginForm.screenshot()).toMatchSnapshot("login-form.png");
  }
}
