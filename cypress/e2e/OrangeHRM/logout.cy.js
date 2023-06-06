//  Success
import baseLogout from "../../support/PageObject/logoutPage.cy";
const Data = require("../../fixtures/data.json");

describe("Logout Valid Test", () => {
  const BaseLogout = new baseLogout();

  it("FPQS5 - Logout", () => {
    cy.login(Data.validUsername, Data.validPassword);
    cy.get(BaseLogout.dropdownProfile).click();
    cy.get(BaseLogout.logoutBtn).click();
    cy.get(BaseLogout.validLogoutSuccess).should("be.visible");
  });
});
