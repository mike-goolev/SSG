import { test, expect } from '@playwright/test';
import { LoginPage } from '../../Pages/login_page';

export const validCredentials = ['practice', 'SuperSecretPassword!'];
const successfullyLoggedInURL = 'https://practice.expandtesting.com/secure';

test('Test log in functionality with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    
    // Navigate to the login page
    await page.goto('https://practice.expandtesting.com/login');

    // Log in with valid credentials
    await loginPage.logIn(validCredentials[0], validCredentials[1]);
    await loginPage.clickSubmitLoginButton();

    // Verify successful login
    await expect(page).toHaveURL(successfullyLoggedInURL);

    const logOutButtonIsVisible = await loginPage.isLogOutButtonVisible();
    expect(logOutButtonIsVisible).toBe(true);
});
