import {folio as base} from "@playwright/test"
export {expect} from 'folio';

type Browsers = {

    chrome:string,
    edge:string,
    firefox:string
}

const fixture = base.extend<Browsers>();

fixture.chrome.init(async ({}, run)=>{
    await run("C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe");
});

const folio = fixture.build();
export const it = folio.it;
export const describe = folio.describe;


