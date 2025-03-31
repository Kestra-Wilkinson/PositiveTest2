import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'





describe("sauceDemo locked_out_user PositiveTest", () => {
    it("should log in with locked_out_user", async () => {
        await LoginPage.open();
        await LoginPage.positiveTest('locked_out_user', 'secret_sauce');
    });
});

describe("sauceDemo problem_user PositiveTest", () => {
    it("should log in with problem_user", async () => {
        await LoginPage.open();
        await LoginPage.positiveTest('problem_user', 'secret_sauce');
        // await LoginPage.logout();
    });
});

describe("sauceDemo performance_glitch_user PositiveTest", () => {
    it("should log in with performance_glitch_user", async () => {
        await LoginPage.open();
        await LoginPage.positiveTest('performance_glitch_user', 'secret_sauce');
        // await LoginPage.logout();
    });
});

describe("sauceDemo error_user PositiveTest", () => {
    it("should log in with error_user", async () => {
        await LoginPage.open();
        await LoginPage.positiveTest('error_user', 'secret_sauce');
        // await LoginPage.logout();
    });
});


    });
});



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
