<template>
	<UPageCard
		:ui="{
			// @ts-ignore
			icon: {
				wrapper: 'flex justify-between w-full',
			},
			title: 'w-full flex justify-between',
			// @ts-ignore
			body: { base: 'h-full flex flex-col' },
			description: 'flex flex-col justify-between flex-1 ',
		}"
		:to="linkToPackageParams"
	>
		<template #icon>
			<img
				v-if="repository?.organization?.avatar_url"
				class="h-8 w-8 rounded-full bg-gray-800"
				:src="repository?.organization?.avatar_url"
			/>
			<USkeleton v-else class="h-8 w-8 rounded-full" />
			<UBadge
				v-if="!!currentLockfileVersion"
				:color="
					latestVersion === currentLockfileVersion
						? 'green'
						: 'yellow'
				"
				:variant="
					latestVersion === currentLockfileVersion ? 'soft' : 'subtle'
				"
			>
				{{
					latestVersion === currentLockfileVersion
						? "Up to date"
						: "Outdated"
				}}
			</UBadge>
		</template>
		<template #title>
			<strong>{{ dependencyName }}</strong>
			<template v-if="!!metadata">
				<span class="text-sm text-gray-500">
					{{
						!!currentLockfileVersion &&
						latestVersion !== currentLockfileVersion
							? `${currentLockfileVersion} - `
							: ""
					}}
					{{ metadata?.["dist-tags"].latest }}
				</span>
			</template>
			<div v-else class="w-full flex justify-between py-1">
				<USkeleton class="h-4.5 w-20" />
				<USkeleton class="h-4 w-12" />
			</div>
		</template>
		<template #description>
			<p v-if="!!repository" class="min-h-[2lh]">
				{{ repository?.description }}
			</p>
			<div v-else class="flex flex-col space-y-2 py-1">
				<USkeleton class="h-3.5 w-[250px]" />
				<USkeleton class="h-3.5 w-[200px]" />
			</div>
			<p v-if="!!modifiedTimestamp" class="text-sm mt-1 text-gray-500">
				Last update {{ formattedModifiedDate }}
			</p>
			<USkeleton v-else class="h-3 py-0.5 mt-1 w-32" />
		</template>
	</UPageCard>
</template>

<script setup lang="ts">
const props = defineProps<{
	dependencyName: string;
	projectId: string;
	versionData?: Partial<{
		lockfileVersion: string;
		semver: string;
	}>;
}>();

const currentLockfileVersion = computed(
	() => props.versionData?.lockfileVersion,
);

const linkToPackageParams = computed(() => ({
	name: "project-package-name",
	params: { name: props.dependencyName },
}));

const { data: metadata, isLoading: isLoadingMetadata } = useDependencyMetadata({
	dependencyName: () => props.dependencyName,
});
const latestVersion = computed(
	() => metadata.value?.["dist-tags"].latest ?? "",
);

const { data: repository, isLoading: isLoadingRepository } =
	useDependencyGithubRepository({
		dependencyName: () => props.dependencyName,
	});

const modifiedTimestamp = computed(() => metadata.value?.time?.modified ?? "");

const formattedModifiedDate = useDateFormat(modifiedTimestamp, "YYYY-MM-DD");
</script>
