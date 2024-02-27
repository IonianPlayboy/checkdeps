<template>
	<UPageCard
		:ui="{
			icon: {
				wrapper: 'flex justify-between w-full',
			},
			title: 'w-full flex justify-between',
			body: { base: 'h-full flex flex-col' },
			description: 'flex flex-col justify-between flex-1 ',
		}"
	>
		<template #title>
			<template v-if="dependencyName">
				<strong>{{ dependencyName }}</strong>
			</template>
			<div v-else class="w-full flex justify-between py-1">
				<USkeleton class="h-4.5 w-20" />
				<USkeleton class="h-4 w-12" />
			</div>
		</template>
	</UPageCard>
</template>

<script setup lang="ts">
defineProps<{
	dependencyName?: string;
	projectId: string;
	versionData?: Partial<{
		lockfileVersion: string;
		semver: string;
	}>;
	index?: number;
}>();
</script>
