// in case POM is not used for some reason

export async function loadHomePage(page) {
  await page.goto("https://example.com");
}

export async function assertPageTitle(page){
    await page.waitForSelector("h1");
}