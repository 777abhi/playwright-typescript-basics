import { expect, Locator, Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly signInButton: Locator;
  readonly errorMessageText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator("#userEmail");
    this.passwordInput = page.locator("#userPassword");
    this.signInButton = page.locator("#login");
    this.errorMessageText = page.locator("#toast-container div");
  }

  async visit() {
    await this.page.goto("https://www.rahulshettyacademy.com/client/");
  }

  //TODO
  async assertPageTitle() {
    console.log(await this.page.title());
    await expect(this.page).toHaveTitle("Let's Shop");
  }

  async submitLogin(username: string, password: string) {
    await this.usernameInput.type(username);
    await this.passwordInput.type(password);
    await this.signInButton.click();
  }

  async assertIncorrectLoginMessage() {
    console.log(await this.errorMessageText.nth(0).textContent());
    await expect(this.errorMessageText.nth(0)).toContainText(
      "Incorrect email or password."
    );
  }

  async waitForTimeout(timeout_in_ms: number) {
    await this.page.waitForTimeout(timeout_in_ms);
  }
}
