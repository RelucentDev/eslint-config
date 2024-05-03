---
"@relucent.dev/eslint-config": major
---

Initial release of configurable flat config.

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
