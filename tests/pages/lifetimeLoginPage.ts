import { Page } from '@playwright/test';

export class LifetimeLoginPage {
  constructor(private page: Page) {}

  async navigateToLogin() {
    await this.page.goto('https://my.lifetime.life/login');
  }

  async enterEmail(email: string) {
    await this.page.fill('input[id="account-username"]', email);
  }

  async enterPassword(password: string) {
    await this.page.fill('input[type="password"]', password);
  }

  async clickLoginButton() {
    await this.page.click('button[type="submit"]');
  }

  async login(email: string, password: string) {
    await this.navigateToLogin();
    await this.enterEmail(email);
    await this.enterPassword(password);
    await this.clickLoginButton();
  }

  async isLoggedIn(): Promise<boolean> {
    try {
      // Check if we're on a logged-in page
      await this.page.waitForURL('https://my.lifetime.life/clubs/nj/middletown.html', { timeout: 5000 });
      return true;
    } catch {
      return false;
    }
  }
}
