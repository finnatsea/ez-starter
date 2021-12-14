module.exports = {
  extends: [
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["react", "@typescript-eslint", "unused-imports", "react-hooks"],
  env: {
    browser: true,
    es6: true,
  },
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: "module",
    // See https://github.com/typescript-eslint/typescript-eslint/issues/251
    project: "**/**/tsconfig.json", // use this for linting inside vscode
  },
  rules: {
    "jsx-a11y/label-has-associated-control": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "react-hooks/exhaustive-deps": 0,
    "eslint-plugin-jsx-a11y/label-has-associated-control": 0,
    "no-param-reassign": 0,
    "no-nested-ternary": 0,
    "react/no-children-prop": "error",
    "react/self-closing-comp": ["error"],
    "eslint-plugin-jsx-a11y/no-static-element-interactions": "off",
    "prefer-destructuring": 0, // TODO eventually objects only
    "react/no-unused-prop-types": 0,
    "react/require-default-props": 0,
    "@typescript-eslint/no-unused-vars": [
      "warn",
      { vars: "all", varsIgnorePattern: "^_", args: "after-used", argsIgnorePattern: "^_" },
    ],
    "eslint-plugin-react-hooks/exhaustive-deps": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "react/destructuring-assignment": 0,
    "react/no-array-index-key": 0,
    "eslint-plugin-jsx-a11y/click-events-have-key-events": 0,
    "no-console": "error",
    "require-await": "error",
    "no-unused-expressions": [2, { allowTernary: true, allowShortCircuit: true }],
    "consistent-return": 0,
    "no-use-before-define": 0,
    "@typescript-eslint/explicit-function-return-type": 0, // TODO: ["error", { allowExpressions: true }],
    "import/order": [
      "error",
      {
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
        groups: [["builtin", "external"], "internal", "parent", "sibling"],
        pathGroups: [
          {
            pattern: "react",
            group: "external",
            position: "before",
          },
          {
            pattern: "./tracer",
            group: "external",
            position: "before",
          },
          {
            pattern: "@main/client/src/**",
            group: "parent",
          },
          {
            pattern: "@main/api/src/**",
            group: "parent",
          },
          {
            pattern: "@main/doc-types",
            group: "internal",
          },
          {
            pattern: "@main/prisma",
            group: "internal",
          },
          {
            pattern: "./*",
            group: "sibling",
          },
        ],
        pathGroupsExcludedImportTypes: ["react"],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
    "react-hooks/rules-of-hooks": ["error"],
    /** don't disable rules that aren't breaking */
    "import/prefer-default-export": 0,
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "linebreak-style": "off",
    "prefer-template": ["error"],
    "no-plusplus": "off",
    "spaced-comment": 0,
    "@typescript-eslint/ban-ts-comment": 0,
    eqeqeq: ["error", "always"],
    "array-callback-return": "off",
    "react/button-has-type": 0,
    quotes: ["error", "double", { avoidEscape: true }],
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "eslint-disable-next-line no-cond-assign": 0,
    "react/prop-types": 0,
    "import/no-relative-parent-imports": ["error"],
  },
  ignorePatterns: ["webpack.dev.js", "webpack.prod.js", "webpack.common.js", "node_modules", "build"],
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      files: ["*.ts"],
      rules: {
        "@typescript-eslint/explicit-module-boundary-types": ["error"],
      },
    },
    {
      files: ["*tsx"],
      rules: {
        "@typescript-eslint/no-unused-expressions": "off",
      },
    },
    /**
     * yarn v2 supports referencing own package name as @main/whatever
     * from within that package.  This is generally cleaner than finding
     * a relative import using hella ../../.. 's.  We want to turn
     * this to warn instead of error.
     */
    {
      files: ["services/api/**/*", "services/client/**/*"],
      rules: {
        "import/no-extraneous-dependencies": 0,
      },
    },
  ],
};
