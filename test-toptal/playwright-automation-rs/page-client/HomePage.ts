import { expect, Locator, Page } from "@playwright/test";
const settings = require("../stage.settings.json");

export class HomePage {
  readonly page: Page;
  readonly productListTitleText: Locator;
  readonly filterH4Text: Locator;
  readonly allProducts: Locator;
  private orderID: string;

  constructor(page: Page) {
    this.page = page;
    this.productListTitleText = page.locator(".card-body h5");
    this.filterH4Text = page.locator("#burgundy");
    this.allProducts = page.locator(".card-body");
  }

  async orderProduct() {
    await this.page.waitForLoadState("networkidle");
    const allProductTitles = await this.productListTitleText.allTextContents();
    console.log(await allProductTitles);

    //all products
    const totalNumberOfProducts = await this.allProducts.count();
    console.log(totalNumberOfProducts);
    for (let i = 0; i < totalNumberOfProducts; i++) {
      if (
        (await this.allProducts.nth(i).locator("b").textContent()) ==
        "adidas original"
      ) {
        await this.allProducts.nth(i).locator("text=Add to Cart").click();
        break;
      }
    }

    await this.page.locator("[routerlink*='cart']").click();
    expect(
      await this.page.waitForSelector('h3:has-text("adidas original")')
    ).toBeTruthy();
    await this.page.locator("text=Checkout").click();
    await this.page.locator('input[type="text"] >> nth=1').type("123");
    await this.page.locator('input[type="text"] >> nth=2').type("Test Sam");
    await this.page.locator('[placeholder*="Country"]').type("ind", {
      delay: 1000,
    });
    const countryOptionsDropdown = this.page.locator(".ta-results");
    await countryOptionsDropdown.waitFor();
    const countryOptionsDropdownButtons = await countryOptionsDropdown.locator(
      "button"
    );

    for (let i = 0; i < (await countryOptionsDropdownButtons.count()); i++) {
      const text = await countryOptionsDropdown
        .locator("button")
        .nth(i)
        .textContent();
      if (text === " India") {
        countryOptionsDropdown.locator("button").nth(i).click();
        break;
      }
    }

    await expect(
      this.page.locator(".user__name [type='text']").first()
    ).toContainText(settings.login_client.username);
    await this.page.click("a:has-text('PLACE ORDER')");
    await expect(this.page.locator(".hero-primary")).toContainText(
      " Thankyou for the order. "
    );
    this.orderID = await (
      await this.page.locator(".em-spacer-1 .ng-star-inserted").textContent()
    )
      .replace("|", "")
      .replace("|", "")
      .trim();
    console.log(this.orderID);
    return this.orderID;
  }

  async viewCreatedOrder(orderID: string) {
    await this.page.locator("[routerlink*=myorders]").first().click();

    await this.page.locator("tbody").waitFor();

    const allOrdersCount = await this.page.locator("tbody tr").count();
    console.log(allOrdersCount);
    for (let i = 0; i < allOrdersCount; i++) {
      if (
        (await this.page
          .locator("tbody tr")
          .nth(i)
          .locator("th")
          .textContent()) === orderID
      ) {
        console.log("found created orderID as -->" + orderID);
        await this.page
          .locator("tbody tr")
          .nth(i)
          .locator("button")
          .first()
          .click();
        break;
      }
    }
    await expect(this.page.locator(".col-text")).toHaveText(orderID);
  }
  async assertHomePage() {
    await this.filterH4Text.nth(1).waitFor();
  }
}
