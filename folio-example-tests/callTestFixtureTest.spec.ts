import {it} from  '../folio-example/testFixture'

it.only("run the basic test",async ({context})=>{
    var page = await context.newPage();
    await page.goto("https://www.neowin.net");
});