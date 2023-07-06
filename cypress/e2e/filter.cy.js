import Filter from "../support/PageObject/filter";
const Data = require("../fixtures/data.json");

describe("Filter Data", () => {
  const filter = new Filter();

    it("Filter Data Berdasarkan Provinsi", () => {
        cy.login(Data.username, Data.password);
        cy.get(filter.btnFilter).click();
        cy.get(filter.provinsi).click(); // Klik pada dropdown
        cy.get(filter.dropdown).contains(Data.provinsi).click();
        cy.get(filter.btnApplay).click();
    });
    it("Filter Data Berdasarkan Kota/Kabupaten", () => {
        cy.login(Data.username, Data.password);
        cy.get(filter.btnFilter).click();
        cy.get(filter.provinsi).click(); // Klik pada dropdown
        cy.get(filter.dropdown).contains(Data.provinsi).click();
        cy.get(filter.kota).click(); // Klik pada dropdown
        cy.get(filter.dropdown).contains(Data.kotakabfilter).click();
        cy.get(filter.btnApplay).click();
    });
    it("Filter Data Berdasarkan Kecamatan", () => {
        cy.login(Data.username, Data.password);
        cy.get(filter.btnFilter).click();
        cy.get(filter.provinsi).click(); // Klik pada dropdown
        cy.get(filter.dropdown).contains(Data.provinsi).click();
        cy.get(filter.kota).click(); // Klik pada dropdown
        cy.get(filter.dropdown).contains(Data.kotakabfilter).click();
        cy.get(filter.kecamatan).click(); // Klik pada dropdown
        cy.get(filter.dropdown).contains(Data.kecamatanfilter).click();
        cy.get(filter.btnApplay).click();
    });
    it("Filter Data Berdasarkan Kelurahan", () => {
        cy.login(Data.username, Data.password);
        cy.get(filter.btnFilter).click();
        cy.get(filter.provinsi).click(); // Klik pada dropdown
        cy.get(filter.dropdown).contains(Data.provinsi).click();
        cy.get(filter.kota).click(); // Klik pada dropdown
        cy.get(filter.dropdown).contains(Data.kotakabfilter).click();
        cy.get(filter.kecamatan).click(); // Klik pada dropdown
        cy.get(filter.dropdown).contains(Data.kecamatanfilter).click();
        cy.get(filter.kelurahan).click(); // Klik pada dropdown
        cy.get(filter.dropdown).contains(Data.kelurahanfilter).click();
        cy.get(filter.btnApplay).click();
    });
    it("Filter Data Berdasarkan TPS", () => {
        cy.login(Data.username, Data.password);
        cy.get(filter.btnFilter).click();
        cy.get(filter.provinsi).click(); // Klik pada dropdown
        cy.get(filter.dropdown).contains(Data.provinsi).click();
        cy.get(filter.kota).click(); // Klik pada dropdown
        cy.get(filter.dropdown).contains(Data.kotakabfilter).click();
        cy.get(filter.kecamatan).click(); // Klik pada dropdown
        cy.get(filter.dropdown).contains(Data.kecamatanfilter).click();
        cy.get(filter.kelurahan).click(); // Klik pada dropdown
        cy.get(filter.dropdown).contains(Data.kelurahanfilter).click();
        cy.get(filter.tps).click(); // Klik pada dropdown
        cy.get(filter.dropdown).contains(Data.tpsfiter).click();
        cy.get(filter.btnApplay).click();
    });
});