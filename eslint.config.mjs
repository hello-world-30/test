import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // Base JS config
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
  },

  // Use ES modules
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "module",
    },
  },

  // Add browser and node globals
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },

  // ✅ Add Jest config for test files
  {
    files: ["**/__test__/**/*.js", "**/*.test.js"],
    plugins: {
      jest: await import("eslint-plugin-jest"),
    },
    languageOptions: {
      globals: globals.jest,
    },
    rules: {
      // Optional: You can enable or customize specific Jest rules here
    },
  },
]);
