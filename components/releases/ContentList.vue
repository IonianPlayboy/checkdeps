<template>
	<section class="overflow-y-auto relative" :style="{ height: listHeight }">
		<div
			class="sticky w-full z-10 pointer-events-none top-0 h-8 bg-gradient-to-b dark:from-gray-900 from-gray-100 to-transparent"
		></div>
		<Virtualizer
			ref="virtualizerElement"
			#default="item"
			class="pt-8 pb-24"
			:data="content"
			@scroll="throttledHandleScroll"
		>
			<MarkdownWrapper
				:key="item.id"
				:data="item"
				:repository-identifier="repositoryIdentifier"
			/>
		</Virtualizer>
		<div
			class="sticky w-full bottom-0 h-24 pointer-events-none bg-gradient-to-t dark:from-gray-950 from-gray-50 to-transparent"
		></div>
	</section>
</template>

<script setup lang="ts">
import { Virtualizer } from "virtua/vue";

const props = defineProps<{
	content: Array<{
		id: number | string;
		name: string | null;
		body?: string | null | undefined;
	}>;
	itemsLinks: Array<{
		id: number | string;
		label: string;
		baseIndex: number;
		click: () => void;
		// active: boolean;
	}>;
	pageHeaderHeight: number;
	repositoryIdentifier: string;
}>();

const virtualizerElement = ref<InstanceType<typeof Virtualizer> | null>(null);

const currentActiveItemIndex = ref(-1);

const getActiveItemIndex = (offset: number) => {
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
	whenever(
		() =>
			virtualizerElement.value?.scrollOffset !== undefined &&
			props.itemsLinks.length,
		() => {
			currentActiveItemIndex.value = getActiveItemIndex(
				virtualizerElement.value!.scrollOffset,
			);
		},
		{ once: true, immediate: true },
	);
});

const handleScroll = (offset: number) => {
	if (!virtualizerElement.value) return;
	currentActiveItemIndex.value = getActiveItemIndex(offset);
};

const throttledHandleScroll = useThrottleFn(handleScroll, 750, true);
</script>
