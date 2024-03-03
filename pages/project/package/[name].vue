<template>
	<UContainer>
		<UPage>
			<UPageHeader
				ref="headerElement"
				:ui="{
					wrapper: '[&>div>div.flex-1]:w-full',
					container: 'gap-8 items-stretch lg:items-stretch',

					title: 'flex gap-6 shrink-0',
					links: 'overflow-x-auto grid grid-flow-col grow items-stretch',
				}"
			>
				<template #title>
					<img
						v-if="repository?.organization?.avatar_url"
						class="h-10 w-10 rounded-full bg-gray-800"
						:src="repository?.organization?.avatar_url"
					/>
					<USkeleton v-else class="h-8 w-8 rounded-full" />
					<ULink :to="repository?.html_url">{{ packageName }}</ULink>
				</template>
				<template #links>
					<ReleasesLinksList
						:links="itemsLinks"
						:active-index="currentActiveItemIndex"
					/>
				</template>
				<template #description>
					{{ repository?.description }}
				</template>
			</UPageHeader>

			<UPageBody class="space-y-8 py-0 mt-0" prose>
				<div v-if="isLoadingReleases">
					<USkeleton />
				</div>
				<div v-else-if="releasesError">{{ releasesError }}</div>
				<ReleasesContentList
					v-if="!!releasesData"
					ref="textContentListElement"
					:content="releasesData"
					:items-links="itemsLinks"
					:page-header-height="height"
				/>
			</UPageBody>
		</UPage>
	</UContainer>
</template>

<script setup lang="ts">
import { ReleasesContentList } from "#components";
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

const headerElement = ref<HTMLElement | null>(null);
const { height } = useElementSize(headerElement, undefined, {
	box: "border-box",
});

const textContentListElement = ref<InstanceType<
	typeof ReleasesContentList
> | null>(null);

const currentActiveItemIndex = computed(
	() => textContentListElement.value?.currentActiveItemIndex ?? -1,
);

const matchIsItemWithDefinedName = <T extends { name: string | null }>(
	item: T,
): item is T & { name: string } => !!item && !!item.name;

const itemsLinks = computed(() =>
	(releasesData.value ?? [])
		.filter(matchIsItemWithDefinedName)
		.map((item, index) => ({
			id: item.id,
			label: item.name,
			baseIndex: index,
			click: () => {
				if (!textContentListElement.value) return;
				textContentListElement.value.scrollToIndex(index);
			},
			// active:
			// 	index === textContentListElement.value?.currentActiveItemIndex,
		}))
		.filter(
			(item, index, array) =>
				array.findIndex(({ label }) => label === item.label) === index,
		),
);
</script>
