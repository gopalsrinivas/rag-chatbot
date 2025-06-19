const { defineConfig } = require("cypress")

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
        },
        baseUrl: "http://localhost:3000",
        specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
        supportFile: "cypress/support/e2e.js"
    },
    env: {
        apiUrl: "http://localhost:5000/api"
    }
})