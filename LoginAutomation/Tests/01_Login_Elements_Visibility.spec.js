import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/login_page';

test.describe('Check login elements visibility', () => {
    test('Verify "Username" input field visibility', async ({ page }) => {
        await page.goto('https://practice.expandtesting.com/login');

        const loginPage = new LoginPage(page);
        const usernameInputFieldIsVisible = await loginPage.isUsernameInputFieldVisible();
        const passwordInputFieldIsVisible = await loginPage.isPasswordInputFieldVisible();
        const submitButtonIsVisible = await loginPage.isSubmitButtonVisible();

        expect(usernameInputFieldIsVisible).toBe(true);
        expect(passwordInputFieldIsVisible).toBe(true);
        expect(submitButtonIsVisible).toBe(true);
    });
});
