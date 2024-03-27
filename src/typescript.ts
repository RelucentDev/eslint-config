/**
 * Relucent ESLint Config.
 *
 * @copyright 2023 Relucent Ltd
 * @author    Relucent Ltd <hello@relucent.dev>
 * @see       https://relucent.dev
 */
import baseConfig from "./index.js";
import typescriptESLint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import { Linter, ESLint } from "eslint";

const config: Linter.FlatConfig[] = [
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      parser: tsParser as Linter.ParserModule,
    },
    plugins: {
      "@typescript-eslint/eslint-plugin":
        typescriptESLint as unknown as ESLint.Plugin,
    },
  },
  ...baseConfig,
];

export default config;
