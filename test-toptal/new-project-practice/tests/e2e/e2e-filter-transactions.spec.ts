import { test, expect } from "@playwright/test";

test.describe.only("filter transaction Scenario", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://zero.webappsecurity.com/index.html");
    await page.click("#signin_button");
    await page.type("#user_login", "username");
    await page.type("input[name=user_password]", "password");
    await page.click("input[name=submit]");
    await page.goBack();
  });

  test("filter txn my attempt", async ({ page }) => {
    await page.click("#onlineBankingMenu");
    await page.click("#account_activity_link");

    const defaultSelection = await page.locator("#aa_accountId");
    await expect(defaultSelection).toContainText("Savings");

    await page.selectOption("#aa_accountId", "2");
    let selection = await page.locator("#aa_accountId");
    await expect(selection).toContainText("Checking");

    const checkingAccount = await page.locator(
      "#all_transactions_for_account tbody tr"
    );

    await expect(checkingAccount).toHaveCount(3);

    await page.selectOption('#aa_accountId','4');
    const loanAccount = page.locator('#all_transactions_for_account tbody tr');
    await expect(loanAccount).toHaveCount(2);
    
    await page.selectOption('#aa_accountId','6');
    const noResults = await page.locator('.well');
    await expect(noResults).toBeVisible();
    

    // let tableTxns = await page.locator("tbody > tr");

    // let count = 0;
    // while (count < 1) {
    //   count = await tableTxns.count();
    // }
    // console.log(count);
    // for (let i = 0; i < count; ++i)
    //   console.log(await tableTxns.nth(i).textContent());

    // await page.pause();
  });
});
