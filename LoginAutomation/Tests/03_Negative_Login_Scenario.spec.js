import {test, expect} from '@playwright/test';
import { LoginPage } from '../Pages/login_page';
import {validCredentials} from '../Tests/02_Positive_Login_Scenario.spec';

test.beforeEach(async ({page}) => {
    await page.goto('https://practice.expandtesting.com/login');
})
    
    // declare invalid credentials and error messages
    const invalidUsername = 'incorrectUser';
    const invalidPassword = 'incorrectPassword';
    const expectedInvalidUsernameErrorMessageText = 'Your username is invalid!';
    const expectedInvalidPasswordErrorMessageText = 'Your password is invalid!';

    test('Test log in functionality with invalid username', async ({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.logIn(invalidUsername, validCredentials[1]);
        await loginPage.clickSubmitLoginButton();

        const errorMessageIsVisible = await loginPage.isErrorMessageVisible();
        expect(errorMessageIsVisible).toBe(true);

        const actualInvalidUsernameErrorMessageText = await loginPage.errorMessageText();
        expect(actualInvalidUsernameErrorMessageText).toBe(expectedInvalidUsernameErrorMessageText);
    })

    test('Test log in functionality with invalid password', async ({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.logIn(validCredentials[0], invalidPassword);
        await loginPage.clickSubmitLoginButton();
        
        const errorMessageIsVisible = await loginPage.isErrorMessageVisible();
        expect(errorMessageIsVisible).toBe(true);

        const actualInvalidPasswordErrorMessageText = await loginPage.errorMessageText();
        expect(actualInvalidPasswordErrorMessageText).toBe(expectedInvalidPasswordErrorMessageText);
    })
