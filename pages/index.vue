<template>
	<UContainer>
		<UPage>
			<UPageHeader
				title="Dependencies"
				description="Check out the dependencies of your project."
			/>
			<UPageBody>
				<UTabs class="space-y-4" :items="items">
					<template #item="{ item }">
						<component :is="item.content" />
					</template>
				</UTabs>
			</UPageBody>
		</UPage>
	</UContainer>
</template>

<script setup lang="ts">
const FormRepository = resolveComponent("FormRepository");
const FormCustomUrls = resolveComponent("FormCustomUrls");

const items = [
	{
		label: "Repository",
		content: FormRepository,
	},
	{
		label: "Custom URLs",
		content: FormCustomUrls,
	},
];
</script>
