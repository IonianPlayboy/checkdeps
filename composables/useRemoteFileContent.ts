type GetRemoteFileParams = {
	url?: string;
	type: "json" | "text";
	signal?: AbortSignal;
};

const getRemoteFileContent = async <Result>({
	url,
	type,
	signal,
}: GetRemoteFileParams) => {
	if (!url) return Promise.reject("No url provided");

	const fetchParamsPerType =
		type === "json" ? { parseResponse: JSON.parse } : {};

	// TODO: weird issue with the response type if not using the type assertion
	const response = await $fetch<Result>("/api/remoteFileContent", {
		query: { url, type },
		signal,
		...fetchParamsPerType,
	});
	return response;
};

type RemoteFileQueryOptions = {
	name: string;
	url: MaybeRefOrGetter<string | undefined>;
	type?: "json" | "text";
	enabled?: MaybeRef<boolean>;
};

export const useRemoteFileContent = <Result>({
	name,
	url,
	type,
	enabled,
}: RemoteFileQueryOptions) => {
	const isEnabled = computed(() => !!toValue(url) && toValue(enabled));

	const currentType = type ?? "text";

	const remoteFileContentQueryKey = computed(
		() => ["remoteFile", currentType, name, toValue(url)] as const,
	);

	return useQuery({
		queryKey: remoteFileContentQueryKey,
		queryFn: ({ signal }) =>
			getRemoteFileContent<Result>({
				url: toValue(url),
				type: currentType,
				signal,
			}),
		enabled: isEnabled,
	});
};
