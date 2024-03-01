type GetDependencyGithubRepositoryParams = {
	owner?: string;
	repo?: string;
	signal?: AbortSignal;
};

const getDependencyGithubRepository = async ({
	owner,
	repo,
	signal,
}: GetDependencyGithubRepositoryParams = {}) => {
	if (!owner || !repo)
		return Promise.reject(
			"No valid repository found for provided dependency",
		);

	const response = await $fetch(`/api/github/repository`, {
		query: {
			owner,
			repo,
		},
		signal,
	});
	return response;
};

export type GithubRepository = Awaited<
	ReturnType<typeof getDependencyGithubRepository>
>;

export type DependencyGithubRepositoryQueryOptions<T> = {
	dependencyName?: MaybeRefOrGetter<string>;
	select?: (repository: GithubRepository) => T;
};

export const useDependencyGithubRepository = <T = GithubRepository>({
	dependencyName,
	select,
}: DependencyGithubRepositoryQueryOptions<T>) => {
	const { data: repositoryParams, isLoading: isLoadingDependencyMetadata } =
		useDependencyMetadata({
			dependencyName,
			select: ({ repository }) => getOwnerAndRepoFromUrl(repository?.url),
		});

	const isEnabled = computed(
		() =>
			!isLoadingDependencyMetadata.value &&
			Boolean(repositoryParams.value?.owner) &&
			Boolean(repositoryParams.value?.repo),
	);

	const dependencyGithubRepositoryQueryKey = computed(
		() =>
			[
				"github",
				"repository",
				repositoryParams.value?.owner,
				repositoryParams.value?.repo,
			] as const,
	);

	return useQuery({
		queryKey: dependencyGithubRepositoryQueryKey,
		queryFn: ({ signal }) =>
			getDependencyGithubRepository({
				...toValue(repositoryParams),
				signal,
			}),
		enabled: isEnabled,
		select,
	});
};
