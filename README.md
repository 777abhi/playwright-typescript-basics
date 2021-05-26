# playwright helpers

## Run tests

```javascript
node st.js
node wikiCodeGen.js
```

## Run Playwright interceptor with debug
npx cross-env PWDEBUG=1 node wikiCodeGen.js

npx playwright codegen wikipedia.org
npx playwright codegen https://demosite.executeautomation.com/index.html


## Test Runner playwright test runner
### Run all tests across Chromium, Firefox and WebKit
npx folio

### Run tests on a single browser
npx folio --param browserName=chromium

### Run all tests in headful mode
npx folio --param headful

### Run tests with slowMo (slows down Playwright operations by n milliseconds)
npx folio --param slowMo=100

### Save screenshots on failure in test-results directory
npx folio --param screenshotOnFailure

### Record videos
npx folio --param video

### Retry test failures
npx folio --retries 3

### See all options
npx folio --help

## Generic commands
git config --global user.name "Abhinav Sharma"
git config --global user.email 777abhi@gmail.com

