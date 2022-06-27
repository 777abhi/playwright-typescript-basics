import {
  Browser,
  BrowserContext,
  expect,
  Locator,
  Page,
} from "@playwright/test";
const settings = require("../stage.settings.json");

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly signInButton: Locator;
  readonly errorMessageText: Locator;
  readonly userRoleDropdown: Locator;
  readonly adminUserRadioButton: Locator;
  readonly termsCheckbox: Locator;
  readonly allLinks: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator("#username");
    this.passwordInput = page.locator("#password");
    this.signInButton = page.locator("#signInBtn");
    this.errorMessageText = page.locator("[style*=block]");
    this.userRoleDropdown = page.locator(".form-control[data-style=btn-info]");
    this.adminUserRadioButton = page.locator(".checkmark");
    this.termsCheckbox = page.locator("#terms");
    this.allLinks = page.locator("a");
  }

  async visit() {
    await this.page.goto(settings.login_loginPagePractise.baseURL);
  }

  async assertPageTitle() {
    console.log(await this.page.title());
    await expect(this.page).toHaveTitle(
      "LoginPage Practise | Rahul Shetty Academy"
    );
  }

  async submitLogin(username: string, password: string) {
    await this.usernameInput.type(username);
    await this.passwordInput.type(password);
    await this.signInButton.click();

    // await Promise.all([
    //   this.page.waitForNavigation(),
    //   this.signInButton.click(),
    // ]);
  }

  async assertIncorrectLoginMessage() {
    console.log(await this.errorMessageText.textContent());
    await expect(this.errorMessageText).toContainText(
      "Incorrect username/password."
    );
  }

  async waitForTimeout(timeout_in_ms: number) {
    await this.page.waitForTimeout(timeout_in_ms);
  }

  async selectUserRoleAs(userRole: string) {
    await this.userRoleDropdown.selectOption(userRole);
  }

  async selectUserAccessLevel(accessLevel: string) {
    if (accessLevel == "user") {
      await this.adminUserRadioButton.last().click();
      await this.page.locator("#okayBtn").click();
      await expect(await this.adminUserRadioButton.last()).toBeChecked();
    } else if (accessLevel == "admin") {
      await this.adminUserRadioButton.first().click();
      await expect(await this.adminUserRadioButton.first()).toBeChecked();
    }
  }
  async selectTerms(terms: string) {
    if (terms == "yes") {
      await this.termsCheckbox.click();
      await expect(this.termsCheckbox).toBeChecked();
    } else {
    }
  }
  async checkBlinkingText(context: BrowserContext) {
    await expect(this.allLinks.first()).toHaveAttribute(
      "class",
      "blinkingText"
    );

    const [newPage] = await Promise.all([
      context.waitForEvent("page"),
      this.allLinks.first().click(),
    ]);

    console.log(await newPage.title());
    console.log(
      await (await newPage.locator(".red").textContent())
        .split("@")[1]
        .split(" ")[0]
    );
  }
}
