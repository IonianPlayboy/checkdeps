export const useCurrentVersionsPerDependency = () => {
	const { lockfileUrl } = useCurrentProjectConfig();

	const { data: packageJsonData } = useCurrentPackageJson();
	const { data: lockfileData } = useCurrentLockfile();

	const versionsPerDependency = computed(() =>
		getVersionsPerDependency({
			packageJson: packageJsonData,
			lockfileData: lockfileData,
			lockfileUrl,
		}),
	);

	return versionsPerDependency;
};
