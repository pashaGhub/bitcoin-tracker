import type { Config } from "@jest/types";
const config: Config.InitialOptions = {
  verbose: true,
};

export default config;
module.exports = {
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
};
