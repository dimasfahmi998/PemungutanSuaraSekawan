//DONE SUCCESS ALL CASE

import baseLogin from "../../support/PageObject/loginPage.cy";
const Data = require("../../fixtures/data.json");

describe("Login Valid Test", () => {
  const BaseLogin = new baseLogin();

  it("FPQS1 - Valid Login Username and Password", () => {
    cy.visit(BaseLogin.baseUrl);
    cy.get(BaseLogin.username).type(Data.validUsername);
    cy.get(BaseLogin.password).type(Data.validPassword);
    cy.get(BaseLogin.loginBtn).click();
    cy.get(BaseLogin.dasboardText).should("be.visible");
  });
  it("FPQS2 - Filed Login - Invalid Password", () => {
    cy.login(Data.validUsername, Data.invalidPassword);
    cy.get(BaseLogin.MassageWrongPass).should("be.visible");
  });
  it("FPQS3 - Filed Login - Invalid Username", () => {
    cy.login(Data.invalidUsername, Data.validPassword);
    cy.get(BaseLogin.MassageClearUsname).should("be.visible");
  });
  it("FPQS4 - Filed Login - Empty Username and Password", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    cy.get(BaseLogin.loginBtn).click();
  });
});
