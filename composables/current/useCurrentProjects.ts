export const useCurrentProjects = () => {
	const { projects } = useDependenciesStore();

	return computed(() => projects);
};
