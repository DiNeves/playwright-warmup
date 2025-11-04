import { test, expect } from '@playwright/test';
import { users } from './data/form';

// Tests if the form is successfully filled for the mocked data contained in the form.js file.
test('Form successfully filled', async ({ page }) => {

for (const user of users) {
  await page.goto('/form');
  await page.getByRole('textbox', { name: 'Name *' }).fill(user.name);
  await page.getByRole('textbox', { name: 'Email *' }).fill(user.email);
  await page.getByRole('textbox', { name: 'Password *' }).fill(user.password);
  await page.getByLabel('Country *').selectOption(user.country);
  await page.locator('label').getByText( user.gender, {exact: true} ).click();

  for (const hobbie of user.hobbies) {
    await page.getByRole('checkbox', { name: hobbie }).check();
  }
  
  await page.getByRole('button', { name: 'Send' }).click();
  await expect(page.getByText('Success!')).toBeVisible();
  await expect(page.getByText('The form has been submitted')).toBeVisible();
}
});