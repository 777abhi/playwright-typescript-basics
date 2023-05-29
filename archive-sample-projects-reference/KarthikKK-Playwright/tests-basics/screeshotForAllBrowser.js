const playwright = require('playwright');

(async() => {


    for(const browserType of ['chromium','webkit']){
        
    const browser = await playwright[browserType].launch({

        headless:false
        ,slowMo:50
        ,devtools:true

    });

    const page = await browser.newPage();
    await page.goto("https://executeautomation.com");
    await page.screenshot({path: `ea-${browserType}.png`});

    
}
 //   await browser.close();
    
})();