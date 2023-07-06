import TambahData from "../support/PageObject/tambahData";
const Data = require("../fixtures/data.json");

describe("Tambah Data Pemilih Test", () => {
  const tambahData = new TambahData();

  it("Tambah Data dengan Semua Input Benar", () => {
    cy.login(Data.username, Data.password);
    cy.get(tambahData.tambah).click();
    cy.get(tambahData.nokk).type(Data.nokk)
    cy.get(tambahData.nonik).type(Data.nokk)
    cy.get(tambahData.nama).type(Data.nama)
    cy.get(tambahData.alamat).type(Data.alamat)
    cy.get(tambahData.rt).type(Data.rt)
    cy.get(tambahData.rw).type(Data.rw)
    cy.get(tambahData.kelurahan).click(); // Klik pada dropdown
    cy.get(tambahData.dropdown).contains(Data.kelurahan).click(); // Pilih opsi kelurahan berdasarkan teksnya
    cy.get(tambahData.tempat_lahir).type(Data.tmpt_lahir)
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
  it("Tidak Memasukkan No. KK", () => {
    cy.login(Data.username, Data.password);
    cy.get(tambahData.tambah).click();
    cy.get(tambahData.nonik).type(Data.nokk)
    cy.get(tambahData.nama).type(Data.nama)
    cy.get(tambahData.alamat).type(Data.alamat)
    cy.get(tambahData.rt).type(Data.rt)
    cy.get(tambahData.rw).type(Data.rw)
    cy.get(tambahData.kelurahan).click(); // Klik pada dropdown
    cy.get(tambahData.dropdown).contains(Data.kelurahan).click(); // Pilih opsi kelurahan berdasarkan teksnya
    cy.get(tambahData.tempat_lahir).type(Data.tmpt_lahir)
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
    cy.get(tambahData.msgKK).should("be.visible");
  });
  it("Memasukkan No. KK Kurang dari 16 Karakter", () => {
    cy.login(Data.username, Data.password);
    cy.get(tambahData.tambah).click();
    cy.get(tambahData.nokk).type(Data.kkkurang)
    cy.get(tambahData.nonik).type(Data.nokk)
    cy.get(tambahData.nama).type(Data.nama)
    cy.get(tambahData.alamat).type(Data.alamat)
    cy.get(tambahData.rt).type(Data.rt)
    cy.get(tambahData.rw).type(Data.rw)
    cy.get(tambahData.kelurahan).click(); // Klik pada dropdown
    cy.get(tambahData.dropdown).contains(Data.kelurahan).click(); // Pilih opsi kelurahan berdasarkan teksnya
    cy.get(tambahData.tempat_lahir).type(Data.tmpt_lahir)
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
    cy.get(tambahData.errorKK).should("be.visible");
  });
  it("Memasukkan No. KK Menggunakan Selain Huruf", () => {
    cy.login(Data.username, Data.password);
    cy.get(tambahData.tambah).click();
    cy.get(tambahData.nokk).type(Data.nama)
    cy.get(tambahData.nonik).type(Data.nokk)
    cy.get(tambahData.nama).type(Data.nama)
    cy.get(tambahData.alamat).type(Data.alamat)
    cy.get(tambahData.rt).type(Data.rt)
    cy.get(tambahData.rw).type(Data.rw)
    cy.get(tambahData.kelurahan).click(); // Klik pada dropdown
    cy.get(tambahData.dropdown).contains(Data.kelurahan).click(); // Pilih opsi kelurahan berdasarkan teksnya
    cy.get(tambahData.tempat_lahir).type(Data.tmpt_lahir)
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
  it("Tidak Memasukkan No. NIK", () => {
    cy.login(Data.username, Data.password);
    cy.get(tambahData.tambah).click();
    cy.get(tambahData.nokk).type(Data.nokk)
    cy.get(tambahData.nama).type(Data.nama)
    cy.get(tambahData.alamat).type(Data.alamat)
    cy.get(tambahData.rt).type(Data.rt)
    cy.get(tambahData.rw).type(Data.rw)
    cy.get(tambahData.kelurahan).click(); // Klik pada dropdown
    cy.get(tambahData.dropdown).contains(Data.kelurahan).click(); // Pilih opsi kelurahan berdasarkan teksnya
    cy.get(tambahData.tempat_lahir).type(Data.tmpt_lahir)
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
    cy.get(tambahData.msgNIK).should("be.visible");
  });
  it("Memasukkan No. NIK Kurang dari 16 Karakter", () => {
    cy.login(Data.username, Data.password);
    cy.get(tambahData.tambah).click();
    cy.get(tambahData.nokk).type(Data.nokk)
    cy.get(tambahData.nonik).type(Data.kkkurang)
    cy.get(tambahData.nama).type(Data.nama)
    cy.get(tambahData.alamat).type(Data.alamat)
    cy.get(tambahData.rt).type(Data.rt)
    cy.get(tambahData.rw).type(Data.rw)
    cy.get(tambahData.kelurahan).click(); // Klik pada dropdown
    cy.get(tambahData.dropdown).contains(Data.kelurahan).click(); // Pilih opsi kelurahan berdasarkan teksnya
    cy.get(tambahData.tempat_lahir).type(Data.tmpt_lahir)
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
    cy.get(tambahData.errorNIK).should("be.visible");
  });
  it("Memasukkan No. NIK Menggunakan Selain Huruf", () => {
    cy.login(Data.username, Data.password);
    cy.get(tambahData.tambah).click();
    cy.get(tambahData.nokk).type(Data.nama)
    cy.get(tambahData.nonik).type(Data.nokk)
    cy.get(tambahData.nama).type(Data.nama)
    cy.get(tambahData.alamat).type(Data.alamat)
    cy.get(tambahData.rt).type(Data.rt)
    cy.get(tambahData.rw).type(Data.rw)
    cy.get(tambahData.kelurahan).click(); // Klik pada dropdown
    cy.get(tambahData.dropdown).contains(Data.kelurahan).click(); // Pilih opsi kelurahan berdasarkan teksnya
    cy.get(tambahData.tempat_lahir).type(Data.tmpt_lahir)
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
  it("Tidak Memasukkan Alamat", () => {
    cy.login(Data.username, Data.password);
    cy.get(tambahData.tambah).click();
    cy.get(tambahData.nokk).type(Data.nama)
    cy.get(tambahData.nonik).type(Data.nokk)
    cy.get(tambahData.nama).type(Data.nama)
    cy.get(tambahData.rt).type(Data.rt)
    cy.get(tambahData.rw).type(Data.rw)
    cy.get(tambahData.kelurahan).click(); // Klik pada dropdown
    cy.get(tambahData.dropdown).contains(Data.kelurahan).click(); // Pilih opsi kelurahan berdasarkan teksnya
    cy.get(tambahData.tempat_lahir).type(Data.tmpt_lahir)
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
    cy.get(tambahData.msgAlamat).should("be.visible");
  });
  it("Tidak Memasukkan RT", () => {
    cy.login(Data.username, Data.password);
    cy.get(tambahData.tambah).click();
    cy.get(tambahData.nokk).type(Data.nokk)
    cy.get(tambahData.nonik).type(Data.nokk)
    cy.get(tambahData.nama).type(Data.nama)
    cy.get(tambahData.alamat).type(Data.alamat)
    cy.get(tambahData.rw).type(Data.rw)
    cy.get(tambahData.kelurahan).click(); // Klik pada dropdown
    cy.get(tambahData.dropdown).contains(Data.kelurahan).click(); // Pilih opsi kelurahan berdasarkan teksnya
    cy.get(tambahData.tempat_lahir).type(Data.tmpt_lahir)
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
    cy.get(tambahData.msgRT).should("be.visible");
  });
  it("Memasukkan RT Menggunakan Huruf", () => {
    cy.login(Data.username, Data.password);
    cy.get(tambahData.tambah).click();
    cy.get(tambahData.nokk).type(Data.nokk)
    cy.get(tambahData.nonik).type(Data.nokk)
    cy.get(tambahData.nama).type(Data.nama)
    cy.get(tambahData.alamat).type(Data.alamat)
    cy.get(tambahData.rt).type("a")
    cy.get(tambahData.rw).type(Data.rw)
    cy.get(tambahData.kelurahan).click(); // Klik pada dropdown
    cy.get(tambahData.dropdown).contains(Data.kelurahan).click(); // Pilih opsi kelurahan berdasarkan teksnya
    cy.get(tambahData.tempat_lahir).type(Data.tmpt_lahir)
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
    cy.get(tambahData.msgRT).should("be.visible");
  });
  it("Tidak Memasukkan RW", () => {
    cy.login(Data.username, Data.password);
    cy.get(tambahData.tambah).click();
    cy.get(tambahData.nokk).type(Data.nokk)
    cy.get(tambahData.nonik).type(Data.nokk)
    cy.get(tambahData.nama).type(Data.nama)
    cy.get(tambahData.alamat).type(Data.alamat)
    cy.get(tambahData.rt).type(Data.rt)
    cy.get(tambahData.kelurahan).click(); // Klik pada dropdown
    cy.get(tambahData.dropdown).contains(Data.kelurahan).click(); // Pilih opsi kelurahan berdasarkan teksnya
    cy.get(tambahData.tempat_lahir).type(Data.tmpt_lahir)
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
    cy.get(tambahData.msgRW).should("be.visible");
  });
  it("Memasukkan RW Menggunakan Huruf", () => {
    cy.login(Data.username, Data.password);
    cy.get(tambahData.tambah).click();
    cy.get(tambahData.nokk).type(Data.nokk)
    cy.get(tambahData.nonik).type(Data.nokk)
    cy.get(tambahData.nama).type(Data.nama)
    cy.get(tambahData.alamat).type(Data.alamat)
    cy.get(tambahData.rt).type(Data.rt)
    cy.get(tambahData.rw).type("A")
    cy.get(tambahData.kelurahan).click(); // Klik pada dropdown
    cy.get(tambahData.dropdown).contains(Data.kelurahan).click(); // Pilih opsi kelurahan berdasarkan teksnya
    cy.get(tambahData.tempat_lahir).type(Data.tmpt_lahir)
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
    cy.get(tambahData.msgRW).should("be.visible");
  });
  it("Tidak Memasukkan Kelurahan", () => {
    cy.login(Data.username, Data.password);
    cy.get(tambahData.tambah).click();
    cy.get(tambahData.nokk).type(Data.nokk)
    cy.get(tambahData.nonik).type(Data.nokk)
    cy.get(tambahData.nama).type(Data.nama)
    cy.get(tambahData.alamat).type(Data.alamat)
    cy.get(tambahData.rt).type(Data.rt)
    cy.get(tambahData.rw).type(Data.rw)
    cy.get(tambahData.tempat_lahir).type(Data.tmpt_lahir)
    cy.get(tambahData.jk_laki).click()
    cy.get(tambahData.status_kawin).click(); // Klik pada dropdown
    cy.get(tambahData.dropdown).contains(Data.status_kawin).click();
    cy.get(tambahData.caleg).click(); // Klik pada dropdown
    cy.get(tambahData.dropdown).contains(Data.caleg).click();
    cy.get(tambahData.status_pemilih).click()
    cy.get(tambahData.tanggal_lahir).type('{enter}')
    cy.get(tambahData.btn_save).click();
    cy.get(tambahData.msgKelurahan).should("be.visible");
  });
  it("Tidak Memasukkan Tempat Lahir", () => {
    cy.login(Data.username, Data.password);
    cy.get(tambahData.tambah).click();
    cy.get(tambahData.nokk).type(Data.nokk)
    cy.get(tambahData.nonik).type(Data.nokk)
    cy.get(tambahData.nama).type(Data.nama)
    cy.get(tambahData.alamat).type(Data.alamat)
    cy.get(tambahData.rt).type(Data.rt)
    cy.get(tambahData.rw).type(Data.rw)
    cy.get(tambahData.kelurahan).click(); // Klik pada dropdown
    cy.get(tambahData.dropdown).contains(Data.kelurahan).click(); // Pilih opsi kelurahan berdasarkan teksnya
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
    cy.get(tambahData.msgTmptLhr).should("be.visible");
  });
  it("Memasukkan Menggunakan Angka", () => {
    cy.login(Data.username, Data.password);
    cy.get(tambahData.tambah).click();
    cy.get(tambahData.nokk).type(Data.nokk)
    cy.get(tambahData.nonik).type(Data.nokk)
    cy.get(tambahData.nama).type(Data.nama)
    cy.get(tambahData.alamat).type(Data.alamat)
    cy.get(tambahData.rt).type(Data.rt)
    cy.get(tambahData.rw).type(Data.rw)
    cy.get(tambahData.kelurahan).click(); // Klik pada dropdown
    cy.get(tambahData.dropdown).contains(Data.kelurahan).click(); // Pilih opsi kelurahan berdasarkan teksnya
    cy.get(tambahData.jk_laki).click()
    cy.get(tambahData.status_kawin).click(); // Klik pada dropdown
    cy.get(tambahData.dropdown).contains(Data.status_kawin).click();
    cy.get(tambahData.caleg).click(); // Klik pada dropdown
    cy.get(tambahData.dropdown).contains(Data.caleg).click();
    cy.get(tambahData.tps).click(); // Klik pada dropdown
    cy.get(tambahData.dropdown).contains(Data.tps).click();
    cy.get(tambahData.status_pemilih).click()
    cy.get(tambahData.tanggal_lahir).type('{enter}')
    cy.get(tambahData.tempat_lahir).type("1234")
    cy.get(tambahData.btn_save).click();
    cy.get(tambahData.msgTmptLhr).should("be.visible");
  });
  it("Tidak Memasukkan Jenis Kelamin", () => {
    cy.login(Data.username, Data.password);
    cy.get(tambahData.tambah).click();
    cy.get(tambahData.nokk).type(Data.nokk)
    cy.get(tambahData.nonik).type(Data.nokk)
    cy.get(tambahData.nama).type(Data.nama)
    cy.get(tambahData.alamat).type(Data.alamat)
    cy.get(tambahData.rt).type(Data.rt)
    cy.get(tambahData.rw).type(Data.rw)
    cy.get(tambahData.kelurahan).click(); // Klik pada dropdown
    cy.get(tambahData.dropdown).contains(Data.kelurahan).click(); // Pilih opsi kelurahan berdasarkan teksnya
    cy.get(tambahData.tempat_lahir).type(Data.tmpt_lahir)
    cy.get(tambahData.status_kawin).click(); // Klik pada dropdown
    cy.get(tambahData.dropdown).contains(Data.status_kawin).click();
    cy.get(tambahData.caleg).click(); // Klik pada dropdown
    cy.get(tambahData.dropdown).contains(Data.caleg).click();
    cy.get(tambahData.tps).click(); // Klik pada dropdown
    cy.get(tambahData.dropdown).contains(Data.tps).click();
    cy.get(tambahData.status_pemilih).click()
    cy.get(tambahData.tanggal_lahir).type('{enter}')
    cy.get(tambahData.btn_save).click();
    cy.get(tambahData.msgJK).should("be.visible");
  });
  it("Tidak Memasukkan Status Kawin", () => {
    cy.login(Data.username, Data.password);
    cy.get(tambahData.tambah).click();
    cy.get(tambahData.nokk).type(Data.nokk)
    cy.get(tambahData.nonik).type(Data.nokk)
    cy.get(tambahData.nama).type(Data.nama)
    cy.get(tambahData.alamat).type(Data.alamat)
    cy.get(tambahData.rt).type(Data.rt)
    cy.get(tambahData.rw).type(Data.rw)
    cy.get(tambahData.kelurahan).click(); // Klik pada dropdown
    cy.get(tambahData.dropdown).contains(Data.kelurahan).click(); // Pilih opsi kelurahan berdasarkan teksnya
    cy.get(tambahData.tempat_lahir).type(Data.tmpt_lahir)
    cy.get(tambahData.jk_laki).click()
    cy.get(tambahData.caleg).click(); // Klik pada dropdown
    cy.get(tambahData.dropdown).contains(Data.caleg).click();
    cy.get(tambahData.tps).click(); // Klik pada dropdown
    cy.get(tambahData.dropdown).contains(Data.tps).click();
    cy.get(tambahData.status_pemilih).click()
    cy.get(tambahData.tanggal_lahir).type('{enter}')
    cy.get(tambahData.btn_save).click();
    cy.get(tambahData.msgSKwn).should("be.visible");
  });
  it("Tidak Memasukkan caleg", () => {
    cy.login(Data.username, Data.password);
    cy.get(tambahData.tambah).click();
    cy.get(tambahData.nokk).type(Data.nokk)
    cy.get(tambahData.nonik).type(Data.nokk)
    cy.get(tambahData.nama).type(Data.nama)
    cy.get(tambahData.alamat).type(Data.alamat)
    cy.get(tambahData.rt).type(Data.rt)
    cy.get(tambahData.rw).type(Data.rw)
    cy.get(tambahData.kelurahan).click(); // Klik pada dropdown
    cy.get(tambahData.dropdown).contains(Data.kelurahan).click(); // Pilih opsi kelurahan berdasarkan teksnya
    cy.get(tambahData.tempat_lahir).type(Data.tmpt_lahir)
    cy.get(tambahData.jk_laki).click()
    cy.get(tambahData.status_kawin).click(); // Klik pada dropdown
    cy.get(tambahData.dropdown).contains(Data.status_kawin).click();
    cy.get(tambahData.tps).click(); // Klik pada dropdown
    cy.get(tambahData.dropdown).contains(Data.tps).click();
    cy.get(tambahData.status_pemilih).click()
    cy.get(tambahData.tanggal_lahir).type('{enter}')
    cy.get(tambahData.btn_save).click();
    cy.get(tambahData.msgCaleg).should("be.visible");
  });
  it("Tidak Memasukkan TPS", () => {
    cy.login(Data.username, Data.password);
    cy.get(tambahData.tambah).click();
    cy.get(tambahData.nokk).type(Data.nokk)
    cy.get(tambahData.nonik).type(Data.nokk)
    cy.get(tambahData.nama).type(Data.nama)
    cy.get(tambahData.alamat).type(Data.alamat)
    cy.get(tambahData.rt).type(Data.rt)
    cy.get(tambahData.rw).type(Data.rw)
    cy.get(tambahData.kelurahan).click(); // Klik pada dropdown
    cy.get(tambahData.dropdown).contains(Data.kelurahan).click(); // Pilih opsi kelurahan berdasarkan teksnya
    cy.get(tambahData.tempat_lahir).type(Data.tmpt_lahir)
    cy.get(tambahData.jk_laki).click()
    cy.get(tambahData.status_kawin).click(); // Klik pada dropdown
    cy.get(tambahData.dropdown).contains(Data.status_kawin).click();
    cy.get(tambahData.caleg).click(); // Klik pada dropdown
    cy.get(tambahData.dropdown).contains(Data.caleg).click();
    cy.get(tambahData.status_pemilih).click()
    cy.get(tambahData.tanggal_lahir).type('{enter}')
    cy.get(tambahData.btn_save).click();
    cy.get(tambahData.msgTps).should("be.visible");
  });
  it("Tidak Memasukkan Status Pemilih", () => {
    cy.login(Data.username, Data.password);
    cy.get(tambahData.tambah).click();
    cy.get(tambahData.nokk).type(Data.nokk)
    cy.get(tambahData.nonik).type(Data.nokk)
    cy.get(tambahData.nama).type(Data.nama)
    cy.get(tambahData.alamat).type(Data.alamat)
    cy.get(tambahData.rt).type(Data.rt)
    cy.get(tambahData.rw).type(Data.rw)
    cy.get(tambahData.kelurahan).click(); // Klik pada dropdown
    cy.get(tambahData.dropdown).contains(Data.kelurahan).click(); // Pilih opsi kelurahan berdasarkan teksnya
    cy.get(tambahData.tempat_lahir).type(Data.tmpt_lahir)
    cy.get(tambahData.jk_laki).click()
    cy.get(tambahData.status_kawin).click(); // Klik pada dropdown
    cy.get(tambahData.dropdown).contains(Data.status_kawin).click();
    cy.get(tambahData.caleg).click(); // Klik pada dropdown
    cy.get(tambahData.dropdown).contains(Data.caleg).click();
    cy.get(tambahData.tps).click(); // Klik pada dropdown
    cy.get(tambahData.dropdown).contains(Data.tps).click();
    cy.get(tambahData.tanggal_lahir).type('{enter}')
    cy.get(tambahData.btn_save).click();
    cy.get(tambahData.msgStatus).should("be.visible");
  });
  it("Tidak Memasukkan Tanggal Lahir", () => {
    cy.login(Data.username, Data.password);
    cy.get(tambahData.tambah).click();
    cy.get(tambahData.nokk).type(Data.nokk)
    cy.get(tambahData.nonik).type(Data.nokk)
    cy.get(tambahData.nama).type(Data.nama)
    cy.get(tambahData.alamat).type(Data.alamat)
    cy.get(tambahData.rt).type(Data.rt)
    cy.get(tambahData.rw).type(Data.rw)
    cy.get(tambahData.kelurahan).click(); // Klik pada dropdown
    cy.get(tambahData.dropdown).contains(Data.kelurahan).click(); // Pilih opsi kelurahan berdasarkan teksnya
    cy.get(tambahData.tempat_lahir).type(Data.tmpt_lahir)
    cy.get(tambahData.jk_laki).click()
    cy.get(tambahData.status_kawin).click(); // Klik pada dropdown
    cy.get(tambahData.dropdown).contains(Data.status_kawin).click();
    cy.get(tambahData.caleg).click(); // Klik pada dropdown
    cy.get(tambahData.dropdown).contains(Data.caleg).click();
    cy.get(tambahData.tps).click(); // Klik pada dropdown
    cy.get(tambahData.dropdown).contains(Data.tps).click();
    cy.get(tambahData.status_pemilih).click()
    cy.get(tambahData.btn_save).click();
    cy.get(tambahData.msgTtgLhr).should("be.visible");
  });
});
