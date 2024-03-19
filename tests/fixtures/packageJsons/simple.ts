import type { PackageJson } from "type-fest";

export const simplePackageJson = {
	name: "@vitest/example-test",
	type: "module",
	private: true,
	license: "MIT",
	main: "index.js",
	scripts: {
		test: "vitest",
		"test:ui": "vitest --ui",
		"test:run": "vitest run",
	},
	dependencies: {
		vite: "^5.1.6",
	},
	devDependencies: {
		"@vitest/ui": "1.3.0",
		vitest: "latest",
	},
} satisfies PackageJson;
