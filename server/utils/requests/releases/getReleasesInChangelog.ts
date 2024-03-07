export type GetReleasesInChangelogParams = {
	owner: string;
	repo: string;
	defaultBranch: string;
};

export const getReleasesInChangelog = defineCachedFunction(
	async ({ owner, repo, defaultBranch }: GetReleasesInChangelogParams) => {
		const changelog = await getRemoteFileContent({
			url: `https://raw.githubusercontent.com/${owner}/${repo}/${defaultBranch}/CHANGELOG.md`,
			type: "text",
		});
		return parseChangelogIntoReleases(changelog);
	},
	{
		maxAge: 60 * 60,
		name: "ChangelogReleases",
		getKey: ({ owner, repo, defaultBranch }) =>
			`${owner}/${repo}:${defaultBranch}`,
	},
);
