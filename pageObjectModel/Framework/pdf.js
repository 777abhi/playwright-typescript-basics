const { chromium } = require('playwright');

(async () => {

    const browser = await chromium.launch({
        executablePath: "/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome"
    });

    const context = await browser.newContext({
       
    });

    // Open new page
    const page = await context.newPage();

    // Go to http://eaapp.somee.com/
    await page.goto('http://eaapp.somee.com/');

    // Click text="Login"
    await page.click('text="Login"');

    // Click input[name="UserName"]
    await page.click('#UserName');

    // Fill input[name="UserName"]
    await page.fill('#UserName:visible', 'admin');

    // Click input[name="Password"]
    await page.click('input[name="Password"]');

    // Fill input[name="Password"]
    await page.fill('input[name="Password"]', 'password');

    // Click input[type="submit"]
    await page.click("input:text('Log in')");
    // assert.equal(page.url(), 'http://eaapp.somee.com/');

    // Click text="Employee List"
    await page.click('text="Employee List"');

    await page.pdf({path: 'fullpage.pdf'})


    await browser.close();

})();