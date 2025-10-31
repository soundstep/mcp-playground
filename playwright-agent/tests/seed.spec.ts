import { test, expect } from '@playwright/test';

test.describe('ITV Navigation', () => {
  test('navigate to itv.com and test top navigation', async ({ page }) => {
    await page.goto('https://www.itv.com/');

  });
});
