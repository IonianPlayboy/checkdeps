import {
	getVersionForDependencyInYarnLockfile,
	getVersionForDependencyInPnpmLockfile,
	getVersionForDependencyInNpmLockfile,
} from "./getVersionInLockfile";

export type GetLockfileVersionForDependencyParams = {
	dependencyName?: string;
	lockfileData?: string;
	lockfileUrl?: string;
};

export const getLockfileVersionForDependency = ({
	lockfileUrl,
	...restOfParams
}: GetLockfileVersionForDependencyParams) => {
	if (lockfileUrl?.endsWith("yarn.lock"))
		return getVersionForDependencyInYarnLockfile(restOfParams);
	if (lockfileUrl?.endsWith("pnpm-lock.yaml"))
		return getVersionForDependencyInPnpmLockfile(restOfParams);
	if (lockfileUrl?.endsWith("package-lock.json"))
		return getVersionForDependencyInNpmLockfile(restOfParams);
};
