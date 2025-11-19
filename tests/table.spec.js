import { test, expect } from '@playwright/test';
import hpCharacters from './data/json/hpCharacters.json';

// for arrays the for cycle that is used is for...of condition, instead of the for...in
for (const c of hpCharacters) {
    
    // dynamic locator 
    // with the skip parameter, the dynamic tests generated won't be executed by default.
    test.skip('Character ' + c.name, async ({ page }) => {
        
        await page.goto('/table');

        const nameWithoutSpace = c.name.replace(' ', '');
        
        // the replace is needed because there is a space in the API's name, but the id in the css doesn't contain an empty space.
        // this way, it's replacing the empty space by no space at all.
        await expect(page.locator('#tableCharacterName' + nameWithoutSpace)).toBeVisible();

        // to check if the character's photo is visible
        await expect(page.getByRole('img', { name: c.name })).toBeVisible();

        // the id also has the name of the character without space.
        // this way, it will be applied the same logics of character's name locator.
        await expect(page.locator('#tableCharacterHouse' + nameWithoutSpace)).toBeVisible();
        
        // if condition in a expanded version
        if (c.dateOfBirth) {
            await expect(page.getByRole('cell', { name: c.dateOfBirth })).toBeVisible();
        } else {
            await expect(page.getByRole('cell', { name: 'Unknown' })).toBeVisible();
        }

        // if condition in a lite version
        const birth = c.dateOfBirth ? c.dateOfBirth : 'Unknown';
        await expect(page.getByRole('cell', { name: birth })).toBeVisible();

        console.log(hpCharacters);
    });
}