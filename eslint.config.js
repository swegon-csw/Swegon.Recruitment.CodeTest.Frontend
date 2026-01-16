import js from "@eslint/js";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import jest from "eslint-plugin-jest";
import importPlugin from "eslint-plugin-import";
import globals from "globals";
import prettier from "eslint-config-prettier";

export default [
  {
    ignores: ["dist/**", "build/**", "*.config.*"],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  prettier,
  {
    files: ["src/**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
      globals: {
        ...globals.browser,
        ...globals.es6,
      },
    },
    plugins: {
      react: react,
      "react-hooks": reactHooks,
      import: importPlugin,
    },
    settings: {
      react: {
        version: "detect",
      },
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
          paths: ["src"],
        },
      },
      "import/ignore": ["node_modules", "\\.(scss|less|css|sass)$"],
    },
    rules: {
      curly: ["error", "all"],
      "import/no-unresolved": [
        "error",
        {
          ignore: ["^@/", "react-error-boundary", "\\.(css|scss|less|sass)$", "^@swegon-core/"],
        },
      ],
      "import/no-duplicates": "warn",
      "import/first": "warn",
      "import/newline-after-import": "warn",
      "import/no-useless-path-segments": "warn",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-non-null-assertion": "warn",
      "@typescript-eslint/prefer-optional-chain": "warn",
      "@typescript-eslint/no-unnecessary-type-assertion": "warn",
      "react/react-in-jsx-scope": "off", // Not needed with React 17+
      "react/jsx-uses-react": "off", // Not needed with React 17+ and new JSX transform
      "react/jsx-uses-vars": "error",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "no-unused-vars": "off", // @typescript-eslint handles this
      "no-case-declarations": "warn",
      "no-useless-catch": "warn",
      "no-irregular-whitespace": "warn",
      "no-extra-boolean-cast": "warn",
      "no-fallthrough": "warn",
    },
  },
  {
    files: ["src/**/*.test.{js,jsx,ts,tsx}", "src/**/__tests__/**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
    plugins: {
      jest: jest,
    },
    rules: {
      "jest/no-disabled-tests": "warn",
      "jest/no-focused-tests": "error",
      "jest/no-identical-title": "error",
      "jest/valid-title": "error",
      "jest/prefer-to-have-length": "warn",
      "jest/valid-expect": "error",
    },
  },
];
