exports.config = {
  runner: 'local',
  port: 4723,

  // Sauce Labs auth
  user: 'oauth-wisleymiguel4032x-4019b',
  key: 'a1a34a93-fd52-4f85-a4d1-c08246ef704e',
  region: 'us',

  specs: ['./test/specs/**/*.js'],
  exclude: [],
  maxInstances: 1,

  capabilities: [
    {
      platformName: 'Android',
      'appium:deviceName': 'Android GoogleAPI Emulator',
      'appium:platformVersion': '12.0',
      'appium:automationName': 'UiAutomator2',
      'appium:app': 'storage:filename=ebacshop (1).aab',
      'appium:appWaitActivity': 'MainActivity',
      'appium:disableIdLocatorAutocompletion': true,
      'sauce:options': {
        build: 'appium-build-teste-Ebac',
        name: 'EBAC Shop Test',
        deviceOrientation: 'PORTRAIT'
      }
    }
  ],

  logLevel: 'info',
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,

  // ATIVAR o Sauce Labs
  services: ['sauce'],

  framework: 'mocha',

  reporters: [
    'spec',
    [
      'allure',
      {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
      },
    ],
  ],

  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  },
};
