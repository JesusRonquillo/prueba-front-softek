import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportWidth: 1280,
    viewportHeight: 720,
    video: false,
    screenshotOnRunFailure: true,
    defaultCommandTimeout: 10000,
    requestTimeout: 10000,
    responseTimeout: 10000,
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    supportFile: "cypress/support/e2e.ts",
    fixturesFolder: "cypress/fixtures",
    downloadsFolder: "cypress/downloads",
    screenshotsFolder: "cypress/screenshots",
    videosFolder: "cypress/videos",
    chromeWebSecurity: false,
    retries: {
      runMode: 2,
      openMode: 0,
    },
    env: {
      // Variables de entorno para tests
      apiUrl: "http://localhost:3000",
      mobile: {
        width: 375,
        height: 667,
      },
      desktop: {
        width: 1280,
        height: 720,
      },
    },
  },
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
    specPattern: "cypress/component/**/*.cy.{js,jsx,ts,tsx}",
    supportFile: "cypress/support/component.ts",
    viewportWidth: 1280,
    viewportHeight: 720,
  },
});
