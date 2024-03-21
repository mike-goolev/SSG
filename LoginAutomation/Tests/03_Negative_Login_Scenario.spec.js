import {test, expect} from '@playwright/test';
import { LoginPage } from '../Pages/login_page';

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
        await loginPage.logIn(invalidUsername, 'SuperSecretPassword!');
        await loginPage.clickSubmitLoginButton();

        const usernameErrorMessageIsVisible = await loginPage.isUsernameErrorMessageVisible();
        // const errorMessageIsVisible = await loginPage.isUsernameErrorMessageVisible();
        expect(usernameErrorMessageIsVisible).toBe(true);

        const actualInvalidUsernameErrorMessageText = await loginPage.errorMessageText();
        expect(actualInvalidUsernameErrorMessageText).toBe(expectedInvalidUsernameErrorMessageText);
    })

    // test('Test log in functionality with invalid password', async ({page}) => {
    //     const loginPage = new LoginPage(page);
    //     await loginPage.logIn('practice', invalidPassword);
    //     await loginPage.clickSubmitLoginButton();
        
    //     const passwordErrorMessageIsVisible = await loginPage.isPasswordErrorMessageVisible();
    //     expect(passwordErrorMessageIsVisible).toBe(true);

    //     const actualInvalidPasswordErrorMessageText = await loginPage.errorMessageText();
    //     expect(actualInvalidPasswordErrorMessageText).toBe(expectedInvalidPasswordErrorMessageText);
    // })