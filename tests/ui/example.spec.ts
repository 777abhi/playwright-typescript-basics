import { test, expect } from '@playwright/test';

test('regression - has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('newFeature - has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('sanity - get started link & explore', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();
  await page.getByRole('heading', { name: 'Installation' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Getting StartedInstallation' }).getByRole('link', { name: 'Trace Viewer' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByPlaceholder('Search docs').fill('test');
  await page.getByRole('link', { name: 'Playwright enables reliable end-to-end testing for modern web …' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByPlaceholder('Search docs').fill('test');
  await page.getByRole('link', { name: 'Running Tests' }).click();
  await page.getByRole('link', { name: 'How to run tests from the command line' }).click();

});
