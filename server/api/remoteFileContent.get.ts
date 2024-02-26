export default eventHandler(async (event) => {
	const { name, url, type } =
		getQuery<GetRemoteFileParams<"json" | "text">>(event);

	return await getRemoteFileContent({ name, url, type });
});
