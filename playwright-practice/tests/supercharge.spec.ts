import { test, expect } from '@playwright/test';

// Use Case: Mobile Testing (iPhone 12)
test.describe('Mobile Tests', () => {
    test.use({ viewport: { width: 390, height: 844 } }); // Simulating iPhone 12

    test('mobile login layout', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        // Just checking it looks good!
        await page.screenshot({ path: 'mobile-login.png' });
    });
});

// Use Case: Visual Evidence
test('full page screenshot', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    // Capture the entire scrolling page
    await page.locator('.inventory_list').waitFor(); // Wait for items to load
    await page.screenshot({ path: 'full-inventory.png', fullPage: true });
});

// Use Case: Automated Repetition (Looping)
test('validate multiple items', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/inventory.html');
    // Bypassing login for speed (using cookie injection concept mentioned in guide)
    // Note: In a real app, you'd set cookies. Here we'll just log in quickly.
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    const items = ['Sauce Labs Backpack', 'Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt'];

    for (const item of items) {
        // Dynamic locator based on text!
        const itemLocator = page.locator(`.inventory_item_name`, { hasText: item });
        await expect(itemLocator).toBeVisible();
        console.log(`Verified item: ${item}`);
    }
});
