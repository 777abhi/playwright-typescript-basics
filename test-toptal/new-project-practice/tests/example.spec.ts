import { test, expect } from "@playwright/test";

test("example", async ({ page }) => {
  await page.goto("http://example.com");
  //let pageTitle = await page.locator('text=Example Domain');
  let pageTitle = await page.locator("h1");
  await expect(pageTitle).toContainText("Example Domain");
});

test("clicking on elements", async ({ page }) => {
  await page.goto("http://zero.webappsecurity.com/index.html");
  await page.click("text=Signin");
  await page.click("text=Sign in");

  const errorMessage = await page.locator(".alert-error");
  await expect(errorMessage).toContainText("Login and/or password are wrong.");
});

test("clicking on elements, working with selectors", async ({ page }) => {
  //text
  await page.click("text=some text");

  //css selectors
  await page.click("button");
  await page.click("#id");
  await page.click(".class");

  //only visible Css Selectors
  await page.click(".submit-button:visible");

  //cobinations
  await page.click("#username .first");

  //xpath
  await page.click("//button[");
});

test.describe("Test suite", () => {
  test("working with inputs @mytag", async ({ page }) => {
    await page.goto("http://zero.webappsecurity.com/index.html");
    await page.click("text=Signin");

    await page.type('input[name="user_login"]', "some username");
    await page.type('input[name="user_password"]', "some password");
    await page.click("text=Sign in");

    const errorMessage = await page.locator(".alert-error");
    await expect(errorMessage).toContainText(
      "Login and/or password are wrong."
    );
  });

  test("Assertions @mytag", async ({ page }) => {
    await page.goto("https://example.com");
    await expect(page).toHaveURL("https://example.com");
    await expect(page).toHaveTitle("Example Domain");
    const element = await page.locator("h1");
    await expect(element).toBeVisible();
    await expect(element).toHaveText("Example Domain");
    await expect(element).toHaveCount(1);

    const nonExistingElement = await page.locator("h5");
    await expect(nonExistingElement).not.toBeVisible();
  });
});

test("Screenshots", async ({ page }) => {
  await page.goto("https://example.com");
  await page.screenshot({ path: "examplefullPage.png", fullPage: true });
});

test('single element screenshot  @ut', async({page}) =>{
await page.goto('https://example.com');
const elemnet = await page.locator('h1');
await elemnet.screenshot({path: 'exampleSingleElement.png'});
});
