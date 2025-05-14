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
    <div class="flex flex-row items-center justify-center min-h-[calc(100dvh-70px)]">
        <div class="flex flex-row flex-wrap border-surface-500/20 lg:w-2/3 px-2 justify-center items-center">
            <h1 class="h1 mb-6 text-center lg:mr-10 text-[clamp(1.8rem,7vw,3.5rem)]">Hi, I'm Dean Blickenstaff</h1>
            <img alt="" src="/MeGlitchNoColor.gif"/>
        </div>
    </div>
    <div class="flex flex-col min-h-[calc(100dvh-70px)] justify-center items-center">
        <div class="flex flex-row justify-center items-center" bind:this={projectsSection}>
            <h2 class="h2 mb-6">Highlighted Projects</h2>
        </div>
        <div class="flex flex-row flex-wrap justify-center">
            {#each projects as project}
                <Project info={project}/>
            {/each}
        </div>
    </div>
</div>
