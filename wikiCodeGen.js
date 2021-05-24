const { chromium, devices } = require('playwright');
// const iPhone = devices['iPhone 12 Pro Max'];

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext({
    // ...iPhone,
    // permissions:['geolocation'],
    // geolocation:{latitude:52.52, longitude: 13.39}

  });

  // Open new page
  const page = await context.newPage();

  // Go to https://www.wikipedia.org/
  await page.goto('https://www.wikipedia.org/');

  // Click text=The Free Encyclopedia
  await page.click('text=The Free Encyclopedia');

  // Click text=Wikipedia
  await page.click('text=Wikipedia');

  // Click input[name="search"]
  await page.click('input[name="search"]');

  // Fill input[name="search"]
  await page.fill('input[name="search"]', 'test');

  // Click button:has-text("Search")
  await page.click('button:has-text("Search")');
  // assert.equal(page.url(), 'https://en.wikipedia.org/wiki/Test');

  // Click text=Test
  await page.click('text=Test');

  // Click #ca-talk >> text=Talk
  await page.click('#ca-talk >> text=Talk');
  // assert.equal(page.url(), 'https://en.wikipedia.org/wiki/Talk:Test');

  // Click text=Protection
  await page.click('text=Protection');
  // assert.equal(page.url(), 'https://en.wikipedia.org/wiki/Talk:Test#Protection');

  // ---------------------
  await context.close();
  await browser.close();
})();