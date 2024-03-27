/**
 * Relucent ESLint Config.
 *
 * @copyright 2023 Relucent Ltd
 * @author    Relucent Ltd <hello@relucent.dev>
 * @see       https://relucent.dev
 */
import jsRecommended from "@eslint/js";
import { Linter } from "eslint";
import eslintConfigPrettier from "eslint-config-prettier";
import jsdoc from "eslint-plugin-jsdoc";

const config: Linter.FlatConfig[] = [
  jsdoc.configs["flat/recommended"],
  jsRecommended.configs.recommended,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    rules: {
      "jsdoc/require-param": "off",
      "jsdoc/require-param-type": "off",
      "jsdoc/require-returns-type": "off",
      "jsdoc/require-param-description": "off",
      "jsdoc/tag-lines": [
        "warn",
        "any",
        {
          startLines: 1,
        },
      ],
      "jsdoc/require-returns": "off",
    },
  },
  eslintConfigPrettier,
];

export default config;
