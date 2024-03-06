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
		const result: Array<{
			id: number;
			name: string | null;
			body?: string | null | undefined;
		}> = changelog
			.replaceAll(
				/(#+[^\S\r\n]+[^\r\n]*\d+\.\d+\.\d+[^\r\n]*\s)/g,
				"<SEPARATE_HERE>$1",
			)
			?.split("<SEPARATE_HERE>")
			.filter((el) => el.trim().length > 0)
			.map((el, i, array) => {
				const [firstLine] = el.split("\n");
				const [version] = firstLine.match(/\d+\.\d+\.\d+/) ?? [];
				return {
					id: array.length - i,
					name: version ?? null,
					// NOTE: Need to escape double curly braces here to avoid parsing it as dynamic content
					// Reference to Nuxt Content doc: https://content.nuxt.com/usage/markdown#binding-data-in-markdown
					body: el.replace("{{}}", "\\{\\{\\}\\}"),
				};
			});
		return result;
	},
	{
		maxAge: 60 * 60,
		name: "ChangelogReleases",
		getKey: ({ owner, repo, defaultBranch }) =>
			`${owner}/${repo}:${defaultBranch}`,
	},
);
