import { test } from "@playwright/test";
import { TestActions } from "../../performance-steps/aptify-create-order";

test.setTimeout(60000);

const memberIds = [
  "2174354",
  "2174381",
  "2174328",
  "2174270",
  "1300894",
  "1209115",
  "2027875",
  "1287506",
];

test("Performance test", async ({ page }) => {
  const actions = new TestActions(page);
  actions.performTestActions("2174270");
});

// test.describe("performancetest", () => {
//   memberIds.forEach((memberId) => {
//     test(`Performance test for memberId ${memberId}`, async ({ page }) => {
//       await page.goto("https://rhapsody-test.aapc.com/Aptify/");

//       await page.getByLabel("USERNAME").fill("AAPCAPIUser");
//       await page.getByLabel("PASSWORD").fill("B2BjGt4Ms3Tm)KbG");
//       await page.click('input[value="Sign In"]');
//       await page.goto(
//         "https://rhapsody-test.aapc.com/Aptify/#/appdashboard/-1"
//       );
//       await page.getByPlaceholder("Search...").fill(memberId);
//       await page.click('span[title="Universal Search"]');
//       await page.click(
//         'div[class="a-search-results-data a-search-container"]>i'
//       );
//       await page.getByRole("button", { name: "Create Order" }).click();

//       await page.getByPlaceholder("Find Product...").click();
//       await page
//         .getByPlaceholder("Find Product...")
//         .fill("Individual Membership");
//       await page
//         .getByRole("option", { name: "Individual Membership  (1)" })
//         .locator("div")
//         .first()
//         .click();
//       await page.getByRole("button", { name: "Add" }).click();

//       await page
//         .locator("//div[@data-fieldname='PaymentTypeID']/span/span")
//         .click();

//       await page
//         .locator("//div[@data-fieldname='PaymentTypeID']/span/span")
//         .click();

//       await page.click(
//         'div[class="k-list-container k-popup k-group k-reset a-KendoMultiColumnDropDown k-state-border-up"] li[data-offset-index="5"]'
//       );
//       await page.click('button[title="Save Record"]');
//       const start = new Date();

//       await page.waitForSelector(
//         "//div[@data-fieldname='OrderStatusID']//span[@class='k-input' and contains(text(),'Shipped')]",
//         {
//           state: "visible",
//           timeout: 15000,
//         }
//       );
//       const end = new Date();
//       const duration = end.getTime() - start.getTime();
//       console.log(`Time taken for 'Shipped' status to appear: ${duration} ms`);
//     });
//   });
// });
