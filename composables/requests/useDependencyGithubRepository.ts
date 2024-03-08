import {
	type GithubRepository,
	useGithubRepository,
} from "./useGithubRepository";

export type DependencyGithubRepositoryQueryOptions<T> = {
	dependencyName: MaybeRefOrGetter<string | undefined>;
	select?: (repository: GithubRepository) => T;
};

export const useDependencyGithubRepository = <T = GithubRepository>({
	dependencyName,
	select,
}: DependencyGithubRepositoryQueryOptions<T>) => {
	const { data: repositoryParams, isLoading: isLoadingDependencyMetadata } =
		useDependencyMetadata({
			dependencyName,
			select: ({ repository, bugs }) =>
				getOwnerAndRepoForDependency({
					repository,
					bugs,
				}),
		});

	const isEnabled = computed(() => !isLoadingDependencyMetadata.value);

	return useGithubRepository({
		owner: () => repositoryParams.value?.owner,
		repo: () => repositoryParams.value?.repo,
		enabled: isEnabled,
		select,
	});
};
