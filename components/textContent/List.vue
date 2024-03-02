<template>
	<!-- <UFooterLinks
		class="w-full justify-start overflow-x-auto"
		:links="itemsLinks"
	/> -->
	<section class="overflow-y-auto relative" :style="{ height: listHeight }">
		<div
			class="sticky w-full z-10 pointer-events-none top-0 h-8 bg-gradient-to-b dark:from-gray-900 from-gray-100 to-transparent"
		></div>
		<Virtualizer
			ref="virtualizerElement"
			#default="item"
			class="pt-8 pb-24"
			:data="contentItems"
			@scroll="throttledHandleScroll"
		>
			<MarkdownWrapper :key="item.id" :data="item" />
		</Virtualizer>
		<div
			class="sticky w-full bottom-0 h-24 bg-gradient-to-t dark:from-gray-950 from-gray-50 to-transparent"
		></div>
	</section>
</template>

<script setup lang="ts">
import { Virtualizer } from "virtua/vue";

const props = defineProps<{
	content: Array<
		| {
				id: number | string;
				name: string | null;
				body?: string | null | undefined;
		  }
		| undefined
	>;
	itemsLinks: Array<{
		id: number | string;
		label: string;
		baseIndex: number;
		click: () => void;
		active: boolean;
	}>;
	pageHeaderHeight: number;
}>();

const matchIsDefined = <T,>(item: T | undefined): item is T =>
	item !== undefined;

const contentItems = computed(
	() => props.content?.filter(matchIsDefined) ?? [],
);

// const matchIsItemWithDefinedName = <T extends { name: string | null }>(
// 	item: T,
// ): item is T & { name: string } => !!item.name;

const virtualizerElement = ref<InstanceType<typeof Virtualizer> | null>(null);

const currentActiveItemIndex = ref(-1);

// const itemsLinks = computed(() =>
// 	contentItems.value
// 		.filter(matchIsItemWithDefinedName)
// 		.map((item, index) => ({
// 			id: item.id,
// 			label: item.name,
// 			baseIndex: index,
// 			click: () => {
// 				if (!virtualizerElement.value) return;
// 				virtualizerElement.value.scrollToIndex(index, { smooth: true });
// 			},
// 			active: index === currentActiveItemIndex.value,
// 		}))
// 		.filter(
// 			(item, index, array) =>
// 				array.findIndex(({ label }) => label === item.label) === index,
// 		),
// );

const getActiveItemIndex = (offset: number) => {
	if (!virtualizerElement.value) return -1;
	const { index } = props.itemsLinks.reduce(
		(result, { baseIndex }) => {
			const distance = Math.abs(
				offset - virtualizerElement.value!.getItemOffset(baseIndex),
			);

			if (result.index === -1) return { index: baseIndex, distance };

			return result.distance > distance
				? { index: baseIndex, distance }
				: result;
		},
		{
			index: -1,
			distance: -1,
		},
	);
	return index;
};

const listHeight = computed(
	() =>
		`calc(100vh - var(--header-height) - ${props.pageHeaderHeight}px)` as const,
);

defineExpose({
	scrollToIndex: (index: number) => {
		if (!virtualizerElement.value) return;
		virtualizerElement.value.scrollToIndex(index, {
			smooth: true,
		});
	},
	currentActiveItemIndex,
});

onMounted(() => {
	if (!virtualizerElement.value) return;
	currentActiveItemIndex.value = getActiveItemIndex(
		virtualizerElement.value.scrollOffset,
	);
});

const handleScroll = (offset: number) => {
	if (!virtualizerElement.value) return;
	currentActiveItemIndex.value = getActiveItemIndex(offset);
};

const throttledHandleScroll = useThrottleFn(handleScroll, 750, true);
</script>
