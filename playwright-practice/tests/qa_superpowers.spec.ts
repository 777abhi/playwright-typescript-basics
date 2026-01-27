import { test, expect } from '@playwright/test';

test.describe('QA Superpowers', () => {

    // Use Case 19: Console Log Monitoring
    // Great for catching JavaScript errors developers might miss!
    test('catch console errors', async ({ page }) => {
        // Listen for console logs
        page.on('console', msg => {
            if (msg.type() === 'error') {
                console.log(`🚨 CAUGHT ERROR: "${msg.text()}"`);
            } else {
                console.log(`ℹ️ Console: "${msg.text()}"`);
            }
        });

        await page.goto('https://www.saucedemo.com/');
        // Intentionally trigger a log (SauceDemo doesn't usually throw errors, so we'll just see normal logs)
        await page.evaluate(() => console.log('Hello from inside the browser!'));
        await page.evaluate(() => console.error('This is a fake error for testing!'));
    });

    // Use Case 16: Network Throttling (Slow 3G)
    // Simulate a bad connection to see how the app behaves
    test('simulate slow network', async ({ page, browserName }) => {
        test.skip(browserName !== 'chromium', 'Network throttling is only supported in Chromium');

        // Create a new connection to the browser engine
        const client = await page.context().newCDPSession(page);

        // Tell Chrome to act like Slow 3G
        await client.send('Network.emulateNetworkConditions', {
            offline: false,
            latency: 500, // 500ms ping (slow!)
            downloadThroughput: 500 * 1024 / 8, // 500 kbps
            uploadThroughput: 500 * 1024 / 8,
        });

        console.log('🐢 Loading page on Slow 3G...');
        const startTime = Date.now();
        await page.goto('https://www.saucedemo.com/');
        const duration = Date.now() - startTime;
        console.log(`⏱️ Page loaded in ${duration}ms`);

        await expect(page.locator('.login_logo')).toBeVisible();
    });
});
