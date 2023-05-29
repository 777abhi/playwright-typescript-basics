import { ICustomWorld } from '../support/custom-world';
import { Given, When, Then } from '@cucumber/cucumber';

Given('Go to the google website', async function (this: ICustomWorld) {
  const { page } = this;
  await page?.goto('https://google.com');
});

When('search is performed for BDD', async function (this: ICustomWorld) {
  const { page } = this;
  await page?.click('//*[@id="L2AGLb"]/div');
});

Then('BDD search results are displayed', async function () {
  // Write code here that turns the phrase above into concrete actions
});
