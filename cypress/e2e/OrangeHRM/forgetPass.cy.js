import forgetPassword from "../../support/PageObject/forgetPassPage.cy.js";
const Data = require("../../fixtures/data.json");

describe("Forget Your Password Test", () => {
  const ForgetPassword = new forgetPassword();

  it("FYP", () => {
    cy.visit(ForgetPassword.baseUrl);
    cy.get(ForgetPassword.FYPbutton).click();
    cy.get(ForgetPassword.userName).type(Data.validUsername);
    cy.get(ForgetPassword.restPassBtn).click();
    cy.get(ForgetPassword.textAnnouncement).should("be.visible");
  });
});
