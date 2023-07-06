import TambahData from "../support/PageObject/tambahData";
const Data = require("../fixtures/data.json");

describe("Ubah Data Pemilih Test", () => {
  const tambahData = new TambahData();

  it("Ubah Data dengan Semua Input Benar", () => {
    cy.login(Data.username, Data.password);
    cy.get(tambahData.editBtn).click();
    cy.get(tambahData.nokk).clear({ force: true }).type(Data.nokk)
    cy.get(tambahData.nonik).clear({ force: true }).type(Data.nokk)
    cy.get(tambahData.nama).clear({ force: true }).type(Data.nama)
    cy.get(tambahData.alamat).clear({ force: true }).type(Data.alamat)
    cy.get(tambahData.rt).clear({ force: true }).type(Data.rt)
    cy.get(tambahData.rw).clear({ force: true }).type(Data.rw)
    cy.get(tambahData.kelurahan).click(); // Klik pada dropdown
    cy.get(tambahData.dropdown).contains(Data.kelurahan).click(); // Pilih opsi kelurahan berdasarkan teksnya
    cy.get(tambahData.tempat_lahir).clear({ force: true }).type(Data.tmpt_lahir)
    cy.get(tambahData.jk_laki).click()
    cy.get(tambahData.status_kawin).click(); // Klik pada dropdown
    cy.get(tambahData.dropdown).contains(Data.status_kawin).click();
    cy.get(tambahData.caleg).click(); // Klik pada dropdown
    cy.get(tambahData.dropdown).contains(Data.caleg).click();
    cy.get(tambahData.tps).click(); // Klik pada dropdown
    cy.get(tambahData.dropdown).contains(Data.tps).click();
    cy.get(tambahData.status_pemilih).click()
    cy.get(tambahData.tanggal_lahir).type('{enter}')
    cy.get(tambahData.btn_save).click();
  });
  it("Memasukkan No. KK Kurang dari 16 Karakter", () => {
    cy.login(Data.username, Data.password);
    cy.get(tambahData.editBtn).click();
    cy.get(tambahData.nokk).clear({ force: true }).type(Data.kkkurang)
    cy.get(tambahData.btn_save).click();
    cy.get(tambahData.errorKK).should("be.visible");
  });
  it("Memasukkan No. KK Menggunakan Selain Huruf", () => {
    cy.login(Data.username, Data.password);
    cy.get(tambahData.editBtn).click();
    cy.get(tambahData.nokk).clear({ force: true }).type(Data.nama)
    cy.get(tambahData.btn_save).click();
  });
  it("Memasukkan No. NIK Kurang dari 16 Karakter", () => {
    cy.login(Data.username, Data.password);
    cy.get(tambahData.editBtn).click();
    cy.get(tambahData.nonik).clear({ force: true }).type(Data.kkkurang)
    cy.get(tambahData.btn_save).click();
    cy.get(tambahData.errorNIK).should("be.visible");
  });
  it("Memasukkan No. NIK Menggunakan Selain Huruf", () => {
    cy.login(Data.username, Data.password);
    cy.get(tambahData.editBtn).click();
    cy.get(tambahData.nonik).clear({ force: true }).type("Data.nokk")
    cy.get(tambahData.btn_save).click();
  });
  it("Memasukkan RT Menggunakan Huruf", () => {
    cy.login(Data.username, Data.password);
    cy.get(tambahData.editBtn).click();
    cy.get(tambahData.rt).clear({ force: true }).type("a")
    cy.get(tambahData.btn_save).click();
    cy.get(tambahData.msgRT).should("be.visible");
  });
  it("Memasukkan RW Menggunakan Huruf", () => {
    cy.login(Data.username, Data.password);
    cy.get(tambahData.editBtn).click();
    cy.get(tambahData.rw).clear({ force: true }).type("A")
    cy.get(tambahData.btn_save).click();
    cy.get(tambahData.msgRW).should("be.visible");
  });
});