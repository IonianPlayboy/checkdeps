import {
	getReleasesInChangelog,
	getNativeGithubReleases,
	getReleasesInWiki,
} from "./releases";

export type GetPackageReleasesDataParams = {
	owner: string;
	repo: string;
	defaultBranch: string;
	githubPersonalAccessToken: string;
};

const matchIsFulfilled = <T>(
	result: PromiseSettledResult<T>,
): result is PromiseFulfilledResult<T> => result.status === "fulfilled";

export const getPackageReleasesData = defineCachedFunction(
	async ({
		owner,
		repo,
		defaultBranch,
		githubPersonalAccessToken,
	}: GetPackageReleasesDataParams) => {
		const releasesResults = await Promise.allSettled([
			getReleasesInChangelog({
				owner,
				repo,
				defaultBranch,
			}),
			getReleasesInWiki({
				owner,
				repo,
			}),
			getNativeGithubReleases({
				owner,
				repo,
				githubPersonalAccessToken,
			}),
		]);

		return releasesResults.find(matchIsFulfilled)?.value ?? [];
	},
	{
		maxAge: 0,
		name: "PackageReleasesData",
		getKey: ({ owner, repo, defaultBranch }) =>
			`${owner}/${repo}:${defaultBranch}`,
	},
);
