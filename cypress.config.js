const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );

  // ✅ CONFIG JSON REPORT (CORRECTE)
  config.env = {
    ...config.env,
  };

  config.cucumber = {
    json: {
      enabled: true,
      output: "cypress/cucumber-json/results.json",
    },
  };

  return config;
}

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*/*/features/*.feature",
    chromeWebSecurity: false,
    setupNodeEvents,
  },
});