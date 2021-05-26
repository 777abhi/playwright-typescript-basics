import {folio} from "@playwright/test"

const fixtures = folio.extend();
fixtures.browserOptions.override(async({},run) =>{
    await run({
        headless:false
    });
    });
const {it} = fixtures.build();

it ("run the basic test",async ({context})=>{
    var page = await context.newPage();
    await page.goto("https://www.neowin.net");
});