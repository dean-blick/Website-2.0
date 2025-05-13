<script lang="ts">
	import '../app.css';
	let { children } = $props();
    import { Popover } from '@skeletonlabs/skeleton-svelte';

    let openState = $state(false);

    function popoverClose() {
        openState = false;
    }

	let tabs = [
        { name: 'Projects', link: '/projects'},
        { name: 'Transcript', link: '/transcript'},
        { name: 'Resume', link: '/resume'}
    ];


</script>

<svelte:head>
    <link rel="icon" type="image/svg" href="/favicon-96x96.png" />
</svelte:head>
<header class="sticky top-0 z-50 border-b-[1px] border-surface-500/20 bg-surface-950/90 backdrop-blur w-full h-[70px] flex justify-center items-center px-5 lg:px-20">
	<a href="/" class="flex flex-row mr-4">
        <b class="font-bold poppins">Dean</b> <div class="hidden lg:block">&nbsp;Blickenstaff</div>
    </a>
	<div class="flex lg:ml-auto items-center justify-center gap-4">
        {#each tabs as tab, index}
            <a href={tab.link} class="translate-y-[1px] btn preset-outlined-primary-100-900">
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
<footer class="border-t-[1px] border-surface-500/20 bg-surface-950/90 p-4 flex items-center h-[70px]">
	<div class="container mx-auto flex flex-row justify-center items-center gap-4">
        <a href="https://github.com/dean-blick" target="_blank" aria-label="GitHub" class="">
            <img alt="GitHub" src="/mdi--github.png" class="size-8"/>
        </a>
        <a href="https://www.linkedin.com/in/deanblickenstaff/" target="_blank" aria-label="link" class="">
            <img alt="LinkedIn" src="/mdi--linkedin.png" class="size-8"/>
        </a>
        <Popover
        open={openState}
        onOpenChange={(e) => (openState = e.open)}
        contentBase="card bg-surface-200-800 p-4 space-y-4 max-w-[320px]"
        triggerBase="flex justify-center items-center"
        arrow
        arrowBackground="!bg-surface-200 dark:!bg-surface-800"
        >
        {#snippet trigger()}<img alt="email" src="/ic--baseline-email.png" class="size-8"/>{/snippet}
        {#snippet content()}
            <div class="flex flex-row w-full justify-end items-center">
                <p class="opacity-60 mr-5">
                    cdblickenstaff@gmail.com
                </p>
                <button aria-label="close" class="btn-icon self-end hover:preset-tonal" onclick={popoverClose}>
                    <img alt="close" src="/material-symbols--close.png" class="size-5"/>
                </button>
            </div>
        {/snippet}
        </Popover>
	</div>
</footer>
