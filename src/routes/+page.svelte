<script lang="ts">
	import Project from '../components/Project.svelte'
	import { projects } from './projectHighlights'
	import { themeState } from '../components/stores.svelte'

	let scrollSections: Array<Element> = $state([])

	let currentScroll: number = $state(0)

	function handleScroll(event: WheelEvent) {
		let scrollAmount = event.deltaY
		if (scrollAmount < 0) {
			if (currentScroll == 0) return
			currentScroll -= 1
			goToCurrentScrollSection()
		} else {
			if (currentScroll >= scrollSections.length - 1) return
			currentScroll += 1
			goToCurrentScrollSection()
		}
	}

	function goToCurrentScrollSection() {
		window.scrollTo({
			top: scrollSections[currentScroll].getBoundingClientRect().top - 80,
			behavior: 'smooth'
		})
	}
</script>

<svelte:document on:wheel|nonpassive|preventDefault={handleScroll} />
<div bind:this={scrollSections[0]}>
	<div class="flex min-h-[calc(100dvh-70px)] flex-row items-center justify-center">
		<div class="border-surface-500/20 flex flex-row flex-wrap items-center justify-center px-2 lg:w-2/3">
			<h1 class="h1 text-surface-500 mb-6 text-center text-[clamp(1.8rem,7vw,3.5rem)] lg:mr-10 dark:text-white">Hi, I'm Dean Blickenstaff</h1>
			<img alt="" src="/MeGlitchNoColor.gif" style:-webkit-filter={`contrast(${themeState.isDarkMode ? 1 : 0.4})`} />
		</div>
	</div>
	<div class="flex min-h-[calc(100dvh-70px)] flex-col items-center justify-center">
		<div class="flex flex-row items-center justify-center" bind:this={scrollSections[1]}>
			<h2 class="h2 text-surface-500 mb-6 dark:text-white">Highlighted Projects</h2>
		</div>
		<div class="flex flex-row flex-wrap justify-center">
			{#each projects as project}
				<Project info={project} />
			{/each}
		</div>
	</div>
</div>
