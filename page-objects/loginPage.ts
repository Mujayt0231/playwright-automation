import { Page, expect } from "@playwright/test";
import { loginPageSelectors } from "../selectors/selectors";

export class LoginPage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto("/");
  }

  async login(username: string, password: string) {
    await this.page.locator(loginPageSelectors.usernameField).fill(username);
    await this.page.locator(loginPageSelectors.passwordField).fill(password);
    await this.page.locator(loginPageSelectors.passwordField).press("Enter");
  }

  async verifyInvalidLoginError() {
    await expect(
      this.page.locator(loginPageSelectors.errorMessage)
    ).toContainText("Invalid username or password.");
  }

  async verifyDashboardVisible() {
    await expect(
      this.page.locator(loginPageSelectors.dashboardHeader)
    ).toBeVisible({ timeout: 8000 });
  }
}
