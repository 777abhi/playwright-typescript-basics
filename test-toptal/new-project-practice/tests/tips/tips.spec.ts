import { test, expect } from "@playwright/test";
test.describe.only("tips & tricks", () => {
  test("TestInfo Object", async ({ page }, TestInfo) => {
    await page.goto("https://example.com");
    console.log(TestInfo);
    console.log(TestInfo.title);
    console.log(TestInfo.expectedStatus);
  });

  test("skip browser chromium", async ({ page, browserName }) => {
    test.skip(
      browserName == "chromium",
      "This feature is not ready on chrome browser yet"
    );
    await page.goto("https://example.com");
  });

  test("Fixme annotation", async ({ page, browserName }) => {
    test.fixme(
      browserName == "chromium",
      "test is not stable, needs fixing"
    );
    await page.goto("https://example.com");
  });
});
