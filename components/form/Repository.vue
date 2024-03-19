<template>
	<UForm
		ref="form"
		:state="state"
		:schema="schema"
		class="space-y-4"
		@submit="handleSubmit"
	>
		<UFormGroup name="owner" size="lg">
			<template #label> Repository owner </template>
			<UInput
				v-model="state.owner"
				placeholder="octocat"
				icon="i-heroicons-user"
				@input="handleInput('owner')"
			/>
		</UFormGroup>
		<UFormGroup name="repo" size="lg">
			<template #label> Repository name </template>
			<UInput
				v-model="state.repo"
				placeholder="Hello-World"
				icon="i-heroicons-folder-open"
				@input="handleInput('repo')"
			/>
		</UFormGroup>
		<UFormGroup hint="Optional" name="lockfile" size="lg">
			<template #label> Package manager name </template>
			<template #description>
				If provided, we will parse your lockfile to get the exact
				versions of your dependencies currently installed.
			</template>
			<USelect
				v-model="state.lockfile"
				:options="[
					{ label: 'pnpm', value: 'pnpm-lock.yaml' },
					{ label: 'yarn', value: 'yarn.lock' },
					{ label: 'npm', value: 'package-lock.json' },
				]"
				placeholder="Select a package manager"
				option-attribute="label"
				icon="i-heroicons-document-text"
				@input="handleInput('lockfile')"
			/>
		</UFormGroup>
		<UButton type="submit"> Submit </UButton>
	</UForm>
	<UCard v-if="isLoadingRepository" class="flex items-center justify-center">
		Loading...
	</UCard>
	<UCard v-if="isErrorRepository" class="flex items-center justify-center">
		{{ repositoryError }}
	</UCard>
</template>
<script setup lang="ts">
import type { FormSubmitEvent, Form } from "#ui/types";
import { z } from "zod";

const schema = z.object({
	owner: z.string().min(1),
	repo: z.string().min(1),
	lockfile: z.string().min(1).optional(),
});

type Schema = z.output<typeof schema>;

const state = reactive<Partial<Schema>>({
	owner: undefined,
	repo: undefined,
	lockfile: undefined,
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
	data: repositoryData,
	isLoading: isLoadingRepository,
	isError: isErrorRepository,
	error: repositoryError,
} = useGithubRepository({
	owner: () => state.owner,
	repo: () => state.repo,
	enabled: hasBeenSubmitted,
});

const { setCurrentProjectId, addProject } = useDependenciesStore();

whenever(
	() => !!repositoryData.value && !!hasBeenSubmitted.value,
	() => {
		if (!state.owner || !state.repo) return;

		const currentName = repositoryData.value?.name ?? "unknown";

		addProject({
			name: currentName,
			packageJsonUrl: `https://raw.githubusercontent.com/${state.owner}/${state.repo}/${repositoryData.value?.default_branch}/package.json`,
			lockfileUrl: state.lockfile
				? `https://raw.githubusercontent.com/${state.owner}/${state.repo}/${repositoryData.value?.default_branch}/${state.lockfile}`
				: undefined,
			owner: state.owner,
			repo: state.repo,
		});
		setCurrentProjectId(currentName);
		return navigateTo({
			name: "project",
			params: { id: currentName },
		});
	},
);
</script>
