# initial package.json
npm init

# required libs
npm install playwright chai prettier @cucumber/cucumber cucumber-html-reporter

# TEST command 
 "test": "./node_modules/.bin/cucumber-js --require cucumber.js --require step-def/**/*.js -f json:cucumber_report.json --publish-quiet"
  



