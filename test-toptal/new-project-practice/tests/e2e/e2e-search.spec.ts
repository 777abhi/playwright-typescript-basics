import { test, expect } from "@playwright/test";
import { HomePage } from "../../page/HomePage";

test.describe("Search results", () => {
  let homePage: HomePage;
  test("should find search results", async ({ page }) => {
    homePage = new HomePage(page);

    await homePage.visit();
    await homePage.searchTerm("bank");
    await homePage.validateNumberOfSearchResultsCount(2);
  });
});
