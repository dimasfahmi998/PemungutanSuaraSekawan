import validLogin from "../../support/PageObject/login.cy";
import Location from "../../support/PageObject/locationPage.cy";
const Data = require("../../fixtures/data.json");

describe("Admin Menu - Organization - Locations", () => {
  const ValidLogin = new validLogin();
  const location = new Location();

  it("FPQS39 - Add Location Successfully", () => {
    cy.visit(ValidLogin.baseUrl);
    cy.get(ValidLogin.username).type(Data.validUsername);
    cy.get(ValidLogin.password).type(Data.validPassword);
    cy.get(ValidLogin.loginBtn).click();
    cy.get(location.urlAdmin).click();
    cy.get(location.dropMenu).click();
    cy.get(location.locInfo).click();
    cy.get(location.locAddBtn).click();
    cy.get(location.locName).type(Data.validLocName);
    cy.get(location.locCity).type(Data.validLocCity);
    cy.get(location.locState).type(Data.validLocState);
    cy.get(location.locZip).type(Data.validLocZip);
    cy.get(location.locClickCountry).click();
    cy.get(location.locCountry).contains(Data.validLocCountry).click();
    cy.get(location.locPhone).type(Data.validLocPhone);
    cy.get(location.locFax).type(Data.validLocFax);
    cy.get(location.locAddress).type(Data.validLocAddress);
    cy.get(location.locNotes).type(Data.validLocNotes);
    cy.get(location.locAddSaveBtn).click();
    cy.get(location.locAddSuccess);
  });
  
  it("Search Location Successfully", () => {
    cy.visit(ValidLogin.baseUrl);
    cy.get(ValidLogin.username).type(Data.validUsername);
    cy.get(ValidLogin.password).type(Data.validPassword);
    cy.get(ValidLogin.loginBtn).click();
    cy.get(location.urlAdmin).click();
    cy.get(location.dropMenu).click();
    cy.get(location.locInfo).click();
    cy.get(location.locSearchName).type(Data.validLocName);
    cy.get(location.locSearchCity).type(Data.validLocCity);
    cy.get(location.locSearchClickCountry).click();
    cy.get(location.locSearchCountry).contains(Data.validLocCountry).click();
    cy.get(location.locSearchBtn).click({ force: true });
    cy.get(location.locSearchValidate).contains(Data.validLocName);
  });

  it("Delete All Location Successfully", () => {
    cy.visit(ValidLogin.baseUrl);
    cy.get(ValidLogin.username).type(Data.validUsername);
    cy.get(ValidLogin.password).type(Data.validPassword);
    cy.get(ValidLogin.loginBtn).click();
    cy.get(location.urlAdmin).click();
    cy.get(location.dropMenu).click();
    cy.get(location.locInfo).click();
    cy.get(location.locDeleteAll).click({ force: true });
    cy.get(location.locDeleteAllBtn).click({ force: true });
    cy.get(location.locDeleteAllConfirmBtn).click({ force: true });
    cy.get(location.locDeleteSuccess);
  });

  it("FPQS43 - Add Location Successfully - Empty All Field Except Name and Country", () => {
    cy.visit(ValidLogin.baseUrl);
    cy.get(ValidLogin.username).type(Data.validUsername);
    cy.get(ValidLogin.password).type(Data.validPassword);
    cy.get(ValidLogin.loginBtn).click();
    cy.get(location.urlAdmin).click();
    cy.get(location.dropMenu).click();
    cy.get(location.locInfo).click();
    cy.get(location.locAddBtn).click();
    cy.get(location.locName).type("Halowww");
    cy.get(location.locClickCountry).click();
    cy.get(location.locCountry).contains("Algeria").click();
    cy.get(location.locAddSaveBtn).click();
    cy.get(location.locAddSuccess);
  });

  it("FPQS40 - Add Location Unsuccessfully - Empty All Field", () => {
    cy.visit(ValidLogin.baseUrl);
    cy.get(ValidLogin.username).type(Data.validUsername);
    cy.get(ValidLogin.password).type(Data.validPassword);
    cy.get(ValidLogin.loginBtn).click();
    cy.get(location.urlAdmin).click();
    cy.get(location.dropMenu).click();
    cy.get(location.locInfo).click();
    cy.get(location.locAddBtn).click();
    cy.get(location.locAddSaveBtn).click();
    cy.get(location.locAddFailedName);
    cy.get(location.locAddFailedCountry);
  });

  it("FPQS41 - Add Location Successfully - Empty Name", () => {
    cy.visit(ValidLogin.baseUrl);
    cy.get(ValidLogin.username).type(Data.validUsername);
    cy.get(ValidLogin.password).type(Data.validPassword);
    cy.get(ValidLogin.loginBtn).click();
    cy.get(location.urlAdmin).click();
    cy.get(location.dropMenu).click();
    cy.get(location.locInfo).click();
    cy.get(location.locAddBtn).click();
    cy.get(location.locCity).type(Data.validLocCity);
    cy.get(location.locState).type(Data.validLocState);
    cy.get(location.locZip).type(Data.validLocZip);
    cy.get(location.locClickCountry).click();
    cy.get(location.locCountry).contains(Data.validLocCountry).click();
    cy.get(location.locPhone).type(Data.validLocPhone);
    cy.get(location.locFax).type(Data.validLocFax);
    cy.get(location.locAddress).type(Data.validLocAddress);
    cy.get(location.locNotes).type(Data.validLocNotes);
    cy.get(location.locAddSaveBtn).click();
    cy.get(location.locAddFailedName);
  });

  it("FPQS42 - Add Location Successfully - Empty Country", () => {
    cy.visit(ValidLogin.baseUrl);
    cy.get(ValidLogin.username).type(Data.validUsername);
    cy.get(ValidLogin.password).type(Data.validPassword);
    cy.get(ValidLogin.loginBtn).click();
    cy.get(location.urlAdmin).click();
    cy.get(location.dropMenu).click();
    cy.get(location.locInfo).click();
    cy.get(location.locAddBtn).click();
    cy.get(location.locName).type(Data.validLocName);
    cy.get(location.locCity).type(Data.validLocCity);
    cy.get(location.locState).type(Data.validLocState);
    cy.get(location.locZip).type(Data.validLocZip);
    cy.get(location.locPhone).type(Data.validLocPhone);
    cy.get(location.locFax).type(Data.validLocFax);
    cy.get(location.locAddress).type(Data.validLocAddress);
    cy.get(location.locNotes).type(Data.validLocNotes);
    cy.get(location.locAddSaveBtn).click();
    cy.get(location.locAddFailedCountry);
  });

  it("FPQS44 - Edit Location Successfully - Edit All Field", () => {
    cy.visit(ValidLogin.baseUrl);
    cy.get(ValidLogin.username).type(Data.validUsername);
    cy.get(ValidLogin.password).type(Data.validPassword);
    cy.get(ValidLogin.loginBtn).click();
    cy.get(location.urlAdmin).click();
    cy.get(location.dropMenu).click();
    cy.get(location.locInfo).click();
    cy.get(location.locEditBtn).click();
    cy.get(location.locName).type("Miaw");
    cy.get(location.locCity).type("Kawah JD");
    cy.get(location.locState).type("Lojidahd");
    cy.get(location.locZip).type("872772");
    cy.get(location.locClickCountry).click();
    cy.get(location.locCountry).contains(Data.validLocCountry).click();
    cy.get(location.locPhone).type("87138781243");
    cy.get(location.locFax).type("666428");
    cy.get(location.locAddress).type("hajsdhasjhd");
    cy.get(location.locNotes).type("ahdhasd");
    cy.get(location.locEditSaveBtn).click();
    cy.get(location.locEditSuccess);
  });

  it("FPQS45 - Edit Location Unsuccessfully - Empty All Field", () => {
    cy.visit(ValidLogin.baseUrl);
    cy.get(ValidLogin.username).type(Data.validUsername);
    cy.get(ValidLogin.password).type(Data.validPassword);
    cy.get(ValidLogin.loginBtn).click();
    cy.get(location.urlAdmin).click();
    cy.get(location.dropMenu).click();
    cy.get(location.locInfo).click();
    cy.get(location.locEditBtn).click();
    cy.get(location.locName).clear();
    cy.get(location.locCity).clear();
    cy.get(location.locState).clear();
    cy.get(location.locZip).clear();
    cy.get(location.locPhone).clear();
    cy.get(location.locFax).clear();
    cy.get(location.locAddress).clear();
    cy.get(location.locNotes).clear();
    cy.get(location.locEditSaveBtn).click();
    cy.get(location.locEditFailedName);
  });

  it("FPQS49 - Delete Location Successfully", () => {
    cy.visit(ValidLogin.baseUrl);
    cy.get(ValidLogin.username).type(Data.validUsername);
    cy.get(ValidLogin.password).type(Data.validPassword);
    cy.get(ValidLogin.loginBtn).click();
    cy.get(location.urlAdmin).click();
    cy.get(location.dropMenu).click();
    cy.get(location.locInfo).click();
    cy.get(location.locDeleteBtn).click();
    cy.get(location.locDeleteConfirmBtn).click();
    cy.get(location.locDeleteSuccess);
  });
});
