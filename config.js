const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000", // Change as per your app
    setupNodeEvents(on, config) {},
    specPattern: "cypress/e2e/**/*.cy.js",
    video: true,  
    videosFolder: "cypress/videos",  
  },
});
