/**
 * Relucent ESLint Config.
 *
 * @copyright 2023 Relucent Ltd
 * @author    Relucent Ltd <hello@relucent.dev>
 * @see       https://relucent.dev
 */
import eslint from "@eslint/js";
import { ESLint, Linter } from "eslint";
import prettier from "eslint-config-prettier";
import jest from "eslint-plugin-jest";
import unicorn from "eslint-plugin-unicorn";
import globals from "globals";
import tseslint from "typescript-eslint";

export interface ESLintOptions {
  prettier?: boolean;
  typescript?: boolean;
  jest?: boolean;
  globals?: ESLint.Globals;
}

/**
 * Relucent's ESLint Config.
 * The basis for our ESLint configuration, requiring minimal additional
 * configuration - if any.
 *
 * @since 1.0.0
 */
export default function relucentESLint({
  prettier: enablePrettier = true,
  typescript: enableTS = true,
  jest: enableJest = true,
  globals: addGlobals = {},
}: ESLintOptions = {}): Linter.FlatConfig[] {
  const configs: Linter.FlatConfig[] = [eslint.configs.recommended];

  if (enableTS) {
    configs.push(...(tseslint.configs.recommended as Linter.FlatConfig[]));
  }

  if (enableJest) {
    configs.push(jest.configs["flat/recommended"], jest.configs["flat/style"]);
  }

  configs.push(
    unicorn.configs["flat/all"],
    {
      files: ["**/*.{ts,tsx,js,cjs,mjs,jsx}"],
      languageOptions: {
        ecmaVersion: "latest",
        parser: tseslint.parser as Linter.FlatConfigParserModule,
        globals: {
          ...globals.node,
          ...globals.builtin,
          ...globals.browser,
          ...globals.es2021,
          document: "readonly",
          navigator: "readonly",
          window: "readonly",
          ...addGlobals,
        },
      },
      plugins: {},
      rules: {
        // "unicorn/prefer-top-level-await": "off",
        "unicorn/filename-case": "off",
        "unicorn/custom-error-definition": "off",
      },
    },
    {
      ignores: [
        // Packages & Dependencies
        "**/node_modules",
        "**/package-lock.json",
        "**/yarn.lock",
        "**/pnpm-lock.yaml",
        "**/bun.lockb",

        // Outputs
        "**/dist",
        "**/output",
        "**/coverage",
        "**/temp",
        "**/.temp",
        "**/tmp",
        "**/.tmp",
        "**/.history",
        "**/.vitepress/cache",
        "**/.nuxt",
        "**/.next",
        "**/.vercel",
        "**/.changeset",
        "**/.idea",
        "**/.cache",
        "**/.output",
        "**/.vite-inspect",

        // General
        "**/CHANGELOG*.md",
        "**/*.min.*",
        "**/LICENSE*",
        "**/__snapshots__",
        "**/auto-import?(s).d.ts",
        "**/components.d.ts",
      ],
    },
  );

  if (enablePrettier) {
    configs.push(prettier);
  }

  return configs;
}
