module.exports = {
	root: true,
	extends: ["@nuxt/eslint-config"],
	rules: {
		// Vue
		"vue/multi-word-component-names": 0,
		"vue/max-attributes-per-line": "off",
		"vue/no-v-html": 0,
		"vue/html-indent": 0,
		"vue/singleline-html-element-content-newline": 0,
	},
};
