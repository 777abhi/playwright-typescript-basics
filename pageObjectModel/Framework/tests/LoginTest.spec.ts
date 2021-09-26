import {chromium, test} from "@playwright/test"
import {devices} from "playwright"
import {LoginPage} from '../pages/LoginPage';
const data = require('../testData/eadata.json')

test.describe("Run basic E2E EA App site test", async () => {

    test("Navigate and Login EA App site", async ({ context }) => {

        let page = await context.newPage();
        await page.goto("http://www.eaapp.somee.com");
        //create an instance of the LoginPage
        let loginPage = new LoginPage(page);
        await loginPage.ClickLogin();
        await loginPage.Login(data.Login.UserName, data.Login.Password);
        await page.screenshot({path: `eappp.jpg`})
    });
    
    test.only("With Emultion Navigate and Login EA App site", async () => {

        const iPhone = devices['iPhone 12 Pro'];
        const browser = await chromium.launch({
            headless:false
        });

        const context = await browser.newContext({
            ...iPhone,
            videosPath:'videos/'
        })


        let page = await context.newPage();
        await page.goto("http://www.eaapp.somee.com");
        //create an instance of the LoginPage
        let loginPage = new LoginPage(page);
        await loginPage.ClickLogin();
        await loginPage.Login(data.Login.UserName, data.Login.Password);
        await page.screenshot({path: `eappp.jpg`})
    });

});
