class addUser {
  adminSidebarBtn = ":nth-child(1) > .oxd-main-menu-item > .oxd-text";
  newAddUser = ".orangehrm-header-container > .oxd-button";
  userRoleInput = ":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon";
  statusInput = ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text";
  employeenameInput = ".oxd-autocomplete-text-input > input";
  userNameInput = ":nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input";
  passwordInput = ".user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input";
  confirmPasswordInput = ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input";
  saveBtn = ".oxd-button--secondary";
  cancleBtn = ".oxd-button--ghost";
  listbox = "div[role='listbox']";
  massageEmptyEmployeeName = ".oxd-input-group > .oxd-text";
  massageNoNumberPassword = ".user-password-cell > .oxd-input-group > .oxd-text";
  massagePasswordNoMatch = ":nth-child(2) > .oxd-input-group > .oxd-text";
  massagePasswordNotTerm = ".user-password-cell > .oxd-input-group > .oxd-text";
  massageNoSelectUserRole = ":nth-child(1) > .oxd-input-group > .oxd-text";
  massageNoSelectStatus = ":nth-child(3) > .oxd-input-group > .oxd-text";
  massageNoInputUserName = ":nth-child(4) > .oxd-input-group > .oxd-text";
  massageNoInputPassword = ".user-password-cell > .oxd-input-group > .oxd-text";
  massageNoRecordEmployeeName = ".oxd-input-group > .oxd-text";
  massageExistingUsername = ".oxd-input-group > .oxd-text";
}
export default addUser;
