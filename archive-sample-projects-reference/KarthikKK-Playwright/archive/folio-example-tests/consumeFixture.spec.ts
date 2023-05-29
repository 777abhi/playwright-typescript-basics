import {it, expect} from '../folio-example/fixture'

it("get browser path tests", async ({ chrome, firefox, edge}) => {
  console.log(`${chrome}`);
  console.log(`${firefox}`);
  console.log(`${edge}`);

  expect(`${chrome}`).toBe('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe');
});