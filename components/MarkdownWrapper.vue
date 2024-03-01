<template>
	<article v-if="error">{{ error }}</article>
	<ContentRendererMarkdown
		v-else-if="parsedData"
		v-bind="$attrs"
		ref="target"
		:value="parsedData"
		tag="article"
	/>
	<article v-else class="invisible" v-bind="$attrs">{{ data?.body }}</article>
</template>

<script setup lang="ts">
import { transformContent } from "@nuxt/content/transformers";

const props = defineProps<{
	data?: {
		id: number | string;
		name: string | null;
		body?: string | null | undefined;
	};
}>();

const currentIdentifier = computed(() => props.data?.name ?? props.data?.id);

const { data: parsedData, error } = useLazyAsyncData(
	`${currentIdentifier.value}.md`,
	async () => {
		return transformContent(
			`content:${currentIdentifier.value}.md`,
			props.data?.body ?? "",
		);
	},
);
</script>
