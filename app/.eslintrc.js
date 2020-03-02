module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react-hooks", "react-native"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:react/recommended",
  ],
  settings: {
    react: {
      pragma: "React",
      version: "detect",
    },
  },
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react-native/no-unused-styles": "error",
    "react-native/no-inline-styles": "error",
    "react-native/no-raw-text": "error",
  },
};
