import { test, expect } from '@playwright/test';
import { users } from './data/form';

// Tests if the form is successfully filled for the mocked data contained in the form.js file.
test.describe('Test form page fullfilment for multiple users', () => {
  
  users.forEach(user => {

    test(`Fill the form page with ${user.name}'s data`, async ({ page }) => {
  
      await page.goto('/form');
      await page.getByRole('textbox', { name: 'Name *' }).fill(user.name);
      await page.getByRole('textbox', { name: 'Email *' }).fill(user.email);
      await page.getByRole('textbox', { name: 'Password *' }).fill(user.password);
      await page.getByLabel('Country *').selectOption(user.country);
      await page.getByRole('radio', { name: user.gender, exact: true }).check();
      
      // only search for hobbies if there is, at least, 1 hobby in the user's options
      if (user.hobbies && user.hobbies.length > 0) {
        for (const hobby of user.hobbies) {
          await page.getByRole('checkbox', { name: hobby }).check();
        }
      }
      
      await page.getByRole('button', { name: 'Send' }).click();
      await expect(page.getByText('Success!')).toBeVisible();
      await expect(page.getByText('The form has been submitted')).toBeVisible();
    })
  })
});