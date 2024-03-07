import type { PackageJson } from "type-fest";

import { useCurrentProjectConfig } from "./useCurrentProjectConfig";

export type CurrentPackageJsonOptions = Omit<
	RemoteFileQueryOptions,
	"type" | "name" | "url"
>;

export const useCurrentPackageJson = (options?: CurrentPackageJsonOptions) => {
	const { packageJsonUrl } = useCurrentProjectConfig();

	return useRemoteFileContent<PackageJson>({
		name: "package.json",
		url: packageJsonUrl,
		type: "json",
		...options,
	});
};
