const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
    const browser = await chromium.launch({
        headless: false
    });
    const context = await browser.newContext();
    // Open new page
    const page = await context.newPage();

    // Go to http://eaapp.somee.com/
    await page.goto('http://eaapp.somee.com/');
    // Click text=Login
    await page.click('text=Login');
    // assert.equal(page.url(), 'http://eaapp.somee.com/Account/Login');
    // Click input[name="UserName"]


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

    const cookies = await context.cookies();   
    const cookieString = cookies.map(cookie => `${cookie.name}=${cookie.value}`).join('; ');
    const cookieJson = JSON.stringify(cookies);

    fs.writeFileSync('cookies.json', cookieJson);


    await context.close();
    await browser.close();
})();