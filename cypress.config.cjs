const { defineConfig } = require("cypress");
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');

module.exports = defineConfig({
 
  chromeWebSecurity: false,
  video: false,
  defaultCommandTimeout: 20000,
  pageLoadTimeout: 90000,
  waitForAnimations: true,
  watchForFileChanges: false,
  viewportWidth: 1360,
  viewportHeight: 768,
  retries: {
    runMode: 0,
    openMode: 0,
  },
  userAgent: 'KVAutomation',
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'cypress-mochawesome-reporter, mocha-junit-reporter',
    cypressMochawesomeReporterReporterOptions: {
      reportDir: 'cypress/reports',
      charts: true,
      reportPageTitle: 'KV Automation Test Report',
      embeddedScreenshots: true,
      inlineAssets: true,
      code: false,
      saveJson: true
    },
    mochaJunitReporterReporterOptions: {
      mochaFile: 'cypress/reports/junitreport-[hash].xml'
    }
  },
  screenshotOnRunFailure : true,
  screenshotsFolder: 'cypress/reports/screenshots',
  e2e: {
    baseUrl: 'https://www.google.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('before:run', async (details) => {
        console.log('override before:run');
        await beforeRunHook(details);
      });
      on('after:run', async () => {
        console.log('override after:run');
        await afterRunHook();
      });
      on('task', {
        log(message) {
          console.log(message);
          return null
        }
      })
    },
  },
});
