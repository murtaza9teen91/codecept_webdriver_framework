/** @type {CodeceptJS.MainConfig} */

const { setHeadlessWhen, setWindowSize } = require('@codeceptjs/configure');

// https://www.npmjs.com/package/@codeceptjs/configure
// HEADLESS=true npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS); 

exports.config = {
  tests: './tests/features/*_test.js',
  output: './report',
  helpers: {
    WebDriver: {
      url: process.env.URL || 'http://localhost',
      browser: 'chrome',
      desiredCapabilities: {
        chromeOptions: {
          args: [ "--disable-gpu", "--no-sandbox" ]
        }
      },
      coloredLogs: true,
      waitForTimeout: 60
    },
    ChaiWrapper: {
      require: 'codeceptjs-chai',
    },
  },
  
  // BDD stesps and feature files paths and pattern
  gherkin: { 
    features: "./tests/features/**/*.feature",
    steps: "./tests/steps/**/*_steps.js"
  },
 
  // include: {
  //   I: './steps_file.js'
  // },

  bootstrapAll: require( './bootstrap_all.js' ),
  bootstrap: require('./bootstrap.js'),

  teardown: require( './teardown.js' ),
  teardownAll: require( './teardown_all.js' ),

  mocha: {},

  plugins: {
     "allure": {
      enabled: true
     },

    retryFailedStep: {
       enabled: true
    }
  },

  timeout: 60,

  name: 'codecept_webdriver_framework'
}