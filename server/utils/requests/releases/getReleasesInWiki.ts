export type GetReleasesInWikiParams = {
	owner: string;
	repo: string;
};

export const getReleasesInWiki = defineCachedFunction(
	async ({ owner, repo }: GetReleasesInWikiParams) => {
		// NOTE: There is no way to get any data from a GitHub wiki through the GitHub API
		// The only project that uses a wiki for its changelog that I know of is `lodash`
		// So for now the name of the wiki page is hardcoded following their convention
		// If we find more projects that use a wiki for their changelog we can make this more generic
		const changelogFromWiki = await getRemoteFileContent({
			url: `https://raw.githubusercontent.com/wiki/${owner}/${repo}/Changelog.md`,
			type: "text",
		});
		return parseChangelogIntoReleases(changelogFromWiki);
	},
	{
		maxAge: 0,
		name: "WikiReleases",
		getKey: ({ owner, repo }) => `${owner}/${repo}`,
	},
);
