import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  timeout: 60000,
  retries: 0,
  testDir: "tests/api",
  use:{
    baseURL:'https://reqres.in'
  }
};

export default config;
