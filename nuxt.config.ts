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
	],
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
	},
	typescript: {
		strict: false,
	},
});
