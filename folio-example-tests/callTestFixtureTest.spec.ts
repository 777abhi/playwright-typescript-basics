import { it, test } from '../folio-example/testFixture'

it("run the basic test", async ({ context }) => {
    var page = await context.newPage();
    await page.goto("https://www.neowin.net");
});


it("skip for firefox test", async ( test, {browserName} ) => {
    test.skip(browserName === 'firefox', 'skip as does not support isMobile Option')
}, async ({ page }) => {

await page.goto("https://www.neowin.net");

});