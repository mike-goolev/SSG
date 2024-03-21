import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/login_page';

test.beforeEach(async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/login');
});

export const validCredentials = ['practice', 'SuperSecretPassword!'];
const successfullyLoggedInURL = 'https://practice.expandtesting.com/secure';

test('Test log in functionality with valid credentials', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.logIn(validCredentials[0], validCredentials[1]);
    await loginPage.clickSubmitLoginButton();

    await expect(page).toHaveURL(successfullyLoggedInURL);

    const logOutButtonIsVisible = await loginPage.isLogOutButtonVisible();
    expect(logOutButtonIsVisible).toBe(true);
})
