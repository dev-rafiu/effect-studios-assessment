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
    "vue/html-closing-bracket-newline": "off",
    "nuxt/nuxt-config-keys-order": "off",
    "@stylistic/quotes": "off",
    "@stylistic/brace-style": "off",
    "@stylistic/comma-dangle": "off",
  },
});
// Your custom configs here
