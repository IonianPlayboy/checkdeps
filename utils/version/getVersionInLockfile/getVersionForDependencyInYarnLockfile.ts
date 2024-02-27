export type GetVersionForDependencyInYarnLockfileParams = {
	dependencyName?: string;
	lockfileData?: string;
};

export const getVersionForDependencyInYarnLockfile = ({
	dependencyName,
	lockfileData,
}: GetVersionForDependencyInYarnLockfileParams) =>
	lockfileData?.match(
		new RegExp(
			`\\s"?(?<name>${dependencyName})@[^:]+"?:[^v]+version "(?<version>[^"]+)"`,
		),
	)?.groups?.version;
