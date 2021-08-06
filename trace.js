const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  // Open new page
  const page = await context.newPage();

await browser.startTracing(page,{path:'trace.json',screenshots:true, categories:['devtools.timeline']});

  // Go to http://eaapp.somee.com/
  await page.goto('http://eaapp.somee.com/');
  // Click text=Login
  await page.click('text=Login');
  // assert.equal(page.url(), 'http://eaapp.somee.com/Account/Login');
  // Click input[name="UserName"]

  await browser.stopTracing();

  await page.click('input[name="UserName"]');
  // Fill input[name="UserName"]
  await page.fill('input[name="UserName"]', 'admin');
  // Click input[name="Password"]
  await page.click('input[name="Password"]');
  // Fill input[name="Password"]
  await page.fill('input[name="Password"]', 'password');
  // Click text=Log in
  await page.click('text=Log in');
  // assert.equal(page.url(), 'http://eaapp.somee.com/');
  // Click text=Employee List
  await page.click('text=Employee List');
  // assert.equal(page.url(), 'http://eaapp.somee.com/Employee');
  // ---------------------

  
  await context.close();
  await browser.close();
})();