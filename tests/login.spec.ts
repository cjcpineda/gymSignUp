import { test, expect } from '@playwright/test';
import { LifetimeLoginPage } from './pages/lifetimeLoginPage';
import dotenv from 'dotenv';

dotenv.config();

test.describe('Lifetime Fitness Login', () => {
  let loginPage: LifetimeLoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LifetimeLoginPage(page);
  });

  test('should successfully login to Lifetime Fitness', async ({ page }) => {
    loginPage = new LifetimeLoginPage(page);

    // Get credentials from environment variables
    const email = process.env.LIFETIME_EMAIL || '';
    const password = process.env.LIFETIME_PASSWORD || '';

    if (!email || !password) {
      throw new Error(
        'Please set LIFETIME_EMAIL and LIFETIME_PASSWORD environment variables'
      );
    }

    // Perform login
    await loginPage.login(email, password);

    // Verify login was successful
    const isLoggedIn = await loginPage.isLoggedIn();
    expect(isLoggedIn).toBe(true);
  });
});
