/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */
export default {
  preset: "ts-jest",

  testEnvironment: "node",
  roots: ["./src/tests"],
  moduleFileExtensions: ["ts", "js", "json", "node"],

  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.ts?$",
  // Required to support tests in ES modules / .mjs files.
  // See https://jestjs.io/docs/ecmascript-modules.
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
};
