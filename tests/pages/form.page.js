import { expect } from '@playwright/test';

export class FormPage {
  constructor(page) {
    this.page = page;
    this.header = page.getByRole('heading', { name: 'Form' });
    this.nameInput = page.getByRole('textbox', { name: 'Name *' });
    this.emailInput = page.getByRole('textbox', { name: 'Email *' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password *' });
    this.countrySelect = page.getByLabel('Country *');

    this.genderRadio = (value) => 
        page.getByRole('radio', { name: value, exact: true });
    
    // another way to get the radio element
    // page.locator(`input[name="gender"][value="${value}"]`);

    this.hobbyCheckbox = (value) => 
        page.getByRole('checkbox', { name: value });

    this.genderGroup = page.locator('#genderGroup');
    this.sendButton = page.getByRole('button', { name: 'Send' });
    this.successTitle = page.getByText('Success!');
    this.successBody = page.getByText('The form has been submitted');
  }

  async navigateToForm() {
    await this.page.goto('/form');
  }

  async fillName(username) {
    await this.nameInput.fill(username);    
  }

  async fillEmail(userEmail) {
    await this.emailInput.fill(userEmail);
  }

  async fillPassword(userPassword) {
    await this.passwordInput.fill(userPassword);
  }

  async selectCountry(userCountry) {
    await this.countrySelect.selectOption(userCountry);
  }

  async selectGender(userGender) {
    await this.genderRadio(userGender).check();
  }

  async selectHobbies(userHobbies) {
    for (const hobby of userHobbies) {
        await this.hobbyCheckbox(hobby).check();
        // another way to check for hobbies
        // page.getByRole('checkbox', { name: hobby }).check(); 
    }
  }

  async submitForm() {
    await this.sendButton.click();
  }

  async validateSuccess() {
    await expect(this.page.getByText('Success!')).toBeVisible();
    await expect(this.page.getByText('The form has been submitted')).toBeVisible();
  }
}