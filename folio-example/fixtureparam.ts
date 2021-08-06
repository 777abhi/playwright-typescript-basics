import { folio as base } from 'folio'
export { expect } from 'folio';

const fixture = base.extend<{}, { browser: string }, { version: number }>();

fixture.version.initParameter('Browser version', 86);

fixture.browser.init(async ({ version }, runTest) => {

    if (version > 80) {
        console.log("Running latest version of browser and use new driver")
    } else {
        console.log("Running older version of browser and use older driver")
    }
    await runTest('current version: '+ version);


}, { scope: 'worker' });

const folio = fixture.build();
export const it = folio.it;
