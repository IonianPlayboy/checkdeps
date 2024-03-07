export type PackageLockJson =
	| {
			name: string;
			lockfileVersion: 1;
			dependencies: Record<string, { version: string }>;
	  }
	| {
			name: string;
			lockfileVersion: 2;
			packages: Record<string, { version: string }>;
	  };

export type GetVersionForDependencyInNpmLockfileParams = {
	dependencyName?: string;
	lockfileData?: string;
};

export const getVersionForDependencyInNpmLockfile = ({
	dependencyName,
	lockfileData,
}: GetVersionForDependencyInNpmLockfileParams) => {
	try {
		if (!lockfileData) return;
		const lockfileJson = JSON.parse(lockfileData) as PackageLockJson;
		const currentDependenciesRecord =
			"dependencies" in lockfileJson
				? lockfileJson.dependencies
				: lockfileJson.packages;

		return currentDependenciesRecord[dependencyName ?? ""]?.version;
	} catch (error) {
		console.log("error", error);
		return undefined;
	}
};
