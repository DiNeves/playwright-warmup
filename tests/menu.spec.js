// @ts-check
import { test, expect } from '@playwright/test';

// Menu LOGIN validation is the name of the test

test('Menu LOGIN validation', async ({ page }) => {

  await page.goto('https://playground-drab-six.vercel.app/');

  // Expect a title "to contain" a substring.
  // The title must contain the word Playwright for this test to pass.
  // with a await it will wait for that operation 5 seconds by default
  // comparison between what we have on the page and what we are expecting to see (in this case "Playwright page")
  await expect(page).toHaveTitle("Playground page");
  
  await page.getByRole('link', { name: 'LOGIN'}).click();

  await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Login' })).toHaveText(/Login/);
});