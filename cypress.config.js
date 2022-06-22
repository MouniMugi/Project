const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**",

    reporter: "../node_modules/mochawesome/src/mochawesome.js",
    reporterOptions: {
      overwrite: false,
      html: false,
      json: true,
    },
    baseUrl: "https://www.belong.com.au/",
    retries: {
      runMode: 2,
      openMode: 2,
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
