import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'




describe ("SauceDemo standard user Login Test", () => {
    it("should log in with a valid user", async () => {
       // await browser.url("https://www.saucedemo.com/");
        
        // const usernameInput = await $("#user-name");
        // const passwordInput = await $("#password");
        // const loginButton = await $("#login-button");
        
        // await usernameInput.setValue("standard_user");
        // await passwordInput.setValue("secret_sauce");
        // await loginButton.click();
    describe("sauceDemo PositiveTests",() => {
        it("should log in with a valid user", async () => {
      await LoginPage.open()
      await LoginPage.positiveTest('standard_user', 'secret_sauce') 
      await LoginPage.positiveTest('locked_out_user','secret_sauce')
      await LoginPage.positiveTest('problem_user','secret_sauce')
      await LoginPage.positiveTest('performance_glitch_user','secret_sauce')
      await LoginPage.positiveTest('error_user','secret_sauce')
      await LoginPage.positiveTest('visual_user','secret_sauce')
   
    })
   
   
      describe("SauceDemo NegativeTest", () => {
        it("should fail to log in with a invalid user", async () => {
      
      await LoginPage.open()
      await LoginPage.negativeTest('Standard_user','secret_sauce')
      await LoginPage.negativeTest('Locked_out_user','secret_sauce')
      await LoginPage.negativeTest('Problem_user','secret_sauce' )
      await LoginPage.negativeTest('Performance_glitch_user','secret_sauce')
      await LoginPage.negativeTest('Error_user','secret_sauce')
      await LoginPage.negativeTest('Visual_user','secret_sauce')
     })
    })
})
    })
})
