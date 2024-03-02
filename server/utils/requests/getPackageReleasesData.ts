import { getGithubReleases } from "./getGithubReleases";

export type GetPackageReleasesDataParams = {
	owner: string;
	repo: string;
	defaultBranch: string;
	githubPersonalAccessToken: string;
};

export const getPackageReleasesData = defineCachedFunction(
	async ({
		owner,
		repo,
		defaultBranch,
		githubPersonalAccessToken,
	}: GetPackageReleasesDataParams) => {
		try {
			const changelog = await getRemoteFileContent({
				url: `https://raw.githubusercontent.com/${owner}/${repo}/${defaultBranch}/CHANGELOG.md`,
				type: "text",
			});
			return changelog
				.replaceAll(
					/(#+[^\S\r\n]+[^\r\n]*\d+\.\d+\.\d+[^\r\n]*\s)/g,
					"<SEPARATE_HERE>$1",
				)
				?.split("<SEPARATE_HERE>")
				.filter((el) => el.trim().length > 0)
				.map((el, i, array) => {
					const firstLine = el.split("\n")[0];
					const [version] = firstLine.match(/\d+\.\d+\.\d+/) ?? [];
					return {
						id: array.length - i,
						name: version,
						body: el,
					};
				});
		} catch (error) {
			console.log("error", error);
			console.log("fetching releases from GitHub", {
				owner,
				repo,
			});
			return getGithubReleases({
				owner,
				repo,
				githubPersonalAccessToken,
			});
		}
	},
	{
		maxAge: 60 * 60,
		name: "PackageReleasesData",
		getKey: ({ owner, repo, defaultBranch }) =>
			`${owner}/${repo}:${defaultBranch}`,
	},
);
