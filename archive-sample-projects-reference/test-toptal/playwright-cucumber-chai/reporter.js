const reporter = require('cucumber-html-reporter')

const options = {
  theme: 'bootstrap',
  jsonFile: 'cucumber_report.json',
  output: 'reports/cucumber_report.html',
  reportSuiteAsScenario: true,
  scenarioTimestamp: true,
  launchReport: false,
  metadata: {
    'App Version': '2.0.0',
    'Test Environment': 'Staging',
    Browser: 'Chrome 102',
    Platform: 'Windows 11',
  },
}

reporter.generate(options)
