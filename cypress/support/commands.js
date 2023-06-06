// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// Auto Login

// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add("login", (validUsernmae, validPassword) => {
  cy.visit("https://opensource-demo.orangehrmlive.com/");
  cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").type(validUsernmae);
  cy.get(":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input").type(validPassword);
  cy.get(".oxd-button").click();
});

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
