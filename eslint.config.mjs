/* eslint-disable @stylistic/quote-props */
// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
  rules: {
    indent: "off",
    "vue/html-indent": "off",
    "vue/component-name-in-template-casing": "off",
    "@stylistic/indent": "off",
    "vue/singleline-html-element-content-newline": "off",
    "vue/attribute-linebreak": "off",
    "vue/max-attributes-per-line": "off",
    "vue/html-self-closing": "off",
  },
});
// Your custom configs here
