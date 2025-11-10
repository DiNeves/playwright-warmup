import { test, expect } from '@playwright/test';
import { USERS, MESSAGES, HELPER } from './data/loginEnvVars.data';

// Tests several test scenarios in the login page to validate if the login form is working according to the 
// defined requirements using the mocked data contained in the login.js file.
test.describe('Login page tests', () => {

    test('Successful login', async ({ page }) => {
        
        await page.goto(HELPER.goTo.loginUrl);
        await page.getByRole('textbox', { name: HELPER.labels.username }).fill(USERS.validUser.username);
        await page.getByRole('textbox', { name: HELPER.labels.password }).fill(USERS.validUser.password);
        await page.getByRole('button', { name: HELPER.labels.button }).click();
        await expect(page.getByText(MESSAGES.success.validLogin)).toBeVisible();
    }),
    
    test('Failed login due to blocked account', async ({ page }) => {
        
        await page.goto(HELPER.goTo.loginUrl);
        await page.getByRole('textbox', { name: HELPER.labels.username }).fill(USERS.blockedUser.username);
        await page.getByRole('textbox', { name: HELPER.labels.password }).fill(USERS.blockedUser.password);
        await page.getByRole('button', { name: HELPER.labels.button }).click();
        await expect(page.getByText(MESSAGES.errors.failedBlocked)).toBeVisible();
    }),
    
    test('Failed login due to invalid username', async ({ page }) => {
        
        await page.goto(HELPER.goTo.loginUrl);
        await page.getByRole('textbox', { name: HELPER.labels.username }).fill(USERS.invalidUsername.username);
        await page.getByRole('textbox', { name: HELPER.labels.password }).fill(USERS.invalidUsername.password);
        await page.getByRole('button', { name:  HELPER.labels.button }).click();
        await expect(page.getByText(MESSAGES.errors.failedUsername)).toBeVisible();
    }),
    
    test('Failed login due to invalid password', async ({ page }) => {
        
        await page.goto(HELPER.goTo.loginUrl);
        await page.getByRole('textbox', { name: HELPER.labels.username }).fill(USERS.invalidPassword.username);
        await page.getByRole('textbox', { name: HELPER.labels.password }).fill(USERS.invalidPassword.password);
        await page.getByRole('button', { name: HELPER.labels.button }).click();
        await expect(page.getByText(MESSAGES.errors.failedPassword)).toBeVisible();
    }),
    
    test('Failed login after 3 failed login retries', async ({ page }) => {
        
        await page.goto(HELPER.goTo.loginUrl);
        await page.getByRole('textbox', { name: HELPER.labels.username }).fill(USERS.invalidPassword.username);
        await page.getByRole('textbox', { name: HELPER.labels.password }).fill(USERS.invalidPassword.password);
        await page.getByRole('button', { name: HELPER.labels.button }).click({ clickCount: 3 });
        await expect(page.getByText(MESSAGES.errors.failedExceedRetries)).toBeVisible();
    })
});