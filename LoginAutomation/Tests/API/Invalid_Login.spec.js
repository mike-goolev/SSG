import { test, expect } from '@playwright/test';

test('Test login functionality with invalid credentials', async ({ page }) => {
    // Define the login endpoint URL
    const loginUrl = 'https://practice.expandtesting.com/login';

    // Define invalid credentials
    const invalidCredentials = {
        username: 'invalid_username',
        password: 'invalid_password'
    };

    // Make a POST request to the login endpoint with invalid credentials using Playwright's request API
    try {
        const response = await page.waitForResponse(loginUrl, async () => {
            await page.fill('input[name="username"]', invalidCredentials.username);
            await page.fill('input[name="password"]', invalidCredentials.password);
            await page.click('button[type="submit"]');
        });

        // Verify that the response status code is 401 Unauthorized
        expect(response.status()).toBe(401);

    } catch (error) {
        // Handle any errors that occur during the request
        console.error('Error during login request:', error);
    }
});
