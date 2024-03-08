<template>
	<UContainer>
		<UPage>
			<UPageHeader>
				<template #title>
					{{ packageJsonData?.name }} - Dependencies List
				</template>
				<template #description>
					Here you can see the dependencies of your project.
				</template>
			</UPageHeader>

			<UPageBody class="space-y-8 overflow-y-auto">
				<h2 class="text-2xl font-bold">
					Direct Dependencies - {{ directDependenciesNames.length }}
				</h2>
				<UPageGrid>
					<DependencyCard
						v-for="dependencyName in directDependenciesNames"
						:key="dependencyName"
						:dependency-name="dependencyName"
						:project-id="id"
						:version-data="versionsPerDependency?.[dependencyName]"
					/>
				</UPageGrid>
				<h2 class="text-2xl font-bold">
					Dev Dependencies - {{ devDependenciesNames.length }}
				</h2>
				<UPageGrid>
					<DependencyCard
						v-for="dependencyName in devDependenciesNames"
						:key="dependencyName"
						:dependency-name="dependencyName"
						:project-id="id"
						:version-data="versionsPerDependency?.[dependencyName]"
					/>
				</UPageGrid>
			</UPageBody>
			<template #left>
				<UAside title="Your projects">
					<UNavigationTree :links="linksToProjects" />
				</UAside>
			</template>
		</UPage>
	</UContainer>
</template>

<script setup lang="ts">
import { useRouteParams } from "@vueuse/router";

definePageMeta({
	keepAlive: true,
});

const id = useRouteParams("id", "", { transform: String });

const { setCurrentProjectId } = useDependenciesStore();

watchEffect(() => {
	setCurrentProjectId(id.value);
});

const {
	data: packageJsonData,
	isLoading: isLoadingPackageJson,
	isError: isErrorPackageJson,
	error: packageJsonError,
} = useCurrentPackageJson();

const directDependenciesNames = computed(() =>
	Object.keys(packageJsonData.value?.dependencies ?? []),
);

const devDependenciesNames = computed(() =>
	Object.keys(packageJsonData.value?.devDependencies ?? []),
);

const versionsPerDependency = useCurrentVersionsPerDependency();

const projects = useCurrentProjects();

const linksToProjects = computed(() => [
	{
		label: "Your projects",
		children: projects.value.map((project) => ({
			label: project.name,
			to: `/project/${project.name}`,
			...(id.value === project.name
				? {
						children: [
							...directDependenciesNames.value.map(
								(dependencyName) => ({
									label: dependencyName,
									to: {
										name: "project-package-name",
										params: { name: dependencyName },
									},
								}),
							),
							...devDependenciesNames.value.map(
								(dependencyName) => ({
									label: dependencyName,
									to: {
										name: "project-package-name",
										params: { name: dependencyName },
									},
								}),
							),
						],
					}
				: {}),
		})),
	},
]);
</script>
