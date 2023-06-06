import deleteEmployee from "../../support/PageObject/deleteEmployeePage.cy";
const Data = require("../../fixtures/data.json");

describe("Delete Employee List Test", () => {
  const DeleteEmployee = new deleteEmployee();

  it("FPQS73 - Delete Employee", () => {
    cy.login(Data.validUsername, Data.validPassword);
    cy.get(DeleteEmployee.pimSideBarMenu).click({ force: true });
    cy.get(DeleteEmployee.trashBtn).click({ force: true });
    cy.get(DeleteEmployee.confirmDeleteBtn).click();
    cy.get(DeleteEmployee.massageSuccessDelete).should("be.visible");
  });
  it("PFQS75 - Multiple Delete Employee", () => {
    cy.login(Data.validUsername, Data.validPassword);
    cy.get(DeleteEmployee.pimSideBarMenu).click({ force: true });
    cy.get(DeleteEmployee.selectAllData).click({ force: true });
    cy.get(DeleteEmployee.deleteSelectBtn).click({ force: true });
    cy.get(DeleteEmployee.confirmDeleteAllDataBtn).click();
    cy.get(DeleteEmployee.massageSuccessDelete).should("be.visible");
  });
});
