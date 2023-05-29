import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  timeout: 60000,
  retries: 0,
  testDir: "tests/api/httpbin",
  use:{
    baseURL:'https://httpbin.org'
  }
};

export default config;
