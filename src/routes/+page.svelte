<script lang="ts">
	import Project from "../components/MainScreenProject.svelte";
    import { projects } from "./projectHighlights";

    let projectsSection: Element

    function handleScroll(event: WheelEvent){
        let scrollAmount = event.deltaY
        if(scrollAmount < 0) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            window.scrollTo({ top: projectsSection.getBoundingClientRect().top - 70, behavior: 'smooth'})
        }
    }
</script>

<svelte:window 
on:wheel|nonpassive|preventDefault = {handleScroll}/>
<div>
    <div class="flex flex-row items-center justify-center lg:py-10 min-h-[calc(100vh-70px)]">
        <div class="flex flex-row flex-wrap border-b-[1px] border-surface-500/20 lg:border-0 lg:items-center lg:justify-between lg:w-2/3 px-2 justify-center items-center">
            <h1 class="h1 mb-6 text-center lg:mb-0">Hi, I'm Dean Blickenstaff</h1>
            <img alt="" src="/MeGlitchNoColor.gif"/>
        </div>
    </div>
    <div class="flex flex-row justify-center items-center" bind:this={projectsSection}>
        <h2 class="h2 mb-6">Highlighted Projects</h2>
    </div>
    <div class="flex flex-row flex-wrap justify-center pb-50">
        {#each projects as project}
            <Project info={project}/>
        {/each}
    </div>
</div>
