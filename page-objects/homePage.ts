import { Page, expect } from "@playwright/test";
import { homePageSelectors } from "../selectors/selectors";

export class HomePage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto("/");
  }

  async verifyJoinUsBanner() {
    await expect(
      this.page.locator(homePageSelectors.joinUsBanner)
    ).toBeVisible();
  }

  async clickSignIn() {
    await this.page.locator(homePageSelectors.signInLink).click();
  }
}
