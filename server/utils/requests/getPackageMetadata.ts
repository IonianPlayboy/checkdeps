import type { Packument } from "pacote";

export const getPackageMetadata = defineCachedFunction(
	async (packageName: string) => {
		if (!packageName) return Promise.reject("No package name provided");
		const response = await $fetch<Packument>(
			`https://registry.npmjs.org/${packageName}`
		);
		return response;
	},
	{
		maxAge: 60 * 60,
		name: "PackageMetadata",
		getKey: (packageName: string) => packageName,
	}
);
