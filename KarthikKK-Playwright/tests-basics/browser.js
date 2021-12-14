const {chromium} = require ('playwright');

(async() => {

    const browser = await chromium.launch({
        headless:false
        ,devtools:true
        //,executablePath:
        ,slowMo:3000
    });
    
    const page = await browser.newPage();
    await page.goto('https://executeautomation.com');
    await page.screenshot({ path: `example.png` });
    await browser.close();

})();