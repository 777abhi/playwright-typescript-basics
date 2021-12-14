import { devices, PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
    projects: [
        {

            name: 'ChromeBrowserBasedTests',
            use: {
                browserName: "chromium",
                headless: false,
                video: "on-first-retry",
                screenshot: "only-on-failure"
            }
        },
        {
            name: 'iPhoneBasedTest',
            use: {
                browserName: "webkit",
                ...devices['iPhone 11 Pro Max'],
                headless: false,
                video: "on-first-retry"
            }
        }
    ],

    retries: 1,
    workers: 2,
    timeout: 10000,
    reporter: 'experimental-allure-playwright'

};

export default config;