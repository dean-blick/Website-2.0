<script lang="ts">
	import '../app.css';
	let { children } = $props();

	let tabs = [
        { name: 'Projects', link: 'projects'},
        { name: 'Web-Projects', link: 'webProjects'},
        //{ name: 'Transcript', link: 'transcript'} //todo
    ];


</script>

<header class="sticky top-0 z-50 border-b-[1px] border-surface-500/20 bg-surface-50/90 dark:bg-surface-950/90 backdrop-blur w-full h-[70px] flex items-center lg:px-20">
	<a href="/">
        <b class="font-bold poppins">Dean</b> Blickenstaff
    </a>
	<div class="sm:flex ml-auto pr-4 items-center gap-4 hidden">
        {#each tabs as tab, index}
            <a href={tab.link} class="border-transparent translate-y-[1px] opacity-100 btn hover:preset-tonal-primary">
                <p>{tab.name}</p>
            </a>
        {/each}
    </div>
	<a href="https://www.linkedin.com/in/deanblickenstaff/" target="_blank" class="btn preset-filled-primary-100-900">
        LinkedIn
    </a>
	<style>
		header {
			view-transition-name: header;
		}
	</style>
</header>
<main class="bg-surface-950/50">
	{@render children()}
</main>
<footer class="border-t-[1px] border-surface-500/20 bg-surface-50/90 dark:bg-surface-950/90 p-4 flex items-center">
	<div class="container mx-auto flex flex-col xl:flex-row justify-between items-center gap-4">

	</div>
</footer>
