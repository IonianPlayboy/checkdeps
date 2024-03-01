import type { PackageJson } from "type-fest";

import {
	getLockfileVersionForDependency,
	getSemverForDependency,
} from "./index";

export type GetVersionsPerDependencyParams = {
	packageJson: MaybeRefOrGetter<PackageJson | undefined>;
	allDependenciesNames: MaybeRefOrGetter<string[]>;
	lockfileData: MaybeRefOrGetter<string | undefined>;
	lockfileUrl: MaybeRefOrGetter<string | undefined>;
};

export const getVersionsPerDependency = ({
	packageJson,
	allDependenciesNames,
	lockfileData,
	lockfileUrl,
}: GetVersionsPerDependencyParams) => {
	const dependenciesNames = toValue(allDependenciesNames);
	return Object.fromEntries(
		dependenciesNames.map((dependencyName) => [
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
