export class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInputField = page.locator('input[id="username"]');
        this.passwordInputField = page.locator('input[id="password"]');
        this.submitButton = page.locator('button[type="submit"]');
    }

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
}