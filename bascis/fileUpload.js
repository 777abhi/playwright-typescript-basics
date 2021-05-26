const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();

  // Open new page
  const page = await context.newPage();

  await page.goto('https://uppy.io/examples/xhrupload/',{"waitUntil":'networkidle'});

  const handle = await page.$('input[type="file"]');
  await handle.setInputFiles('C:/Users/testadmin/Downloads/text.txt');

  // ---------------------
//   await context.close();
//   await browser.close();
})();