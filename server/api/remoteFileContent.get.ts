export default eventHandler(async (event) => {
	const { url, type } = getQuery<GetRemoteFileParams<"json" | "text">>(event);

	return await getRemoteFileContent({ url, type });
});
