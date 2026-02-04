import { Page } from '@playwright/test';

export class ClassesPage {
  constructor(private page: Page) {}

  async clickClassSchedules() {
    // Prefer a shorter, stable href-based locator for the club's classes link
    await this.page.click('a[href="/clubs/nj/middletown/classes.html"]');
  }
}
