<template>
	<UButton
		:color="isActive ? 'primary' : 'gray'"
		:variant="
			isActive
				? 'outline'
				: baseIndex > currentActiveIndex
					? 'ghost'
					: 'soft'
		"
		@click="handleClick()"
	>
		<slot />
	</UButton>
</template>

<script setup lang="ts">
const props = defineProps<{
	click: () => void;
	baseIndex: number;
	activeIndex: number;
	clickedIndex: number;
}>();

const currentActiveIndex = computed(() =>
	props.clickedIndex === -1 ? props.activeIndex : props.clickedIndex,
);

const isActive = computed(() => props.baseIndex === currentActiveIndex.value);

const emit = defineEmits<{
	linkClicked: [params: { click: () => void; baseIndex: number }];
}>();

const handleClick = () => {
	emit("linkClicked", { click: props.click, baseIndex: props.baseIndex });
};
</script>
