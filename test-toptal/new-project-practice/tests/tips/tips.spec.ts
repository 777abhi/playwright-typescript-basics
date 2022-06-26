import { test, expect } from "@playwright/test";
import { getRandomNumber, getRandomString } from "../../util/data-helpers";

test.describe("tips & tricks", () => {
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
    test.fixme(browserName == "chromium", "test is not stable, needs fixing");
    await page.goto("https://example.com");
  });

  for (let i = 0; i < 100; i++) {
    test("test random number for iteration " + i, async ({}) => {
      const number = await getRandomNumber();
      console.log(number);
      expect(number < 1000).toBeTruthy();
    });
  }

  test.only("get Random string using crypto", async ({}) => {
    const randomString = await getRandomString();
    console.log(randomString);
  });
});
