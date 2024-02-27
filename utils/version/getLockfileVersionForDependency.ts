import {
	getVersionForDependencyInYarnLockfile,
	getVersionForDependencyInPnpmLockfile,
	getVersionForDependencyInNpmLockfile,
} from "./getVersionInLockfile";

export type GetLockfileVersionForDependencyParams = {
	dependencyName?: string;
	lockfileData?: string;
	url?: string;
};

export const getLockfileVersionForDependency = ({
	url,
	...restOfParams
}: GetLockfileVersionForDependencyParams) => {
	if (url?.endsWith("yarn.lock"))
		return getVersionForDependencyInYarnLockfile(restOfParams);
	if (url?.endsWith("pnpm-lock.yaml"))
		return getVersionForDependencyInPnpmLockfile(restOfParams);
	if (url?.endsWith("package-lock.json"))
		return getVersionForDependencyInNpmLockfile(restOfParams);
};
