<template>
	<UHeader>
		<template #logo>
			Nuxt UI Pro
			<UBadge label="Landing" variant="subtle" class="mb-0.5" />
		</template>

		<template #right>
			<UColorModeToggle />
			<UButton
				label="Sign in"
				color="white"
				variant="ghost"
				trailing-icon="i-heroicons-arrow-right-20-solid"
				class="hidden lg:flex"
			/>
		</template>

		<template #panel>
			<UDivider class="my-6" />

			<UButton label="Sign in" color="white" block class="mb-3" />
			<UButton label="Get started" block />
		</template>
	</UHeader>
</template>

<script setup lang="ts"></script>
