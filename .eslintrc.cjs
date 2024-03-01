module.exports = {
	root: true,
	extends: ["@nuxt/eslint-config"],
	rules: {
		"no-mixed-spaces-and-tabs": 0,
		// Vue
		"vue/multi-word-component-names": 0,
		"vue/max-attributes-per-line": "off",
		"vue/no-v-html": 0,
		"vue/html-indent": 0,
		"vue/singleline-html-element-content-newline": 0,
		"vue/html-self-closing": 0,
		"vue/v-slot-style": [
			1,
			{
				atComponent: "shorthand",
			},
		],
	},
};
