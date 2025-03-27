import { $, expect } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('#user-name');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('#login-button');
    }
    
    get topProduct () {
          return $('.inventory_item');
    }
    
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username,password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    async positiveTest(username,password){
        await this.login(username,password)
        await browser.pause(3000)
        await expect(this.topProduct).toExist()
     }

     async negativeTest(username,password){
        await this.login(username,password)
        await browser.pause(3000)
        await expect().toExist('Epic sadface: Username and password do not match any user in this service')
     }
    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('');
    }
}

export default new LoginPage();



 
 





