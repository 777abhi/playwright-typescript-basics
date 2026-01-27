import { test, expect } from '@playwright/test';

test('login and pause', async ({ page }) => {
    // 1. Perform the "boring" setup steps automatically
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    // 2. Pause here so you can explore manually!
    // The Playwright Inspector will open, and you can click "Resume" to continue or just use the browser window.
    await page.pause();
});
