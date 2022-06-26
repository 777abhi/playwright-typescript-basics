import { expect, Locator, Page } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly productListTitleText: Locator;
  readonly filterH4Text: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productListTitleText = page.locator(".card-body h5");
    this.filterH4Text = page.locator("#burgundy");
  }

  async getProductList() {
    await this.page.waitForLoadState("networkidle");
    const allProductTitles = await this.productListTitleText.allTextContents();
    console.log(await allProductTitles);
  }
  async assertHomePage() {
    await this.filterH4Text.nth(1).waitFor();
  }
}
