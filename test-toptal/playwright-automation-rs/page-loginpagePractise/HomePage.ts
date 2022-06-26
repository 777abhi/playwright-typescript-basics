import { expect, Locator, Page } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly productListTitleText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productListTitleText = page.locator(".card-body a");
  }

  async getProductList() {
    console.log(await this.productListTitleText.first().textContent());
    console.log(await this.productListTitleText.last().textContent());

    for (let i = 0; i < 4; i++) {
      console.log(await this.productListTitleText.nth(i).textContent());
    }

    const allProductTitles = await this.productListTitleText.allTextContents();
    console.log(await allProductTitles);
  }
  async assertHomePage() {
    await this.page.waitForSelector("h1.my-4");
  }
}
