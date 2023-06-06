class Location {
  //   Add, Edit & Delete Location
  urlAdmin = ":nth-child(1) > .oxd-main-menu-item > .oxd-text";
  dropMenu = ":nth-child(3) > .oxd-topbar-body-nav-tab-item";
  locInfo = ":nth-child(2) > .oxd-topbar-body-nav-tab-link";
  locAddBtn = ".orangehrm-header-container > div > .oxd-button";
  locEditBtn =
    ":nth-child(1) > .oxd-table-row > :nth-child(7) > .oxd-table-cell-actions > :nth-child(2)";
  locName =
    ":nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input";
  locCity =
    ":nth-child(2) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input";
  locState = ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input";
  locZip = ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input";
  locClickCountry = ".oxd-select-text";
  locCountry = ".oxd-select-option";
  locPhone = ":nth-child(5) > .oxd-input-group > :nth-child(2) > .oxd-input";
  locFax = ":nth-child(6) > .oxd-input-group > :nth-child(2) > .oxd-input";
  locAddress =
    ":nth-child(7) > .oxd-input-group > :nth-child(2) > .oxd-textarea";
  locNotes = ":nth-child(8) > .oxd-input-group > :nth-child(2) > .oxd-textarea";
  locAddSaveBtn = ".oxd-button--secondary";
  locEditSaveBtn = ".oxd-button--secondary";
  locAddSuccess = ".oxd-toast";
  locEditSuccess = ".oxd-toast";
  locAddFailedName =
    ":nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > .oxd-text";
  locAddFailedCountry = ":nth-child(4) > .oxd-input-group > .oxd-text";
  locEditFailedName =
    ":nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > .oxd-text";
  locEditFailedCountry = ":nth-child(4) > .oxd-input-group > .oxd-text";
  locDeleteBtn =
    ":nth-child(1) > .oxd-table-row > :nth-child(7) > .oxd-table-cell-actions > :nth-child(1) > .oxd-icon";
  locDeleteConfirmBtn = ".oxd-button--label-danger";
  locDeleteSuccess = ".oxd-toast";
}

export default Location;
