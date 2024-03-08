import {
	getReleasesInChangelog,
	getNativeGithubReleases,
	getReleasesInWiki,
} from "./releases";

export type GetPackageReleasesDataParams = {
	owner: string;
	repo: string;
	defaultBranch: string;
	latestVersion?: string;
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
		latestVersion,
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

		const currentReleasesData =
			releasesResults
				.filter(matchIsFulfilled)
				.find(
					({ value }) =>
						!latestVersion ||
						value.some(({ name }) => name?.includes(latestVersion)),
				)?.value ?? [];

		return currentReleasesData;
	},
	{
		maxAge: 0,
		name: "PackageReleasesData",
		getKey: ({ owner, repo, defaultBranch }) =>
			`${owner}/${repo}:${defaultBranch}`,
	},
);
