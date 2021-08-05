const playwright = require('playwright');

(async() => {

    const browser = await playwright['chromium'].launch({

        headless:false
        ,slowMo:50
        ,devtools:true

    });

    const page = await browser.newPage();
    await page.goto("https://executeautomation.com");
    await page.screenshot({path: `ea-${Date.now}.png`});
    await browser.close();
    
})();