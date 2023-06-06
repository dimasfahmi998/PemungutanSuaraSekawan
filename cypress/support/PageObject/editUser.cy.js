class editUser {
  adminSidebarBtn = ":nth-child(1) > .oxd-main-menu-item > .oxd-text";
  editBtn = ":nth-child(3) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(2)";
  dropdownUserRole = ":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon";
  employeeNameInput = ".oxd-autocomplete-text-input > input";
  userNameInput = ":nth-child(2) > .oxd-input";
  dropdownStatus = ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon";
  ceklistEditPass = ".oxd-checkbox-input > .oxd-icon";
  saveBtn = ".oxd-button--secondary";
  passwordInput = ".user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input";
  confirmPasswordinput = ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input";
  listbox = "div[role='listbox']";
  successEditMassage = ".oxd-toast";
  massageConfirmPasswordEmpty = ":nth-child(2) > .oxd-input-group > .oxd-text";
  massageNoNumberPassword = ".user-password-cell > .oxd-input-group > .oxd-text";
  massageNoSamePassword = ".oxd-input-group > .oxd-text";
  massageNoTermsPassword = ".user-password-cell > .oxd-input-group > .oxd-text";
  massageEmptyUserRole = ":nth-child(1) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > .oxd-text";
  massageEmptyEmployeeName = ":nth-child(1) > .oxd-grid-2 > :nth-child(2) > .oxd-input-group > .oxd-text";
  massageInvalidEmployeeName = ".oxd-input-group > .oxd-text";
  massageEmptyStatus = ":nth-child(3) > .oxd-input-group > .oxd-text";
  massageEmptyUserName = ":nth-child(4) > .oxd-input-group > .oxd-text";
  massageEmptyPassword = ".user-password-cell > .oxd-input-group > .oxd-text";
}
export default editUser;
