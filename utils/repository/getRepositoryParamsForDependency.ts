import { getOwnerAndRepoFromUrl } from "./getOwnerAndRepoFromUrl";

export const getOwnerAndRepoForDependency = (
	dependency: Pick<PackageMetadata, "repository" | "bugs">,
) => {
	const { owner, repo } = getOwnerAndRepoFromUrl(dependency.repository?.url);
	return owner && repo
		? { owner, repo }
		: getOwnerAndRepoFromUrl(dependency.bugs?.url);
};
