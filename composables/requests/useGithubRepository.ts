type GetGithubRepositoryParams = {
	owner?: string;
	repo?: string;
	signal?: AbortSignal;
};

const getGithubRepository = async ({
	owner,
	repo,
	signal,
}: GetGithubRepositoryParams = {}) => {
	if (!owner || !repo) return Promise.reject("No valid repository found");

	const response = await $fetch(`/api/github/repository`, {
		query: {
			owner,
			repo,
		},
		signal,
	});
	return response;
};

export type GithubRepository = Awaited<ReturnType<typeof getGithubRepository>>;

export type GithubRepositoryQueryOptions<T> = {
	owner: MaybeRefOrGetter<string | undefined>;
	repo: MaybeRefOrGetter<string | undefined>;
	enabled?: MaybeRefOrGetter<boolean>;
	select?: (repository: GithubRepository) => T;
};

export const useGithubRepository = <T = GithubRepository>({
	owner,
	repo,
	enabled,
	select,
}: GithubRepositoryQueryOptions<T>) => {
	const isEnabled = computed(
		() =>
			Boolean(toValue(owner)) &&
			Boolean(toValue(repo)) &&
			(enabled !== undefined ? toValue(enabled) : true),
	);

	const githubRepositoryQueryKey = computed(
		() => ["github", "repository", toValue(owner), toValue(repo)] as const,
	);

	return useQuery({
		queryKey: githubRepositoryQueryKey,
		queryFn: ({ signal }) =>
			getGithubRepository({
				owner: toValue(owner),
				repo: toValue(repo),
				signal,
			}),
		enabled: isEnabled,
		select,
	});
};
