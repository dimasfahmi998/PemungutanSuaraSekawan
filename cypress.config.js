const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'urxto9',
  e2e: {
    setupNodeEvents(on, config) {
      chromeWebSecurity: false;
      // implement node event listeners here
    },
  },
});
