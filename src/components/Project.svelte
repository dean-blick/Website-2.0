<script lang="ts">
	let { info } = $props<{ info: ProjectInfo }>()
	interface ProjectInfo {
		Title: string
		Description: string
		Badges: Array<string>
		Link: string
		GitHub: string
	}
</script>

<div class="project-container">
	<div class="project-content">
		<h1 class="project-title mb-{info.Description != '' ? '2' : '0'}">
			{info.Title}
		</h1>
		<div class="project-description">
			{info.Description}
		</div>
		<div class="project-badges">
			{#each info.Badges as badge}
				<div class="project-badge">
					{badge}
				</div>
			{/each}
		</div>
	</div>
	<div class="project-links">
		{#if info.GitHub != ''}
			<a href={info.GitHub} aria-label="link" class="mb-auto">
				<img alt="GitHub" src="/mdi--github.png" class="h-[20px] w-[20px]" />
			</a>
		{/if}

		{#if info.Link != ''}
			<a href={info.Link} class="project-go">
				Go
				<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20"><path fill="#ffffff" d="M2 11V9h12l-4-4l1-2l7 7l-7 7l-1-2l4-4z" /></svg>
			</a>
		{/if}
	</div>
</div>

<style lang="postcss">
	@reference "tailwindcss";
	@reference '../app.css';

	.project-container {
		@apply card preset-filled-surface-100-900 my-2 flex w-[calc(100%-40px)] flex-row p-3 md:w-[45rem];
	}

	.project-content {
		@apply flex flex-col flex-wrap justify-center lg:justify-between;
	}

	.project-links {
		@apply ml-auto flex w-[20px] min-w-[20px] flex-col items-end justify-end;
	}

	.project-go {
		@apply badge preset-outlined-primary-50-950 flex flex-row items-center justify-center text-center;
	}

	.project-badges {
		@apply mt-1 flex flex-row flex-wrap justify-start;
	}

	.project-badge {
		@apply badge preset-filled-primary-100-900 mt-2 mr-2;
	}

	.project-title {
		@apply flex flex-row justify-start font-bold;
	}

	.project-description {
		@apply flex w-full flex-row justify-start text-sm text-wrap opacity-75;
	}
</style>
