// module.exports = {
//   env: { browser: true, es2020: true },
//   extends: [
//     "eslint:recommended",
//     "plugin:react/recommended"
//   ],
//   parser: "@typescript-eslint/parser",
//   parserOptions: { ecmaVersion: "latest", sourceType: "module" },
//   plugins: ["react-refresh"],
//   rules: {
//     "no-unused-vars": "off",
//     '@typescript-eslint/no-unused-vars': ['off'],
//     "react-refresh/only-export-components": "warn"
//   }
// };
module.exports = {
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    "react"
  ],
  rules: {
    "no-unused-vars": "off",
    "react/jsx-uses-vars": "error"
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};