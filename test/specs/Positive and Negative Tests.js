import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'

 describe('Positive Tests', () => {
  ['standard_user', 'locked_out_user', 'problem_user', 'performance_glitch_user', 'error_user', 'visual_user']
    .forEach(user => it(`should log in successfully with ${user}`, () => {
    
    }));
});


describe('Negative Tests', () => {
  ['standard_user', 'locked_out_user', 'problem_user', 'performance_glitch_user', 'error_user', 'visual_user']
    .forEach(user => it(`should fail to log in with ${user} using invalid credentials`, () => {
    
    }));
});
