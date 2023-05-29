const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();

  // Open new page
  const page = await context.newPage();

  await page.goto('https://demosite.executeautomation.com/index.html');

  await page.hover('text=Automation Tools');
  await page.hover('a:has-text("BDD")');
  await page.click('text=Specflow');

  // ---------------------
  await context.close();
  await browser.close();
})();