type GetRemoteFileParams = {
	name: string;
	url?: string;
	type: "json" | "text";
	signal?: AbortSignal;
};

const getRemoteFileContent = async <Result>({
	name,
	url,
	type,
	signal,
}: GetRemoteFileParams) => {
	if (!url) return Promise.reject("No url provided");
	// TODO: weird issue with the response type if not using the type assertion
	const response = await $fetch<Result>("/api/remoteFileContent", {
		query: { name, url, type },
		parseResponse: JSON.parse,
		signal,
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

	const remoteFileContentQueryKey = computed(
		() => ["remoteFile", type, name, toValue(url)] as const,
	);

	return useQuery({
		queryKey: remoteFileContentQueryKey,
		queryFn: ({ signal }) =>
			getRemoteFileContent<Result>({
				name,
				url: toValue(url),
				type: type ?? "text",
				signal,
			}),
		enabled: isEnabled,
	});
};
