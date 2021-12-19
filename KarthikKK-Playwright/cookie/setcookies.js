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
    await page.goto('http://eaapp.somee.com/Employee/Create');

    const cookies = JSON.parse(fs.readFileSync('./cookies.json', 'utf8'));
    await context.addCookies(cookies);
    
    


    await context.close();
    await browser.close();
})();