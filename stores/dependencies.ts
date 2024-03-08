export type ProjectToCheck = {
	name: string;
	packageJsonUrl: string;
	lockfileUrl?: string;
	owner?: string;
	repo?: string;
};

export const useDependenciesStore = defineStore("dependencies", () => {
	const projectsMap = ref(new Map<string, ProjectToCheck>());
	const currentProjectId = ref<string | null>(null);

	const projects = computed(() => Array.from(projectsMap.value.values()));
	const currentProject = computed(() =>
		currentProjectId.value
			? projectsMap.value.get(currentProjectId.value) ?? null
			: null,
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
	return {
		projectsMap,
		projects,
		currentProjectId,
		currentProject,
		addProject,
		setCurrentProjectId,
		resetCurrentProjectId,
	};
});
