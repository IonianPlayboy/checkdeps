export type GetVersionForDependencyInPnpmLockfileParams = {
	dependencyName?: string;
	lockfileData?: string;
};

export const getVersionForDependencyInPnpmLockfile = ({
	dependencyName,
	lockfileData,
}: GetVersionForDependencyInPnpmLockfileParams) =>
	lockfileData?.match(
		new RegExp(
			`'?(?<name>${dependencyName})'?:\\n[^v]+version: (?<version>[^\\n(]+)`,
		),
	)?.groups?.version;
