// KURANG 2 PALING BAWAH SIH
import Search from "../../support/PageObject/SearchPage.cy";
const Data = require("../../fixtures/data.json");

describe("Search Test", () => {
  const search = new Search();

  it("FPQS6 - Search By Username", () => {
    cy.login(Data.validUsername, Data.validPassword);
    cy.get(search.adminSidebarBtn).click();
    cy.get(search.usernameInput).type(Data.validUsername);
    cy.get(search.searchBtn).click({ force: true });
    cy.get(search.vaidateAdminData).should("be.visible");
  });
  it("FPQS7 - Search By User Role", () => {
    cy.login(Data.validUsername, Data.validPassword);
    cy.get(search.adminSidebarBtn).click();
    cy.get(search.userRoleDropDown).click();
    cy.get(search.listbox).contains("Admin").click();
    cy.get(search.searchBtn).click({ force: true });
    cy.get(search.vaidateUserRoleData).should("be.visible");
  });
  it("FPQS8 - Search By Employee Name", () => {
    cy.login(Data.validUsername, Data.validPassword);
    cy.get(search.adminSidebarBtn).click();
    cy.get(search.employeeNameInput).type(Data.validEmployeeName);
    cy.get(search.listbox).contains(Data.validEmployeeName).click();
    cy.get(search.searchBtn).click({ force: true });
    cy.get(search.confirmEmployeeName).should("be.visible");
  });
  it("FPQS9 - Search By Status", () => {
    cy.login(Data.validUsername, Data.validPassword);
    cy.get(search.adminSidebarBtn).click();
    cy.get(search.userStatusDropDown).click();
    cy.get(search.listbox).contains("Disabled").click();
    cy.get(search.searchBtn).click({ force: true });
    cy.get(search.vaidateStatusData).should("be.visible");
  });
  it("FPQS10 - Button Reset", () => {
    cy.login(Data.validUsername, Data.validPassword);
    cy.get(search.adminSidebarBtn).click();
    cy.get(search.usernameInput).type("Admin");
    cy.get(search.resetBtn).click({ force: true });
  });
  it("FPQS11 - Search By Invalid Username", () => {
    cy.login(Data.validUsername, Data.validPassword);
    cy.get(search.adminSidebarBtn).click();
    cy.get(search.usernameInput).type("adminnnn");
    cy.get(search.searchBtn).click({ force: true });
    cy.get(search.noRecordData).should("be.visible");
  });
  it("FPQS12 - Search By Invalid Employee Name", () => {
    cy.login(Data.validUsername, Data.validPassword);
    cy.get(search.adminSidebarBtn).click();
    cy.get(search.employeeNameInput).type("Jadine Jackie");
    cy.get(search.searchBtn).click({ force: true });
    cy.get(search.vaidateInvalidEmployee).should("be.visible");
  });
  it("FPQS13 - Search By Empty All Field", () => {
    cy.login(Data.validUsername, Data.validPassword);
    cy.get(search.adminSidebarBtn).click();
    cy.get(search.searchBtn).click({ force: true });
    cy.get(search.noRecordData).should("be.visible");
  });
});
