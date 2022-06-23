import { Page, Locator, expect } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly signInBtn: Locator;
  readonly searchBox: Locator;
  readonly searchResults: Locator;

  constructor(page: Page) {
    this.page = page;
    this.signInBtn = page.locator("#signin_button");
    this.searchBox = page.locator("#searchTerm");
    this.searchResults = page.locator("li > a");
  }

  async visit() {
    await this.page.goto("http://zero.webappsecurity.com/index.html");
  }

  async clickSignIn() {
    await this.signInBtn.click();
  }

  async searchTerm(term: string) {
    await this.searchBox.type(term);
    await this.page.keyboard.press("Enter");
  }

  async validateNumberOfSearchResultsCount(count: number) {
    await expect(this.searchResults).toHaveCount(count);
  }
}
