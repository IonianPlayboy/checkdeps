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

			<UPageBody class="space-y-8">
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
</script>
