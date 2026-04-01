import js from "@eslint/js";
import globals from "globals";
import pluginJs from "@eslint/js";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import jest from "eslint-plugin-jest";
import tseslint from "typescript-eslint";

export default [
  // Ignore files
  {
    ignores: ["node_modules", "dist", "build"],
  },
  { files: ["src/**/*.{js,ts}"] },
  { files: ["**/*.js"], languageOptions: { sourceType: "commomJs" } },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["src/tests/**/*.{js,ts}"],
    ...jest.configs["flat/recommended"],
    rules: {
      ...jest.configs["flat/recommended"].rules,
      "jest/prefer-expect-assertions": "off",
    },
  },

  // Base JS recommended config
  js.configs.recommended,

  // Node.js environment
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node,
      },
    },
  },

  // Your custom rules
  {
    rules: {
      // Example rules (customize as needed)
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "prettier/prettier": [
        // "error",
        // {
        //   singleQuote: true,
        //   parser: "flow",
        // },
      ],
    },
  },

  // Disable ESLint rules that conflict with Prettier
  eslintPluginPrettierRecommended,
];
