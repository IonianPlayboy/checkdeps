<template>
	<UContainer>
		<UPage>
			<UPageHeader>
				<template #icon>
					<img
						v-if="repository?.organization?.avatar_url"
						class="h-8 w-8 rounded-full bg-gray-800"
						:src="repository?.organization?.avatar_url"
					/>
					<USkeleton v-else class="h-8 w-8 rounded-full" />
				</template>
				<template #title>
					<ULink :to="repository?.html_url">{{ packageName }}</ULink>
				</template>
				<template #description>
					{{ repository?.description }}
				</template>
			</UPageHeader>

			<UPageBody class="space-y-8" prose>
				<div v-if="isLoadingReleases">
					<USkeleton />
				</div>
				<div v-else-if="releasesError">{{ releasesError }}</div>
				<TextContentList
					v-if="!!releasesData"
					:content="releasesData"
				/>
			</UPageBody>
		</UPage>
	</UContainer>
</template>

<script setup lang="ts">
import { useRouteParams } from "@vueuse/router";

const packageName = useRouteParams("name", "", { transform: String });

const { data: metadata, isLoading: isLoadingMetadata } = useDependencyMetadata({
	dependencyName: packageName,
});
const { data: repository, isLoading: isLoadingRepository } =
	useDependencyGithubRepository({
		dependencyName: packageName,
	});

const {
	data: releasesData,
	isLoading: isLoadingReleases,
	error: releasesError,
} = useDependencyReleases({
	dependencyName: packageName,
});
</script>
