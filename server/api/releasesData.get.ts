export default eventHandler(async (event) => {
	const { githubPersonalAccessToken } = useRuntimeConfig(event);
	const params = getQuery<{
		owner: string;
		repo: string;
		defaultBranch: string;
	}>(event);

	return await getPackageReleasesData({
		...params,
		githubPersonalAccessToken,
	});
});
