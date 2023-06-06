import deleteUser from "../../support/PageObject/deleteUserPage.cy";
const Data = require("../../fixtures/data.json");

describe("Delete User Test", () => {
  const DeleteUser = new deleteUser();

  it("FPQS50 - Delete User", () => {
    cy.login(Data.validUsername, Data.validPassword);
    cy.get(DeleteUser.adminSidebarBtn).click({ force: true });
    cy.get(DeleteUser.trashBtn).click({ force: true });
    cy.get(DeleteUser.confirmDeleteBtn).click();
    cy.get(DeleteUser.massageSuccessDelete).should("be.visible");
  });
  it("PFQS51 - Delete Admin", () => {
    cy.login(Data.validUsername, Data.validPassword);
    cy.get(DeleteUser.adminSidebarBtn).click({ force: true });
    cy.get(DeleteUser.trashBtnAdmin).click({ force: true });
    cy.get(DeleteUser.massageErrorDelete).should("be.visible");
  });
  it("PFQS68 - Multiple Delete", () => {
    cy.login(Data.validUsername, Data.validPassword);
    cy.get(DeleteUser.adminSidebarBtn).click({ force: true });
    cy.get(DeleteUser.selectAllData).click({ force: true });
    cy.get(DeleteUser.deleteSelectBtn).click({ force: true });
    cy.get(DeleteUser.confirmDeleteAllDataBtn).click({ force: true });
    cy.get(DeleteUser.massageErrorDelete).should("be.visible");
  });
});
