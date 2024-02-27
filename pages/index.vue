<template>
	<UContainer>
		<UPage>
			<UPageHeader
				title="Dependencies"
				description="Check out the dependencies of your project."
			/>
			<UPageBody>
				<UForm
					ref="form"
					:state="state"
					:schema="schema"
					class="space-y-4"
					@submit="handleSubmit"
				>
					<UFormGroup name="packageJsonUrl" size="xl">
						<template #label> Link to your package.json </template>
						<template #description>
							We will fetch the dependencies from your
							package.json file.
						</template>
						<UInput
							v-model="state.packageJsonUrl"
							placeholder="https://link-to-your-package.json"
							icon="i-heroicons-link"
							@input="handleInput('packageJsonUrl')"
						/>
					</UFormGroup>
					<UFormGroup name="lockfileUrl" size="xl">
						<template #label> Link to your lockfile </template>
						<template #description>
							We will parse your lockfile to get the exact
							versions of your dependencies currently installed.
						</template>
						<UInput
							v-model="state.lockfileUrl"
							placeholder="https://link-to-your-lockfile"
							icon="i-heroicons-link"
							@input="handleInput('lockfileUrl')"
						/>
					</UFormGroup>
					<UButton type="submit"> Submit </UButton>
				</UForm>
				<UCard
					v-if="isLoadingPackageJson"
					class="flex items-center justify-center"
				>
					Loading...
				</UCard>
				<UCard
					v-if="isErrorPackageJson"
					class="flex items-center justify-center"
				>
					{{ packageJsonError }}
				</UCard>
			</UPageBody>
		</UPage>
	</UContainer>
</template>

<script setup lang="ts">
import type { FormSubmitEvent, Form } from "#ui/types";
import type { PackageJson } from "type-fest";
import { z } from "zod";

const schema = z.object({
	packageJsonUrl: z.string().url(),
	lockfileUrl: z.string().url().optional(),
});

type Schema = z.output<typeof schema>;

const state = reactive<Partial<Schema>>({
	packageJsonUrl: undefined,
	lockfileUrl: undefined,
});

const form = ref<Form<Schema> | undefined>();

const hasBeenSubmitted = ref(false);

const handleSubmit = async (event: FormSubmitEvent<Schema>) => {
	hasBeenSubmitted.value = true;
};

const handleInput = (inputOrigin: keyof Schema) => {
	if (!form.value) return;
	form.value.clear(inputOrigin);
};

const {
	data: packageJsonData,
	isLoading: isLoadingPackageJson,
	isError: isErrorPackageJson,
	error: packageJsonError,
} = useRemoteFileContent<PackageJson>({
	name: "packageJson",
	type: "json",
	url: () => state.packageJsonUrl,
	enabled: hasBeenSubmitted,
});

const { setCurrentProjectId, addProject } = useDependenciesStore();

whenever(
	() => !isLoadingPackageJson.value,
	() => {
		if (!state.packageJsonUrl) return;

		const currentName = packageJsonData.value?.name ?? "unknown";

		addProject({
			name: currentName,
			packageJsonUrl: state.packageJsonUrl,
			lockfileUrl: state.lockfileUrl,
		});
		setCurrentProjectId(currentName);
		return navigateTo(`/projects/${currentName}`);
	},
);
</script>
