/* eslint-disable @stylistic/indent */
/* eslint-disable @stylistic/quote-props */
// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
  rules: {
    indent: "off",
    "vue/html-indent": "off",
    "vue/component-name-in-template-casing": "off",
  },
});
// Your custom configs here
