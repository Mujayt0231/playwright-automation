import { Page } from "@playwright/test";

export class TestActions {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async performTestActions(memberId: string) {
    await this.page.goto("https://rhapsody-test.aapc.com/Aptify/");
    await this.page.getByLabel("USERNAME").fill("AAPCAPIUser");
    await this.page.getByLabel("PASSWORD").fill("B2BjGt4Ms3Tm)KbG");
    await this.page.click('input[value="Sign In"]');
    await this.page.goto(
      "https://rhapsody-test.aapc.com/Aptify/#/appdashboard/-1"
    );
    await this.page.getByPlaceholder("Search...").fill(memberId);
    await this.page.click('span[title="Universal Search"]');
    await this.page.click(
      'div[class="a-search-results-data a-search-container"]>i'
    );
    await this.page.getByRole("button", { name: "Create Order" }).click();
    await this.page.getByPlaceholder("Find Product...").click();
    await this.page
      .getByPlaceholder("Find Product...")
      .fill("Individual Membership");
    await this.page
      .getByRole("option", { name: "Individual Membership  (1)" })
      .locator("div")
      .first()
      .click();
    await this.page.getByRole("button", { name: "Add" }).click();
    await this.page
      .locator("//div[@data-fieldname='PaymentTypeID']/span/span")
      .click();
    await this.page
      .locator("//div[@data-fieldname='PaymentTypeID']/span/span")
      .click();
    await this.page.click(
      'div[class="k-list-container k-popup k-group k-reset a-KendoMultiColumnDropDown k-state-border-up"] li[data-offset-index="5"]'
    );
    await this.page.click('button[title="Save Record"]');
    const start = new Date();
    await this.page.waitForSelector(
      "//div[@data-fieldname='OrderStatusID']//span[@class='k-input' and contains(text(),'Shipped')]",
      { state: "visible", timeout: 15000 }
    );
    const end = new Date();
    const duration = end.getTime() - start.getTime();
    console.log(`Time taken for 'Shipped' status to appear: ${duration} ms`);
  }
}
