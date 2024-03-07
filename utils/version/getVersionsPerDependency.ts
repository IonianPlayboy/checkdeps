import type { PackageJson } from "type-fest";

import {
	getLockfileVersionForDependency,
	getSemverForDependency,
} from "./index";

export type GetVersionsPerDependencyParams = {
	packageJson: MaybeRefOrGetter<PackageJson | undefined>;
	lockfileData: MaybeRefOrGetter<string | undefined>;
	lockfileUrl: MaybeRefOrGetter<string | undefined>;
};

export const getVersionsPerDependency = ({
	packageJson,
	lockfileData,
	lockfileUrl,
}: GetVersionsPerDependencyParams) => {
	const packageJsonValue = toValue(packageJson);
	const allDependenciesNames = [
		...Object.keys(packageJsonValue?.dependencies ?? {}),
		...Object.keys(packageJsonValue?.devDependencies ?? {}),
	];
	return Object.fromEntries(
		allDependenciesNames.map((dependencyName) => [
			dependencyName,
			{
				lockfileVersion: getLockfileVersionForDependency({
					dependencyName,
					lockfileData: toValue(lockfileData),
					lockfileUrl: toValue(lockfileUrl),
				}),
				semver: getSemverForDependency({ packageJson, dependencyName }),
				dependencyName,
			},
		]),
	);
};
