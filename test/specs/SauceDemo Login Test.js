import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'

describe("SauceDemo standard user Login Test", () => {
    it("should log in with a valid user", async () => {
        await browser.url("https://www.saucedemo.com/");
        
        const usernameInput = await $("#user-name");
        const passwordInput = await $("#password");
        const loginButton = await $("#login-button");
        
        await usernameInput.setValue("standard_user");
        await passwordInput.setValue("secret_sauce");
        await loginButton.click();
    });
});

