import type { PackageJson } from "type-fest";

export type GetSemverForDependencyParams = {
	packageJson?: MaybeRefOrGetter<PackageJson>;
	dependencyName?: string;
};

export const getSemverForDependency = ({
	packageJson,
	dependencyName,
}: GetSemverForDependencyParams) => {
	const packageJsonValue = toValue(packageJson);
	return dependencyName in (packageJsonValue?.dependencies ?? {})
		? packageJsonValue?.dependencies?.[dependencyName]
		: packageJsonValue?.devDependencies?.[dependencyName];
};
