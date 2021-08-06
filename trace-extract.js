const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
    const browser = await chromium.launch({
        headless: false
    });
    const context = await browser.newContext();
    // Open new page
    const page = await context.newPage();

    await browser.startTracing(page, { path: 'trace.json', screenshots: true, categories: ['devtools.timeline'] });

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

    await browser.stopTracing();
    // Click text=Log in
    await page.click('text=Log in');
    // assert.equal(page.url(), 'http://eaapp.somee.com/');
    // Click text=Employee List
    await page.click('text=Employee List');
    // assert.equal(page.url(), 'http://eaapp.somee.com/Employee');
    // ---------------------

    const traceInfo = JSON.parse(fs.readFileSync('./trace.json', 'utf-8'));
    const traceData = traceInfo.traceEvents.filter(x => (

        x.cat === 'disabled-by-default-devtools.screenshot' &&
        x.name === 'Screenshot' &&
        typeof x.args !== 'undefined' &&
        typeof x.args.snapshot !== 'undefined'
    ));

    traceData.forEach(function(snap,index){
        fs.writeFile('trace-screenshot-'+index+'.png',snap.args.snapshot,'base64',function(err){
            if(err){
                console.log('write error',err);
            }
        })
    })

    await context.close();
    await browser.close();
})();