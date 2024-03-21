export class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInputField = page.locator('input[id="username"]');
        this.passwordInputField = page.locator('input[id="password"]');
        this.loginButton = page.locator('button[type="submit"]');
    }

    async isUsernameInputFieldVisible() {
        const usernameInputField = this.usernameInputField;
        return await usernameInputField.isVisible();
    }

    async isPasswordInputFieldVisible() {
        const passwordInputField = this.passwordInputField;
        return await passwordInputField.isVisible();
    }

    async isLoginButtonVisible() {
        const loginButton = this.loginButton;
        return await loginButton.isVisible();
    }
}