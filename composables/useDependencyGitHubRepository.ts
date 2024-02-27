type GetDependencyGitHubRepositoryParams = {
	owner?: string;
	repo?: string;
	signal?: AbortSignal;
};

const getDependencyGitHubRepository = async ({
	owner,
	repo,
	signal,
}: GetDependencyGitHubRepositoryParams = {}) => {
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

type dependencyGitHubRepositoryQueryOptions = {
	dependencyName?: MaybeRefOrGetter<string>;
};

export const useDependencyGitHubRepository = ({
	dependencyName,
}: dependencyGitHubRepositoryQueryOptions) => {
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

	const dependencyGitHubRepositoryQueryKey = computed(
		() =>
			[
				"github",
				"repository",
				repositoryParams.value?.owner,
				repositoryParams.value?.repo,
			] as const,
	);

	return useQuery({
		queryKey: dependencyGitHubRepositoryQueryKey,
		queryFn: ({ signal }) =>
			getDependencyGitHubRepository({
				...toValue(repositoryParams),
				signal,
			}),
		enabled: isEnabled,
	});
};
