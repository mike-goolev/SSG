export class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInputField = page.locator('input[id="username"]');
        this.passwordInputField = page.locator('input[id="password"]');
        this.submitButton = page.locator('button[type="submit"]');
        this.logOutButton = page.locator('.button.secondary.radius');
        this.usernameErrorMessage = page.locator('//div[@id="flash-message"]//b[contains(text(), "Your username is invalid!")]');
        this.passwordErrorMessage = page.locator('//div[@id="flash-message"]//b[contains(text(), "Your password is invalid!")]');


    }

    //Check the visibility of Username element
    async isUsernameInputFieldVisible() {
        const usernameInputField = this.usernameInputField;
        return await usernameInputField.isVisible();
    }

    //Check the visibility of Password element
    async isPasswordInputFieldVisible() {
        const passwordInputField = this.passwordInputField;
        return await passwordInputField.isVisible();
    }

    //Check the visibility of Login button
    async isSubmitButtonVisible() {
        const submitButton = this.submitButton;
        return await submitButton.isVisible();
    }

    // Fill Username input field
    async fillUsername(username) {
        const usernameInputField = this.usernameInputField;
        await usernameInputField.fill(username);
    }

    // Fill Password input field
    async fillPassword(password) {
        const passwordInputField = this.passwordInputField;
        await passwordInputField.fill(password);
    }

    // Call the fillUsername and fillPassword methods
    async logIn(username, password) {
        await this.fillUsername(username);
        await this.fillPassword(password);
    }

    // Click on Submit button
    async clickSubmitLoginButton() {
        const submitButton = this.submitButton;
        await submitButton.click();
    }

    // Check if Logout button is visible
    async isLogOutButtonVisible() {
        const logOutButton = this.logOutButton;
        return await logOutButton.isVisible();
    }

    // Check visibility of Username error message
    async isUsernameErrorMessageVisible() {
        const usernameErrorMessage = this.usernameErrorMessage;
        return await usernameErrorMessage.isVisible();
    }

    // Check visibility of Password error message
    async isPasswordErrorMessageVisible() {
        const passwordErrorMessage = this.passwordErrorMessage;
        return await passwordErrorMessage.isVisible();
    }

    // Check text of error message
    async errorMessageText() {
        const errorMessage = this.errorMessage;
        return await errorMessage.textContent();
    }

}