export type ProjectToCheck = {
	name: string;
	packageJsonUrl: string;
	lockfileUrl?: string;
	// versionsPerDependency: Record<
	// 	string,
	// 	Partial<{
	// 		lockfileVersion: string;
	// 		semver: string;
	// 	}>
	// >;
};

export const useDependenciesStore = defineStore("dependencies", () => {
	const projectsMap = ref(new Map<string, ProjectToCheck>());
	const currentProjectId = ref<string | null>(null);

	const projects = computed(() => Array.from(projectsMap.value.values()));
	const currentProject = computed(() =>
		projectsMap.value.get(currentProjectId.value),
	);

	const addProject = (project: ProjectToCheck) => {
		projectsMap.value.set(project.name, project);
	};
	const setCurrentProjectId = (projectId: string) => {
		currentProjectId.value = projectId;
	};
	const resetCurrentProjectId = () => {
		currentProjectId.value = null;
	};

	watchEffect(() => {
		console.log("currentProjectId", currentProjectId.value, projects.value);
	});

	return {
		projects,
		currentProjectId,
		currentProject,
		addProject,
		setCurrentProjectId,
		resetCurrentProjectId,
	};
});
