# Relucent ESLint Config

![Relucent Shared ESLint Config Cover Image](cover.png)

Shared ESLint config for Relucent projects.

[![@relucent.dev/eslint-config version]][npmjs-package]

[npmjs-package]: https://npmjs.com/@relucent.dev/eslint-config
[@relucent.dev/eslint-config version]:
  https://img.shields.io/npm/v/%40relucent.dev/eslint-config

## Usage

```ts
// eslint.config.js

import relucentESLint from "@relucent.dev/eslint-congig";

export default [
  // To use the default rules
  relucentESLint(),
];
```

or adjust some things:

```ts
// eslint.config.js

import relucentESLint from "@relucent.dev/eslint-congig";

export default [
  relucentESLint({
    /** Enable Prettier Rules. Default: true */
    prettier: true,

    /** Enable TypeScript Rules. Default: true */
    typescript: true,

    /** Enable Jest Rules. Default: true */
    jest: true,
  }),
];
```

## License

MIT &copy; 2024 Relucent Ltd

### Contact

**Relucent Ltd**: <https://relucent.dev> <<hello@relucent.dev>>

**Project Manager**: Dom Webber <https://domwebber.dev>
<<dom.webber@hotmail.com>>
