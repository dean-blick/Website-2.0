<script lang="ts">
	import '../app.css'
	let { children } = $props()
	import { Popover } from '@skeletonlabs/skeleton-svelte'

	let openState = $state(false)

	function popoverClose() {
		openState = false
	}

	let tabs = [
		{ name: 'Projects', link: '/projects' },
		{ name: 'Transcript', link: '/transcript' },
		{ name: 'Resume', link: '/resume' }
	]
</script>

<svelte:head>
	<link rel="icon" type="image/svg" href="/favicon-96x96.png" />
	<link rel="icon" type="image/svg" href="/favicon.svg" />
	<link rel="icon" type="image/svg" href="/apple-touch-icon.png" />
	<link rel="icon" type="image/svg" href="/favicon.ico" />
</svelte:head>
<header class="header">
	<a href="/" class="mr-4 flex flex-row">
		<b class="bold">Dean</b>
		<div class="hide-mobile">&nbsp;Blickenstaff</div>
	</a>
	<div class="flex items-center justify-center gap-2 lg:ml-auto lg:gap-4">
		{#each tabs as tab, index}
			<a href={tab.link} class="btn preset-outlined-primary-100-900 translate-y-[1px]">
				<p>{tab.name}</p>
			</a>
		{/each}
	</div>
	<style>
		header {
			view-transition-name: header;
		}
	</style>
</header>
<main class="bg-surface-950/50">
	{@render children()}
</main>
<footer class="border-surface-500/20 bg-surface-950/90 flex h-[70px] items-center border-t-[1px] p-4">
	<div class="container mx-auto flex flex-row items-center justify-center gap-4">
		<a href="https://github.com/dean-blick" target="_blank" aria-label="GitHub" class="">
			<img alt="GitHub" src="/mdi--github.png" class="size-8" />
		</a>
		<a href="https://www.linkedin.com/in/deanblickenstaff/" target="_blank" aria-label="link" class="">
			<img alt="LinkedIn" src="/mdi--linkedin.png" class="size-8" />
		</a>
		<Popover open={openState} onOpenChange={e => (openState = e.open)} contentBase="card bg-surface-200-800 p-4 space-y-4 max-w-[320px]" triggerBase="flex justify-center items-center" arrow arrowBackground="!bg-surface-200 dark:!bg-surface-800">
			{#snippet trigger()}<img alt="email" src="/ic--baseline-email.png" class="size-8" />{/snippet}
			{#snippet content()}
				<div class="flex w-full flex-row items-center justify-end">
					<p class="mr-5 opacity-60">cdblickenstaff@gmail.com</p>
					<button aria-label="close" class="btn-icon hover:preset-tonal self-end" onclick={popoverClose}>
						<img alt="close" src="/material-symbols--close.png" class="size-5" />
					</button>
				</div>
			{/snippet}
		</Popover>
	</div>
</footer>

<style lang="postcss">
	@reference "tailwindcss";
	@reference '../app.css';

	.header {
		@apply border-surface-500/20 bg-surface-950/90 sticky top-0 z-50 flex h-[70px] w-full items-center justify-center border-b-[1px] px-5 backdrop-blur;
		@variant lg {
			@apply px-20;
		}
	}

	.bold {
		@apply font-bold;
	}

	.hide-mobile {
		@apply hidden lg:block;
	}
</style>
