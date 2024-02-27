import type { PackageJson } from "type-fest";

import {
	getLockfileVersionForDependency,
	getSemverForDependency,
} from "./index";

export type GetVersionsPerDependencyParams = {
	packageJson?: MaybeRefOrGetter<PackageJson>;
	allDependenciesNames: MaybeRefOrGetter<string[]>;
	lockfileData?: MaybeRefOrGetter<string>;
	url?: MaybeRefOrGetter<string>;
};

export const getVersionsPerDependency = ({
	packageJson,
	allDependenciesNames,
	lockfileData,
	url,
}: GetVersionsPerDependencyParams) => {
	const dependenciesNames = toValue(allDependenciesNames);
	return Object.fromEntries(
		dependenciesNames.map((dependencyName) => [
			dependencyName,
			{
				lockfileVersion: getLockfileVersionForDependency({
					dependencyName,
					lockfileData: toValue(lockfileData),
					url: toValue(url),
				}),
				semver: getSemverForDependency({ packageJson, dependencyName }),
				dependencyName,
			},
		]),
	);
};
