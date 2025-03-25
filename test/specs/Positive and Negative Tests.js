import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'

  describe ('Positive Tests', () => {
        it('should log in successfully with standard_user')
        it('should log in successfully with locked_out_user')
        it('should log in successfully with problem_user')
        it('should log in successfully with performance_glitch_user')
        it('should log in successfully with error_user')
        it('should log in successfully with visual_user')


})



describe ('Negative Tests', () => {
    it('should fail to log in  with Standard_user')
    it('should fail to log in with Locked_out_user')
    it('should fail to log in with  Problem_user')
    it('should fail to log  in with Performance_glitch_user')
    it('should fail to  log in with Error_user')
    it('should fail to  log in  with Visual_user')


})