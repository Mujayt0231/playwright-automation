import { test, expect } from '@playwright/test';


test('aapc home page', async ({ page }) => {
    await page.goto('https://www.aapc.com/');
    await page.close();
  });