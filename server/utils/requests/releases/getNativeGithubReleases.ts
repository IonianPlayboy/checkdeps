import { createAuthenticatedGithubClient } from "../utils/createAuthenticatedGithubClient";

export type GetGithubReleasesParams = {
	owner: string;
	repo: string;
	githubPersonalAccessToken: string;
};

export const getNativeGithubReleases = defineCachedFunction(
	async ({
		owner,
		repo,
		githubPersonalAccessToken,
	}: GetGithubReleasesParams) => {
		try {
			const githubClient = createAuthenticatedGithubClient(
				githubPersonalAccessToken,
			);

			const releases = await githubClient.paginate(
				githubClient.rest.repos.listReleases,
				{
					owner,
					repo,
					per_page: 100,
				},
			);

			return releases;
		} catch (error) {
			console.log("error", error);
			throw new Error("Failed to fetch GitHub releases");
		}
	},
	{
		maxAge: 60 * 60,
		name: "GithubReleases",
		getKey: ({ owner, repo }) => `${owner}/${repo}`,
	},
);
