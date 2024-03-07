export const useCurrentProjectConfig = () => {
	const { currentProject } = useDependenciesStore();

	return {
		name: computed(() => currentProject?.name),
		packageJsonUrl: computed(() => currentProject?.packageJsonUrl),
		lockfileUrl: computed(() => currentProject?.lockfileUrl),
	};
};
