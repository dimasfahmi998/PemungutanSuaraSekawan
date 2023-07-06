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
Cypress.Commands.add("login", (username, password) => {
  cy.visit("https://aps-rejanglebong.skwn.dev/dev");
  cy.get('#username').type(username)
  cy.get('#password').type(password);
  cy.get('#kt_login_signin_submit').click({ force: true });
  cy.get(':nth-child(3) > .menu-link').click({ force: true });
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
