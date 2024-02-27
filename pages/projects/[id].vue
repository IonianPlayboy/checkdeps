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
						:version-data="
							parsedVersionsPerDependency?.[dependencyName]
						"
					/>
				</UPageGrid>
				<h2 class="text-2xl font-bold">
					Dev Dependencies - {{ devDependenciesNames.length }}
				</h2>
				<UPageGrid>
					<DependencyCard
						v-for="(dependencyName, index) in devDependenciesNames"
						:key="dependencyName"
						:dependency-name="dependencyName"
						:project-id="id"
						:version-data="
							parsedVersionsPerDependency?.[dependencyName]
						"
						:index="index"
					/>
				</UPageGrid>
			</UPageBody>
		</UPage>
	</UContainer>
</template>

<script setup lang="ts">
import { useRouteParams } from "@vueuse/router";
import type { PackageJson } from "type-fest";

const id = useRouteParams("id", "", { transform: String });

const { currentProject, setCurrentProjectId, resetCurrentProjectId } =
	useDependenciesStore();

watchEffect(() => {
	setCurrentProjectId(id.value);
});

const currentJsonUrl = computed(() => currentProject?.packageJsonUrl);

const {
	data: packageJsonData,
	isLoading: isLoadingPackageJson,
	isError: isErrorPackageJson,
	error: packageJsonError,
} = useRemoteFileContent<PackageJson>({
	name: "packageJson",
	type: "json",
	url: currentJsonUrl,
});

const directDependenciesNames = computed(() =>
	Object.keys(packageJsonData.value?.dependencies ?? []),
);

const devDependenciesNames = computed(() =>
	Object.keys(packageJsonData.value?.devDependencies ?? []),
);

const currentLockfileUrl = computed(() => currentProject?.lockfileUrl);

const {
	data: lockfileData,
	isLoading: isLoadingLockfile,
	isError: isErrorLockfile,
	error: lockfileError,
} = useRemoteFileContent<string>({
	name: "lockfile",
	url: currentLockfileUrl,
});

const allDependenciesNames = computed(() => [
	...directDependenciesNames.value,
	...devDependenciesNames.value,
]);

const parsedVersionsPerDependency = computed(() =>
	getVersionsPerDependency({
		packageJson: packageJsonData,
		allDependenciesNames: allDependenciesNames,
		lockfileData: lockfileData,
		url: currentLockfileUrl,
	}),
);

onUnmounted(() => {
	resetCurrentProjectId();
});
</script>
