<template>
	<UContainer>
		<UPage>
			<UPageHeader
				ref="headerElement"
				:ui="{
					wrapper: '[&>div>div.flex-1]:w-full',
					container: 'gap-8 items-stretch lg:items-stretch',

					title: 'flex gap-6 shrink-0',
					links: 'grid grow items-stretch',
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
				<template #default>
					<UFormGroup
						class="flex justify-end items-center gap-4 [&>div:last-of-type]:flex [&>div:last-of-type]:items-center"
						size="lg"
						name="respectSemver"
					>
						<template #label>
							Respect semver defined in package.json?
						</template>
						<UToggle
							v-model="respectSemver"
							size="sm"
							on-icon="i-heroicons-check-20-solid"
							off-icon="i-heroicons-x-mark-20-solid"
						/>
					</UFormGroup>
				</template>
			</UPageHeader>

			<UPageBody class="space-y-8 py-0 mt-0" prose>
				<div v-if="isLoadingReleases">
					<USkeleton />
				</div>
				<div v-else-if="releasesError">{{ releasesError }}</div>
				<ReleasesContentList
					v-if="!!currentReleases"
					ref="textContentListElement"
					:content="currentReleases"
					:items-links="itemsLinks"
					:page-header-height="height"
					:repository-identifier="repositoryIdentifier"
				/>
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
import { ReleasesContentList } from "#components";
import { useRouteParams } from "@vueuse/router";
import { satisfies, valid, gte } from "semver";

const packageName = useRouteParams("name", "", { transform: String });

const respectSemver = defineModel<boolean>("respectSemver", {
	default: true,
});

const { data: metadata, isLoading: isLoadingMetadata } = useDependencyMetadata({
	dependencyName: packageName,
});
const { data: repository, isLoading: isLoadingRepository } =
	useDependencyGithubRepository({
		dependencyName: packageName,
	});

const repositoryIdentifier = computed(
	() =>
		`${repository.value?.owner?.login ?? repository.value?.organization?.login}/${repository.value?.name}` ??
		"",
);

const latestVersion = computed(
	() => metadata.value?.["dist-tags"].latest ?? "",
);

const versionsPerDependency = useCurrentVersionsPerDependency();

const currentVersion = computed(
	() => versionsPerDependency.value[packageName.value],
);

const {
	data: releasesData,
	isLoading: isLoadingReleases,
	error: releasesError,
} = useDependencyReleases({
	dependencyName: packageName,
	latestVersion,
	select: (data) => {
		const dataFilteredWithSemver = data.filter(({ tag_name }) => {
			return (
				!currentVersion.value?.lockfileVersion ||
				(valid(tag_name) !== null &&
					gte(tag_name, currentVersion.value.lockfileVersion))
			);
		});

		const firstReleaseToShowWithoutSemver = data.find(
			({ tag_name }) =>
				!latestVersion.value || tag_name === latestVersion.value,
		);

		return dataFilteredWithSemver.length
			? dataFilteredWithSemver
			: firstReleaseToShowWithoutSemver
				? [firstReleaseToShowWithoutSemver]
				: [];
	},
});

const releasesMatchingSemver = computed(
	() =>
		(releasesData.value ?? [])?.filter(
			({ tag_name }, index) =>
				!currentVersion.value?.semver ||
				(currentVersion.value.semver === "latest" && !index) ||
				satisfies(tag_name, currentVersion.value.semver),
		) ?? [],
);

const currentReleases = computed(() =>
	respectSemver.value
		? releasesMatchingSemver.value
		: releasesData.value ?? [],
);

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

const itemsLinks = computed(() =>
	(currentReleases.value ?? [])
		.map((item, index) => ({
			id: item.id,
			label: item.tag_name,
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

const { name } = useCurrentProjectConfig();

const projects = useCurrentProjects();

const linksToProjects = computed(() => [
	{
		label: "Your projects",
		children: projects.value.map((project) => ({
			label: project.name,
			to: `/project/${project.name}`,
			active: name.value === project.name,
		})),
	},
]);
</script>
