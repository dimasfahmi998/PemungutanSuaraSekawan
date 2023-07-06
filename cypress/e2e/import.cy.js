// import TambahData from "../support/PageObject/tambahData";
// const Data = require("../fixtures/data.json");

// describe("Tambah Data Pemilih Test", () => {
//   const tambahData = new TambahData();

//   it("Tambah Data dengan Semua Input Benar", () => {
//     cy.login(Data.username, Data.password);
//     cy.get('.dropdown-toggle')
//     cy.get(tambahData.dropdown).contains('Import Excel').click();
//     cy.fixture('coba.xlsx', 'base64').then((fileContent) => {
//         cy.get('.modal-body > .form-group > .col-lg-8 > .form-control').attachFile({
//           fileContent: fileContent,
//           fileName: 'coba.xlsx',
//           mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
//         });
//       });
//       cy.get('#form_upload_pemilih > .modal-footer > .btn-aps').click()
//       cy.get('.swal2-confirm').click()
//       cy.get('#swal2-title').should("be.visible");
//   });
// });