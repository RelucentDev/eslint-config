# @relucent.dev/eslint-config

## 3.0.1

### Patch Changes

- 5bbc141: adjust location of types
- 12044bd: adjust ignored glob patterns, adds additional ignored paths
- 9c57921: add additional globals

## 3.0.0

### Major Changes

- 446154b: remove eslint-plugin-jsdoc from preset configuration
- 446154b: Initial release of configurable flat config.

  ```diff
  import relucentESLint from "@relucent.dev/eslint-config";

  export default [
  - ...relucentESLint,
  + ...relucentESLint({
  +    // Configuration, e.g:
  +    prettier: false,
  +  }),
  ];
  ```

  ```diff
  - import tsRelucentESLint from "@relucent.dev/eslint-config/typescript";
  + import relucentESLint from "@relucent.dev/eslint-config";

  export default [
  - ...tsRelucentESLint,
  + // Now enabled by default
  + relucentESLint(),
  ];
  ```

### Patch Changes

- 446154b: update dependencies

## 2.0.7

### Patch Changes

- 4116042: bump dependencies

## 2.0.6

### Patch Changes

- c4a3765: bump dependencies

## 2.0.5

### Patch Changes

- bff1702: bump dependencies

## 2.0.4

### Patch Changes

- c31c2bf: re-publish under MIT license
- ede285b: bump dependencies

## 2.0.3

### Patch Changes

- 46bfa5c: use `tsup` for CJS+ESM interop

## 2.0.2

### Patch Changes

- d2adb5b: add directory to `package.json#repository`

## 2.0.1

### Patch Changes

- db54a91: Migrate to monorepo
