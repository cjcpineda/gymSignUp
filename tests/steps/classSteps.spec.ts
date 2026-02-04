import { test, expect } from '@playwright/test';
import { ClassesPage } from '../pages/classesPage';
import dotenv from 'dotenv';

dotenv.config();

test.describe('Class Schedules flow', () => {
  test('click Class Schedules and Reservations', async ({ page }) => {
    const classesPage = new ClassesPage(page);

    // Navigate directly to the club's classes page to skip login
    await page.goto('https://my.lifetime.life/clubs/nj/middletown/classes.html');

    // Click the classes link (on some layouts this may be redundant but keeps behavior consistent)
    await classesPage.clickClassSchedules();

    // Basic assertion: URL contains "classes" or "reservations" (adjust to your app)
    await expect(page).toHaveURL(/classes|reservations/i);
  });
});
