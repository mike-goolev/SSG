import { test, expect } from '@playwright/test';

test('Test login functionality with valid credentials', async ({ page }) => {
    // Define the login endpoint URL
    const loginUrl = 'https://practice.expandtesting.com/login';

    // Define the valid credentials
    const validCredentials = {
        username: 'practice',
        password: 'SuperSecretPassword!'
    };

    // Measure the time taken to make the request
    const startTime = Date.now();

    // Make a POST request to the login endpoint with valid credentials using Playwright's request API
    try {
        const response = await page.waitForResponse(loginUrl, async () => {
            await page.fill('input[name="username"]', validCredentials.username);
            await page.fill('input[name="password"]', validCredentials.password);
            await page.click('button[type="submit"]');
        });

        // Verify that the response status code is 200 OK
        expect(response.status()).toBe(200);

    } catch (error) {
        // Handle any errors that occur during the request
        console.error('Error during login request:', error);
    }
});
