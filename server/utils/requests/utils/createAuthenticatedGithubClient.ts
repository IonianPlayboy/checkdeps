import { Octokit } from "octokit";

export const createAuthenticatedGithubClient = (token: string) => {
	const octokit = new Octokit({
		auth: token,
	});
	return octokit;
};
