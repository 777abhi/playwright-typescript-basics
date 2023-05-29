[![main caller wf - test execution](https://github.com/777abhi/playwright-typescript-basics/actions/workflows/caller.yml/badge.svg)](https://github.com/777abhi/playwright-typescript-basics/actions/workflows/caller.yml)

# Framework Documentation 
https://playwright.dev/docs/intro

# Run all test
```bash
npm test
```

# Run report
```bash
npm run test:report
```

# Run test in debug mode
```bash
npm run test:debug
```

# Run sanity test
```bash
npm run test:sanity
```

# Run regression test
```bash
npm run test:regression
```

# Run new Feature test
```bash
npm run test:newFeature
```

# Run api test
```bash
npm run test:api
```

# Author test cases 
npx playwright codegen demo.playwright.dev/todomvc

# Data Dogs send trace logs commands
DD_CIVISIBILITY_AGENTLESS_ENABLED=true
DD_API_KEY=xx
DD_SITE=datadoghq.eu
NODE_OPTIONS="-r dd-trace/ci/init" DD_ENV=ci DD_SERVICE=my-javascript-app npm test


DD_ENV=ci DATADOG_API_KEY=xx DATADOG_SITE=datadoghq.eu datadog-ci junit upload \
  --service test-my-service \
  TEST-io.cucumber.examples.runner.e2e.RunCucumberTest_e2e_Sanity.xml


NODE_OPTIONS="-r dd-trace/ci/init" DD_ENV=ci DD_SERVICE=my-javascript-app DD_CIVISIBILITY_AGENTLESS_ENABLED=true DD_API_KEY=xx DD_SITE=datadoghq.eu DD_CIVISIBILITY_GIT_UPLOAD_ENABLED=true DD_CIVISIBILITY_ITR_ENABLED=true npm run test:sanity

NODE_OPTIONS="-r dd-trace/ci/init" DD_ENV=ci DD_SERVICE=my-javascript-app DD_CIVISIBILITY_AGENTLESS_ENABLED=true DD_API_KEY=xx DD_SITE=datadoghq.eu DD_CIVISIBILITY_GIT_UPLOAD_ENABLED=true DD_CIVISIBILITY_ITR_ENABLED=true npx playwright test --project=chromium



printenv
