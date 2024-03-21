import {test, expect} from '@playwright/test';
import { LoginPage } from '../Pages/login_page';
test.beforeEach(async ({page}) => {
    await page.goto('https://practice.expandtesting.com/login');
})

test.describe('Check elements visibility', () => {
    test('Verify "Username" input field visibility', async ({page}) => {
        const loginPage = new LoginPage(page);
        const usernameInputFieldIsVisible = await loginPage.isUsernameInputFieldVisible();

        expect(usernameInputFieldIsVisible).toBe(true);
    })

    test('Verify "Password" input field visibility', async ({page}) => {
        const loginPage = new LoginPage(page);
        const passwordInputFieldIsVisible = await loginPage.isPasswordInputFieldVisible();

        expect(passwordInputFieldIsVisible).toBe(true);
    })

    test('Verify "Submit" button visibility', async ({page}) => {
        const loginPage = new LoginPage(page);
        const sumbitButtonIsVisible = await loginPage.isSubmitButtonVisible();

        expect(sumbitButtonIsVisible).toBe(true);
    })
})