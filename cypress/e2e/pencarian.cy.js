import Pencarian from "../support/PageObject/pencarian";
const Data = require("../fixtures/data.json");

describe("Mencari Data Pemilih - Test", () => {
  const pencarian = new Pencarian();

    it("Pencarian berdasarkan NIK", () => {
        cy.login(Data.username, Data.password);
        cy.get(pencarian.inptSearch).type(Data.schNIK)
    });
    it("Pencarian berdasarkan Nama", () => {
        cy.login(Data.username, Data.password);
        cy.get(pencarian.inptSearch).type(Data.schNama)
    });
    it("Pencarian berdasarkan Alamat", () => {
        cy.login(Data.username, Data.password);
        cy.get(pencarian.inptSearch).type(Data.schAlamat)
    });
    it("Pencarian berdasarkan Status", () => {
        cy.login(Data.username, Data.password);
        cy.get(pencarian.inptSearch).type(Data.schStatus)
    });
});
