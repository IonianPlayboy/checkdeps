export type CurrentLockFileOptions = Omit<
	RemoteFileQueryOptions,
	"type" | "name" | "url"
>;

export const useCurrentLockfile = (options?: CurrentLockFileOptions) => {
	const { lockfileUrl } = useCurrentProjectConfig();

	return useRemoteFileContent<string>({
		name: "lockfile",
		url: lockfileUrl,
		type: "text",
		...options,
	});
};
