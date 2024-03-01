// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	extends: ["@nuxt/ui-pro"],
	modules: [
		"@nuxt/content",
		"@nuxt/ui",
		"@nuxtjs/fontaine",
		"@nuxtjs/google-fonts",
		"@hebilicious/vue-query-nuxt",
		"@vueuse/nuxt",
		"@pinia/nuxt",
		"@nuxtjs/web-vitals",
	],
	content: {
		highlight: {
			theme: {
				default: "github-dark",
				light: "github-light",
			},
			langs: [
				"js",
				"ts",
				"vue",
				"css",
				"html",
				"vue",
				"shell",
				"graphql",
				"scss",
				"hbs",
				"console",
				"jsx",
				"tsx",
			],
		},
	},
	runtimeConfig: {
		githubPersonalAccessToken: "", // Will be replaced by NUXT_GITHUB_TOKEN
	},
	ui: {
		icons: ["heroicons", "simple-icons"],
	},
	// Fonts
	fontMetrics: {
		fonts: ["DM Sans"],
	},
	googleFonts: {
		display: "swap",
		download: true,
		families: {
			"DM+Sans": [400, 500, 600, 700],
		},
	},
	devtools: {
		enabled: true,
		timeline: {
			enabled: true,
		},
	},
	webVitals: {
		provider: "log",
		debug: true, // debug enable metrics reporting on dev environments
		disabled: false,
	},
});
