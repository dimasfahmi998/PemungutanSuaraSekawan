class Organization {
  urlAdmin = ":nth-child(1) > .oxd-main-menu-item > .oxd-text";
  dropMenu = ":nth-child(3) > .oxd-topbar-body-nav-tab-item";
  genInfo = ":nth-child(1) > .oxd-topbar-body-nav-tab-link";
  genEdit = ".oxd-switch-input";
  orgNameRequired = ".oxd-input-group > .oxd-text";
  orgName =
    ".organization-name-container > .oxd-input-group > :nth-child(2) > .oxd-input";
  regNum =
    ":nth-child(2) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input";
  taxID =
    ":nth-child(2) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input";
  genPhone =
    ":nth-child(4) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input";
  genFax =
    ":nth-child(4) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input";
  genEmail =
    ":nth-child(4) > .oxd-grid-3 > :nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input";
  genAddress1 =
    ":nth-child(6) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input";
  genAddress2 =
    ":nth-child(6) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input";
  genCity =
    ":nth-child(6) > .oxd-grid-3 > :nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input";
  genState =
    ":nth-child(7) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input";
  genZip =
    ":nth-child(7) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input";
  genClickCountry = ".oxd-select-text";
  genCountry = ".oxd-select-option";
  genNotes = ".oxd-textarea";
  genSave = ".oxd-button";
  genSuccess = ".oxd-toast";
}

export default Organization;
