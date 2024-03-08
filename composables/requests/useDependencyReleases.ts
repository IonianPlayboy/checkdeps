import { useDependencyGithubRepository } from "./useDependencyGithubRepository";

type GetDependencyReleasesDataParams = {
	owner?: string;
	repo?: string;
	defaultBranch?: string;
	latestVersion?: string;
	signal?: AbortSignal;
};

const getDependencyReleasesData = async ({
	owner,
	repo,
	defaultBranch,
	latestVersion,
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
			latestVersion,
		},
		signal,
	});

	return response;
};

export type ReleasesData = Awaited<
	ReturnType<typeof getDependencyReleasesData>
>;

type DependencyReleasesDataQueryOptions<T> = {
	dependencyName: MaybeRefOrGetter<string | undefined>;
	latestVersion?: MaybeRefOrGetter<string>;
	select?: (releasesData: ReleasesData) => T;
};

export const useDependencyReleases = <T = ReleasesData>({
	dependencyName,
	latestVersion,
	select,
}: DependencyReleasesDataQueryOptions<T>) => {
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
				toValue(latestVersion),
			] as const,
	);

	return useQuery({
		queryKey: dependencyReleasesDataQueryKey,
		queryFn: ({ signal }) =>
			getDependencyReleasesData({
				...toValue(repositoryParams),
				latestVersion: toValue(latestVersion),
				signal,
			}),
		enabled: isEnabled,
		select,
	});
};
