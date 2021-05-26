import { it, describe, expect } from "@playwright/test";

it("tests on multiple web pages", async ({ context }) => {
    
  var page = await context.newPage();
  
  // Test function

  // Go to https://www.wikipedia.org/
  await page.goto('https://www.wikipedia.org/');

  // Click text=The Free Encyclopedia
  await page.click('text=The Free Encyclopedia');

  // Click text=Wikipedia
  await page.click('text=Wikipedia');

  // Click input[name="search"]
  await page.click('input[name="search"]');

  // Fill input[name="search"]
  await page.fill('input[name="search"]', 'test');

  // Click button:has-text("Search")
  await page.click('button:has-text("Search")');
  // assert.equal(page.url(), 'https://en.wikipedia.org/wiki/Test');

  // Click text=Test
  await page.click('text=Test');

  // Click #ca-talk >> text=Talk
  await page.click('#ca-talk >> text=Talk');
  // assert.equal(page.url(), 'https://en.wikipedia.org/wiki/Talk:Test');

  // Click text=Protection
  await page.click('text=Protection');
  // assert.equal(page.url(), 'https://en.wikipedia.org/wiki/Talk:Test#Protection');

  // ---------------------
  await context.close();
});