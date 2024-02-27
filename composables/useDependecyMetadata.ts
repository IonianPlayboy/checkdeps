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
	dependencyName?: MaybeRefOrGetter<string>;
	select?: (metadata: PackageMetadata) => T;
};

export const useDependencyMetadata = <T = PackageMetadata>({
	dependencyName,
	select,
}: PackageMetadataQueryOptions<T>) => {
	const isEnabled = computed(() => !!toValue(dependencyName));
	return useQuery({
		queryKey: ["packageMetadata", toValue(dependencyName)],
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		queryFn: ({ queryKey: [_, currentPackage], signal }) =>
			getPackageMetadata({ packageName: currentPackage, signal }),
		enabled: isEnabled,
		select,
	});
};
