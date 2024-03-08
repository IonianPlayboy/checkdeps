type GetPackageMetadataParams = {
	packageName?: string;
	signal?: AbortSignal;
};

const getPackageMetadata = async ({
	packageName,
	signal,
}: GetPackageMetadataParams) => {
	if (!packageName) return Promise.reject("No package name provided");

	const response = await $fetch("/api/npm/packageMetadata", {
		query: {
			packageName,
		},
		signal,
	});

	return response;
};

export type PackageMetadata = Awaited<ReturnType<typeof getPackageMetadata>>;

type PackageMetadataQueryOptions<T> = {
	dependencyName: MaybeRefOrGetter<string | undefined>;
	select?: (metadata: PackageMetadata) => T;
};

export const useDependencyMetadata = <T = PackageMetadata>({
	dependencyName,
	select,
}: PackageMetadataQueryOptions<T>) => {
	const isEnabled = computed(() => !!toValue(dependencyName));

	const dependencyMetadataQueryKey = computed(
		() => ["dependency", "metadata", toValue(dependencyName)] as const,
	);

	return useQuery({
		queryKey: dependencyMetadataQueryKey,
		queryFn: ({ signal }) =>
			getPackageMetadata({
				packageName: toValue(dependencyName),
				signal,
			}),
		enabled: isEnabled,
		select,
	});
};
