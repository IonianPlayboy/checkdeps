<template>
	<WindowVirtualizer #default="item" :data="contentItems">
		<MarkdownWrapper :key="item.id" :data="item" />
	</WindowVirtualizer>
</template>

<script setup lang="ts">
import { WindowVirtualizer } from "virtua/vue";

const props = defineProps<{
	content: Array<
		| {
				id: number | string;
				name: string | null;
				body?: string | null | undefined;
		  }
		| undefined
	>;
}>();

const matchIsDefined = <T,>(item: T | undefined): item is T =>
	item !== undefined;

const contentItems = computed(
	() => props.content?.filter(matchIsDefined) ?? [],
);
</script>
