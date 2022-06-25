// playwright.config.ts
import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  retries: 0,
  testDir: "tests",
  projects: [
    {
      name: "chromium",
      use: {
        browserName: "chromium",
      },
    },
  ],
};
export default config;
