import { defineVitestConfig } from "@nuxt/test-utils/config";

import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const currentDirname = dirname(fileURLToPath(import.meta.url));

export default defineVitestConfig({
	resolve: {
		alias: {
			"@": resolve(currentDirname, "."),
		},
	},
});
