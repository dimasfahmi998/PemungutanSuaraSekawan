import editUser from "../../support/PageObject/editUser.cy";
const Data = require("../../fixtures/data.json");
const { generateRandomString } = require("../../support/utils");

describe("Edit User Test", () => {
  const EditUser = new editUser();
  const randomUsername = generateRandomString(8);

  it("FPQS52 - Edit All Field", () => {
    cy.login(Data.validUsername, Data.validPassword);
    cy.get(EditUser.adminSidebarBtn).click();
    cy.get(EditUser.editBtn).click({ force: true });
    cy.get(EditUser.dropdownUserRole).click();
    cy.get(EditUser.listbox).contains(Data.validUserRoleInput).click();
    cy.get(EditUser.dropdownStatus).click();
    cy.get(EditUser.listbox).contains(Data.validStatusInput).click();
    cy.get(EditUser.userNameInput).clear().type(randomUsername);
    cy.get(EditUser.employeeNameInput).clear().type(Data.editDataEmployeeName);
    cy.get(EditUser.listbox).contains(Data.editDataEmployeeName).click();
    cy.get(EditUser.ceklistEditPass).click({ force: true });
    cy.get(EditUser.passwordInput).type(Data.validPasswordAdd);
    cy.get(EditUser.confirmPasswordinput).type(Data.validPasswordAdd);
    cy.get(EditUser.saveBtn).click();
    cy.get(EditUser.successEditMassage).should("be.visible");
  });
  it("FPQS53 - Edit Empty All Field", () => {
    cy.login(Data.validUsername, Data.validPassword);
    cy.get(EditUser.adminSidebarBtn).click();
    cy.get(EditUser.editBtn).click({ force: true });
    cy.get(EditUser.dropdownUserRole).click();
    cy.get(EditUser.listbox).contains(Data.selectData).click();
    cy.get(EditUser.dropdownStatus).click();
    cy.get(EditUser.listbox).contains(Data.selectData).click();
    cy.get(EditUser.userNameInput).clear();
    cy.get(EditUser.employeeNameInput).clear();
    cy.get(EditUser.ceklistEditPass).click({ force: true });
    cy.get(EditUser.passwordInput).clear();
    cy.get(EditUser.confirmPasswordinput).clear();
    cy.get(EditUser.saveBtn).click();
    cy.get(EditUser.massageEmptyUserRole).should("be.visible");
    cy.get(EditUser.massageEmptyEmployeeName).should("be.visible");
    cy.get(EditUser.massageEmptyStatus).should("be.visible");
    cy.get(EditUser.massageEmptyUserName).should("be.visible");
    cy.get(EditUser.massageEmptyPassword).should("be.visible");
    cy.get(EditUser.massageConfirmPasswordEmpty).should("be.visible");
  });
  it("FPQS54 - Edit Empty All Field Except Password ", () => {
    cy.login(Data.validUsername, Data.validPassword);
    cy.get(EditUser.adminSidebarBtn).click();
    cy.get(EditUser.editBtn).click({ force: true });
    cy.get(EditUser.dropdownUserRole).click();
    cy.get(EditUser.listbox).contains(Data.selectData).click();
    cy.get(EditUser.dropdownStatus).click();
    cy.get(EditUser.listbox).contains(Data.selectData).click();
    cy.get(EditUser.userNameInput).clear();
    cy.get(EditUser.employeeNameInput).clear();
    cy.get(EditUser.saveBtn).click();
    cy.get(EditUser.massageEmptyUserRole).should("be.visible");
    cy.get(EditUser.massageEmptyEmployeeName).should("be.visible");
    cy.get(EditUser.massageEmptyStatus).should("be.visible");
    cy.get(EditUser.massageEmptyUserName).should("be.visible");
  });
  it("FPQS56 - Edit All Field Except Password", () => {
    cy.login(Data.validUsername, Data.validPassword);
    cy.get(EditUser.adminSidebarBtn).click();
    cy.get(EditUser.editBtn).click({ force: true });
    cy.get(EditUser.dropdownUserRole).click();
    cy.get(EditUser.listbox).contains(Data.validUserRoleInput).click();
    cy.get(EditUser.dropdownStatus).click();
    cy.get(EditUser.listbox).contains(Data.validStatusInput).click();
    cy.get(EditUser.userNameInput).clear().type(randomUsername);
    cy.get(EditUser.employeeNameInput).clear().type(Data.editDataEmployeeName);
    cy.get(EditUser.listbox).contains(Data.editDataEmployeeName).click();
    cy.get(EditUser.saveBtn).click();
    cy.get(EditUser.successEditMassage).should("be.visible");
  });
  it("FPQS57 - Edit User Role", () => {
    cy.login(Data.validUsername, Data.validPassword);
    cy.get(EditUser.adminSidebarBtn).click();
    cy.get(EditUser.editBtn).click({ force: true });
    cy.get(EditUser.dropdownUserRole).click();
    cy.get(EditUser.listbox).contains(Data.validUserRoleInput).click();
    cy.get(EditUser.saveBtn).click();
    cy.get(EditUser.successEditMassage).should("be.visible");
  });
  it("FPQS58 - Edit Employee Name Valid Data", () => {
    cy.login(Data.validUsername, Data.validPassword);
    cy.get(EditUser.adminSidebarBtn).click();
    cy.get(EditUser.editBtn).click({ force: true });
    cy.get(EditUser.employeeNameInput).clear().type(Data.editDataEmployeeName);
    cy.get(EditUser.listbox).contains(Data.editDataEmployeeName).click();
    cy.get(EditUser.saveBtn).click();
    cy.get(EditUser.successEditMassage).should("be.visible");
  });
  it("FPQS59 - Edit Status", () => {
    cy.login(Data.validUsername, Data.validPassword);
    cy.get(EditUser.adminSidebarBtn).click();
    cy.get(EditUser.editBtn).click({ force: true });
    cy.get(EditUser.dropdownStatus).click();
    cy.get(EditUser.listbox).contains(Data.validStatusInput).click();
    cy.get(EditUser.saveBtn).click();
    cy.get(EditUser.successEditMassage).should("be.visible");
  });
  it("FPQS60 - Edit Username", () => {
    cy.login(Data.validUsername, Data.validPassword);
    cy.get(EditUser.adminSidebarBtn).click();
    cy.get(EditUser.editBtn).click({ force: true });
    cy.get(EditUser.userNameInput).type(Data.validUserNameAdd);
    cy.get(EditUser.saveBtn).click();
    cy.get(EditUser.successEditMassage).should("be.visible");
  });
  it("FPQS61 - Edit Only Password", () => {
    cy.login(Data.validUsername, Data.validPassword);
    cy.get(EditUser.adminSidebarBtn).click();
    cy.get(EditUser.editBtn).click({ force: true });
    cy.get(EditUser.ceklistEditPass).click({ force: true });
    cy.get(EditUser.passwordInput).type(Data.validPasswordAdd);
    cy.get(EditUser.saveBtn).click();
    cy.get(EditUser.massageConfirmPasswordEmpty).should("be.visible");
  });
  it("FPQS62 - Edit Password and Confirm Password", () => {
    cy.login(Data.validUsername, Data.validPassword);
    cy.get(EditUser.adminSidebarBtn).click();
    cy.get(EditUser.editBtn).click({ force: true });
    cy.get(EditUser.ceklistEditPass).click({ force: true });
    cy.get(EditUser.passwordInput).type(Data.validPasswordAdd);
    cy.get(EditUser.confirmPasswordinput).type(Data.validPasswordAdd);
    cy.get(EditUser.saveBtn).click();
    cy.get(EditUser.successEditMassage).should("be.visible");
  });
  it("FPQS63 - Edit Password No Number", () => {
    cy.login(Data.validUsername, Data.validPassword);
    cy.get(EditUser.adminSidebarBtn).click();
    cy.get(EditUser.editBtn).click({ force: true });
    cy.get(EditUser.ceklistEditPass).click({ force: true });
    cy.get(EditUser.passwordInput).type(Data.noNumberPassword);
    cy.get(EditUser.saveBtn).click();
    cy.get(EditUser.massageNoNumberPassword).should("be.visible");
  });
  it("FPQS64 - Edit Password and Confirm Password are not the same", () => {
    cy.login(Data.validUsername, Data.validPassword);
    cy.get(EditUser.adminSidebarBtn).click();
    cy.get(EditUser.editBtn).click({ force: true });
    cy.get(EditUser.ceklistEditPass).click({ force: true });
    cy.get(EditUser.passwordInput).type(Data.validPasswordAdd);
    cy.get(EditUser.confirmPasswordinput).type(Data.noNumberPassword);
    cy.get(EditUser.saveBtn).click();
    cy.get(EditUser.massageNoSamePassword).should("be.visible");
  });
  it("FPQS65 - Edit Password Does Not Meet Terms", () => {
    cy.login(Data.validUsername, Data.validPassword);
    cy.get(EditUser.adminSidebarBtn).click();
    cy.get(EditUser.editBtn).click({ force: true });
    cy.get(EditUser.ceklistEditPass).click({ force: true });
    cy.get(EditUser.passwordInput).type(Data.noTermPassword);
    cy.get(EditUser.saveBtn).click();
    cy.get(EditUser.massageNoTermsPassword).should("be.visible");
  });
  it("FPQS67 - Edit Employee Name Invalid Data", () => {
    cy.login(Data.validUsername, Data.validPassword);
    cy.get(EditUser.adminSidebarBtn).click();
    cy.get(EditUser.editBtn).click({ force: true });
    cy.get(EditUser.employeeNameInput).clear().type(Data.invalidEmployeeName);
    cy.get(EditUser.saveBtn).click();
    cy.get(EditUser.massageInvalidEmployeeName).should("be.visible");
  });
});
