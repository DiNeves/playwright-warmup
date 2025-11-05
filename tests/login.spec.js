import { test, expect } from '@playwright/test';

// @ts-check
test('Login successful', async ({ page }) => {

    await page.goto('/login');
    await page.getByRole('textbox', { name: 'Type your username' }).fill('test');
    await page.getByRole('textbox', { name: 'Type your password' }).fill('password123');
    await page.getByRole('button', { name: 'Login' }).click();

    // Needed to extend timeout to 10ms because the test is slower when running in web-kit (it takes 7.9ms to run) 
    await expect(page.getByText('User successfully logged in!')).toBeVisible();

}),

test('Login blocked', async ({ page }) => {

    await page.goto('/login');
    await page.getByRole('textbox', { name: 'Type your username' }).fill('testblock');
    await page.getByRole('textbox', { name: 'Type your password' }).fill('password123');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText('User blocked!')).toBeVisible();

}),

test('Login with invalid username', async ({ page }) => {

    await page.goto('/login');
    await page.getByRole('textbox', { name: 'Type your username' }).fill('test123');
    await page.getByRole('textbox', { name: 'Type your password' }).fill('password123');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText('User not found!')).toBeVisible();

}),

test('Login with invalid password', async ({ page }) => {

    await page.goto('/login');
    await page.getByRole('textbox', { name: 'Type your username' }).fill('test');
    await page.getByRole('textbox', { name: 'Type your password' }).fill('password1234');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText('Incorrect username or password!')).toBeVisible();

}),

test('Login temporarily blocked', async ({ page }) => {

    await page.goto('/login');
    await page.getByRole('textbox', { name: 'Type your username' }).fill('test');
    await page.getByRole('textbox', { name: 'Type your password' }).fill('password1234');
    await page.getByRole('button', { name: 'Login'}).click({ clickCount: 3 });
    await expect(page.getByText('User temporarily blocked!')).toBeVisible();

});


