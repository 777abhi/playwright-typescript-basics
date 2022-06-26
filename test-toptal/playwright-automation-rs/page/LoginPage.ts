import { expect, Locator, Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly signInButton: Locator;
  readonly errorMessageText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator("#username");
    this.passwordInput = page.locator("#password");
    this.signInButton = page.locator("#signInBtn");
    this.errorMessageText = page.locator('[style*=block]')
  }

  async visit() {
    this.page.goto("https://www.rahulshettyacademy.com/loginpagePractise/");
  }

  async assertPageTitle() {
    console.log(await this.page.title());
    await expect(this.page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
  }

  async assertLoggedInPage(){
      await this.page.waitForSelector('h1.my-4');
  }

  async submitLogin(username: string, password: string) {
    await this.usernameInput.type(username);
    await this.passwordInput.type(password);
    await this.signInButton.click();
    console.log(await this.errorMessageText.textContent());
    await expect(this.errorMessageText).toHaveText('Incorrect username/password.');
  }

  async waitForTimeout(timeout_in_ms: number) {
    await this.page.waitForTimeout(timeout_in_ms);
  }
}
