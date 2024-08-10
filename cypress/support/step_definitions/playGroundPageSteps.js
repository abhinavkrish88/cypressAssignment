import { Given, When, Then, Before, After } from '@badeball/cypress-cucumber-preprocessor';
import {faker} from '@faker-js/faker';
const a = Math.random().toString(36).substring(2,7);


Before(() => {
  cy.log('Test Setup')
})

After(() => {
  cy.log('Test Teardown')
})

Given('I am in luma page', () => {
  cy.visit('https://magento.softwaretestingboard.com/')
})

Given('I am on Sign up Page', () => {
  cy.get('div.panel.wrapper > div > ul > li:nth-child(3) > a').click();
})

Then('I am filling additional details on signup page', () => {
 
  cy.get('#firstname').type('first');
  cy.get('#lastname').type('last');  
  cy.get('#email_address').type('test@test' + a + '.com');
  cy.get('#password').type('test@12345679');
  cy.get('#password-confirmation').type('test@12345679');
  cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click();
  cy.contains('Thank you for registering with Main Website Store.');
})


Then('Logout from the application', () => {
  cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click()
  cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > .authorization-link > a').click()
})

Then('Sign in into the application', () => {
  cy.get('.panel > .header > .authorization-link > a').click();
  //cy.wait(5000);
  cy.get('#email').type('test@test' + a + '.com');
  cy.get('#pass').type('test@12345679');
  cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click();
  //cy.get(':nth-child(2) > .greet > .logged-in').should('have.text', 'Welcome, First last!')
  cy.contains('first last');

})


