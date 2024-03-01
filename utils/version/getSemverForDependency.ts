import type { PackageJson } from "type-fest";

export type GetSemverForDependencyParams = {
	packageJson: MaybeRefOrGetter<PackageJson | undefined>;
	dependencyName?: string;
};

export const getSemverForDependency = ({
	packageJson,
	dependencyName,
}: GetSemverForDependencyParams) => {
	if (!dependencyName) return;
	const packageJsonValue = toValue(packageJson);

	return dependencyName in (packageJsonValue?.dependencies ?? {})
		? packageJsonValue?.dependencies?.[dependencyName]
		: packageJsonValue?.devDependencies?.[dependencyName];
};
