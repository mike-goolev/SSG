export class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInputField = page.locator('input[id="username"]');
        this.passwordInputField = page.locator('input[id="password"]');
        this.submitButton = page.locator('button[type="submit"]');
    }

    // Functions to check the visibility of an element
    async isUsernameInputFieldVisible() {
        const usernameInputField = this.usernameInputField;
        return await usernameInputField.isVisible();
    }

    async isPasswordInputFieldVisible() {
        const passwordInputField = this.passwordInputField;
        return await passwordInputField.isVisible();
    }

    async isSubmitButtonVisible() {
        const submitButton = this.submitButton;
        return await submitButton.isVisible();
    }

    // methods for filling the Username and Password input fields
    async fillUsername(username) {
        const usernameInputField = this.usernameInputField;
        await usernameInputField.fill(username);
    }

    async fillPassword(password) {
        const passwordInputField = this.passwordInputField;
        await passwordInputField.fill(password);
    }

    // Method to call the fillUsername and fillPassword methods
    async logIn(username, password) {
        await this.fillUsername(username);
        await this.fillPassword(password);
    }

    // Click on Submit button
    async clickSubmitLoginButton() {
        const submitButton = this.submitButton;
        await submitButton.click();
    }
}