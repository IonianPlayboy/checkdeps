export default eventHandler(async (event) => {
	const { packageName } = getQuery<{
		packageName: string;
	}>(event);

	return await getPackageMetadata(packageName);
});
