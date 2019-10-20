import { Configuration } from 'stylelint';

const config: Configuration = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-rational-order",
    "stylelint-prettier/recommended"
  ],
  plugins: [
    "stylelint-prettier",
    "stylelint-order",
    "stylelint-declaration-block-no-ignored-properties"
  ],
  processors: [],
  ignoreFiles: [],
  rules: {
    "prettier/prettier": true,
    "no-descending-specificity": null,
    "plugin/declaration-block-no-ignored-properties": true
  },
  defaultSeverity: 'error'
};

export default config;
