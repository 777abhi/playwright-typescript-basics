import { expect, Locator, Page } from "@playwright/test";

export class Navbar {
  readonly page: Page;
  readonly accountActivityTab: Locator;
  readonly transferFundsTab: Locator;
  readonly payBillsTab: Locator;
  readonly txnDropdown: Locator;
  readonly allTxnTable: Locator;
  readonly noResultsTable: Locator;
  readonly fromAccountDropdown: Locator;
  readonly toAccountDropdown: Locator;
  readonly transferAmountInput: Locator;
  readonly transferDescription: Locator;
  readonly transferContinue: Locator;
  readonly transferHeader2Text: Locator;
  readonly transferSubmitButton: Locator;
  readonly transferAlertSuccess: Locator;

  constructor(page) {
    this.page = page;
    this.accountActivityTab = page.locator("#account_activity_tab");
    this.transferFundsTab = page.locator("#transfer_funds_tab");
    this.payBillsTab = page.locator('#pay_bills_tab');

    this.txnDropdown = page.locator("#aa_accountId");
    this.allTxnTable = page.locator("#all_transactions_for_account tbody tr");
    this.noResultsTable = page.locator(".well");
    this.fromAccountDropdown = page.locator("#tf_fromAccountId");
    this.toAccountDropdown = page.locator("#tf_toAccountId");

    this.transferAmountInput = page.locator("#tf_amount");
    this.transferDescription = page.locator("#tf_description");
    this.transferContinue = page.locator("button[type=submit]");
    this.transferHeader2Text = page.locator("h2.board-header");
    this.transferSubmitButton = page.locator("button[type=submit]");
    this.transferAlertSuccess = page.locator(".alert-success");
  }

  async clickNavbarTab(tabName: string) {
    switch (tabName) {
      case "Account Activity":
        await this.accountActivityTab.click();
        break;
      case "Transfer Funds":
        await this.transferFundsTab.click();
        break;
      case "Pay Bills":
        await this.payBillsTab.click();
        break;
      default:
        console.log("incorrect selection");
    }
  }

  async verifyDefaultSelection() {
    await expect(this.txnDropdown).toContainText("Savings");
  }
  async accountActivityTabTxn(
    dropdownIndex: string,
    dropdownValue: string,
    expectedTxnCount: number
  ) {
    await this.txnDropdown.selectOption(dropdownIndex);
    await expect(this.txnDropdown).toContainText(dropdownValue);

    if (expectedTxnCount == 0) {
      await expect(this.noResultsTable).toBeVisible();
    } else {
      await expect(this.allTxnTable).toHaveCount(expectedTxnCount);
    }
  }

  async transferFunds() {
    await this.fromAccountDropdown.selectOption("1");
    await this.toAccountDropdown.selectOption("2");
    await this.transferAmountInput.type("100");
    await this.transferDescription.type("test Description");
    await this.transferContinue.click();
    await expect(this.transferHeader2Text).toContainText("Verify");
    await this.transferSubmitButton.click();
    await expect(this.transferAlertSuccess).toContainText(
      "You successfully submitted your transaction."
    );
  }
}
