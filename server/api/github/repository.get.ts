export default eventHandler(async (event) => {
	const { githubPersonalAccessToken } = useRuntimeConfig(event);
	const { owner, repo } = getQuery<{
		owner: string;
		repo: string;
	}>(event);

	return await getGithubRepository(owner, repo, githubPersonalAccessToken);
});
