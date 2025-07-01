<script lang="ts">
	import GitHub from './GitHub.svelte'
	import ArrowRight from '@lucide/svelte/icons/move-right'
	import { themeState } from './stores.svelte'
	let { info } = $props<{ info: ProjectInfo }>()
	interface ProjectInfo {
		Title: string
		Description: string
		Badges: Array<string>
		Link: string
		GitHub: string
	}
</script>

<div class="card border-surface-200 bg-surface-50 dark:border-surface-800 dark:bg-surface-900 m-2 flex w-[calc(100%-40px)] flex-row border-[1px] p-3 md:w-[45rem]">
	<div class="flex flex-col flex-wrap justify-center lg:justify-between">
		<h1 class={'text-surface-500 flex flex-row  justify-start font-bold dark:text-white ' + (info.Description != '' ? 'mb-2' : 'mb-0')}>
			{info.Title}
		</h1>
		<div class="text-surface-500 flex w-full flex-row justify-start text-sm text-wrap opacity-75 dark:text-white">
			{info.Description}
		</div>
		<div class="mt-1 flex flex-row flex-wrap justify-start">
			{#each info.Badges as badge}
				<div class="badge preset-filled-primary-100-900 mt-2 mr-2">
					{badge}
				</div>
			{/each}
		</div>
	</div>
	<div class="ml-auto flex w-[20px] min-w-[20px] flex-col items-end justify-end">
		{#if info.GitHub != ''}
			<a href={info.GitHub} aria-label="link" class="mb-auto h-[20px] w-[20px]">
				<GitHub />
			</a>
		{/if}

		{#if info.Link != ''}
			<a href={info.Link} class="badge preset-outlined-primary-300-700 text-surface-500 flex flex-row items-center justify-center text-center dark:text-white">
				Go
				<ArrowRight size={15} color={themeState.isDarkMode ? 'white' : 'grey'} />
			</a>
		{/if}
	</div>
</div>
