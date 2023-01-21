import { test, expect } from '@playwright/test';

test('sanity - test to do application', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/');
  await page.goto('https://demo.playwright.dev/todomvc/#/');
  await page.getByPlaceholder('What needs to be done?').click();
  await page.getByPlaceholder('What needs to be done?').fill('test');
  await page.getByPlaceholder('What needs to be done?').press('Enter');
  await page.getByPlaceholder('What needs to be done?').fill('sample');
  await page.getByPlaceholder('What needs to be done?').press('Enter');
  await page.getByPlaceholder('What needs to be done?').fill('hello');
  await page.getByPlaceholder('What needs to be done?').press('Enter');
  await page.getByRole('listitem').filter({ hasText: 'hello' }).getByRole('checkbox', { name: 'Toggle Todo' }).check();
  await page.getByRole('listitem').filter({ hasText: 'test' }).getByRole('checkbox', { name: 'Toggle Todo' }).check();
});