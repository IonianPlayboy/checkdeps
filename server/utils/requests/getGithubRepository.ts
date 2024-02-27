import { createAuthenticatedGithubClient } from "./github/createAuthenticatedGithubClient";

export const getGithubRepository = defineCachedFunction(
	async (owner: string, repo: string, githubPersonalAccessToken: string) => {
		try {
			const githubClient = createAuthenticatedGithubClient(
				githubPersonalAccessToken,
			);

			const repository = await githubClient.rest.repos.get({
				owner,
				repo,
			});

			return repository.data;
		} catch (error) {
			console.log("error", error);
			throw new Error("Failed to fetch GitHub repository");
		}
	},
	{
		maxAge: 60 * 60,
		name: "GitHubRepo",
		getKey: (owner: string, repo: string) => `repository:${owner}/${repo}`,
	},
);
