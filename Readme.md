[![main caller wf - test execution](https://github.com/777abhi/playwright-typescript-basics/actions/workflows/caller.yml/badge.svg)](https://github.com/777abhi/playwright-typescript-basics/actions/workflows/caller.yml)

# Playwright TypeScript Basics

This repository contains a robust test automation framework built with [Playwright](https://playwright.dev/) and TypeScript. It is designed to provide a solid foundation for end-to-end testing with features like page object models, CI/CD integration, and comprehensive reporting.

## 🚀 Features
- **TypeScript**: Type-safe code for better maintainability and developer experience.
- **Playwright**: Fast, reliable, and capable across all modern browsers.
- **ESLint & Prettier**: Enforced code quality and formatting.
- **Datadog Integration**: CI visibility and test observability.
- **Page Object Model (POM)**: Scalable test architecture.
- **Multiple Environments**: Configurations for Sanity, Regression, and API testing.

## 📋 Prerequisites
- **Node.js**: v14 or higher
- **npm**: v6 or higher

## 🛠️ Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/777abhi/playwright-typescript-basics.git
   cd playwright-typescript-basics
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Install Playwright browsers:**
   ```bash
   npx playwright install
   ```

## 📂 Project Structure

```
playwright-typescript-basics/
├── tests/                  # Active test specifications (API & UI)
├── archive-sample-projects-reference/ # Archive of reference/learning projects
├── documentation/          # Additional project documentation & metrics
├── playwright.config.ts    # Main Playwright configuration
├── package.json            # Project dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── eslint.config.mjs       # ESLint configuration
```

## 🏃 running Tests

The `package.json` file includes several handy scripts for running tests:

| Command | Description |
| :--- | :--- |
| `npm test` | Run all tests using the default configuration. |
| `npm run test:sanity` | Run only tests tagged with `@sanity`. |
| `npm run test:regression` | Run only tests tagged with `@regression`. |
| `npm run test:newFeature` | Run tests for new features. |
| `npm run test:api` | Run API specific tests. |
| `npm run test:debug` | Run tests in debug mode with the Playwright Inspector. |
| `npm run test:report` | Open the HTML test report. |

### Example Usages
**Run all tests in Chromium:**
```bash
npm test
```

**Run Sanity Tests:**
```bash
npm run test:sanity
```

**Debug a Test:**
```bash
npm run test:debug
```

## 📊 CI/CD & Observability

This project is configured to send test results and traces to Datadog for CI Visibility.

**Environment Variables Required:**
- `DD_API_KEY`: Your Datadog API Key.
- `DD_SITE`: Datadog site (e.g., `datadoghq.eu`).
- `DD_ENV`: CI Environment (e.g., `ci`).
- `DD_SERVICE`: Service name (e.g., `my-javascript-app`).

**Example Run with Datadog:**
```bash
DD_CIVISIBILITY_AGENTLESS_ENABLED=true DD_API_KEY=xx DD_SITE=datadoghq.eu NODE_OPTIONS="-r dd-trace/ci/init" npm test
```

## 📚 Resources & Documentation
- [Official Playwright Documentation](https://playwright.dev/docs/intro)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Datadog CI Visibility](https://docs.datadoghq.com/continuous_integration/)

Additional project metrics and guides can be found in the `documentation/` directory.