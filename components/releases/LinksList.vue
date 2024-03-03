<template>
	<section class="overflow-x-auto py-2 flex relative">
		<div
			class="sticky h-full z-10 pointer-events-none left-0 min-w-4 bg-gradient-to-r dark:from-gray-950 from-gray-50 to-transparent"
		></div>
		<Virtualizer
			ref="virtualizerElement"
			#default="{ id, label, click, baseIndex }"
			:data="links"
			horizontal
			class="pl-8 pr-8"
		>
			<ReleasesLinkToEntry
				:key="id"
				v-bind="{
					click,
					baseIndex,
					activeIndex,
					clickedIndex,
				}"
				@link-clicked="handleClick"
			>
				{{ label }}
			</ReleasesLinkToEntry>
		</Virtualizer>
		<div
			class="sticky pointer-events-none right-0 h-full min-w-8 bg-gradient-to-l dark:from-gray-950 from-gray-50 to-transparent"
		></div>
	</section>
</template>

<script setup lang="ts">
import { Virtualizer } from "virtua/vue";

const props = defineProps<{
	links: Array<{
		id: number;
		label: string;
		baseIndex: number;
		click: () => void;
	}>;
	activeIndex: number;
}>();

const currentLinkIndex = computed(() =>
	props.links.findIndex((link) => link.baseIndex === props.activeIndex),
);

const virtualizerElement = ref<InstanceType<typeof Virtualizer> | null>(null);

const clickedIndex = ref(-1);

const scrollToCurrentLink = (index?: number) => {
	if (!virtualizerElement.value) return;
	virtualizerElement.value.scrollToIndex(index ?? currentLinkIndex.value, {
		smooth: true,
		offset: -48,
	});
};

const handleClick = ({
	click,
	baseIndex,
}: Pick<(typeof props)["links"][number], "click" | "baseIndex">) => {
	const currentClickedIndex = props.links.findIndex(
		(link) => link.baseIndex === baseIndex,
	);
	scrollToCurrentLink(currentClickedIndex);
	clickedIndex.value = currentClickedIndex;
	click();
};

onMounted(scrollToCurrentLink);

watchThrottled(
	() => props.activeIndex,
	() => {
		if (clickedIndex.value === -1) return scrollToCurrentLink();
		if (clickedIndex.value === props.activeIndex)
			return (clickedIndex.value = -1);
		scrollToCurrentLink(clickedIndex.value);
	},
	{ throttle: 750, trailing: true },
);
</script>
