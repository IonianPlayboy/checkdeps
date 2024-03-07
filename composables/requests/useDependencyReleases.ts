import { useDependencyGithubRepository } from "./useDependencyGithubRepository";

type GetDependencyReleasesDataParams = {
	owner?: string;
	repo?: string;
	defaultBranch?: string;
	signal?: AbortSignal;
};

const getDependencyReleasesData = async ({
	owner,
	repo,
	defaultBranch,
	signal,
}: GetDependencyReleasesDataParams = {}) => {
	if (!owner || !repo || !defaultBranch)
		return Promise.reject(
			"No valid repository found for provided dependency",
		);

	const response = await $fetch(`/api/releasesData`, {
		query: {
			owner,
			repo,
			defaultBranch,
		},
		signal,
	});

	return response;
};

type DependencyReleasesDataQueryOptions = {
	dependencyName?: MaybeRefOrGetter<string>;
};

export const useDependencyReleases = ({
	dependencyName,
}: DependencyReleasesDataQueryOptions) => {
	const { data: repositoryParams, isLoading: isLoadingDependencyRepository } =
		useDependencyGithubRepository({
			dependencyName,
			select: ({ owner: { login }, name, default_branch }) => ({
				owner: login,
				repo: name,
				defaultBranch: default_branch,
			}),
		});

	const isEnabled = computed(
		() =>
			!isLoadingDependencyRepository.value &&
			Boolean(repositoryParams.value?.owner) &&
			Boolean(repositoryParams.value?.repo) &&
			Boolean(repositoryParams.value?.defaultBranch),
	);

	const dependencyReleasesDataQueryKey = computed(
		() =>
			[
				"dependency",
				"github",
				"releasesData",
				repositoryParams.value?.owner,
				repositoryParams.value?.repo,
				repositoryParams.value?.defaultBranch,
			] as const,
	);

	return useQuery({
		queryKey: dependencyReleasesDataQueryKey,
		queryFn: ({ signal }) =>
			getDependencyReleasesData({
				...toValue(repositoryParams),
				signal,
			}),
		enabled: isEnabled,
	});
};
