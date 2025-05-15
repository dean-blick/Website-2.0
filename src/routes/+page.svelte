<script lang="ts">
	import Project from "../components/MainScreenProject.svelte";
    import { projects } from "./projectHighlights";

    let projectsSection: Element

    let scrollSections: Array<Element> = []

    let currentScroll: number = $state(0);

    function handleScroll(event: WheelEvent){
        let scrollAmount = event.deltaY
        if(scrollAmount < 0) {
            if (currentScroll == 0) return;
            currentScroll -= 1;
            window.scrollTo({ top: scrollSections[currentScroll - 1].getBoundingClientRect().top - 80, behavior: 'smooth' });
        } else {
            //if (currentScroll == scrollSections.length - 1) return;
            currentScroll += 1;
            window.scrollTo({ top: scrollSections[currentScroll + 1].getBoundingClientRect().top - 80, behavior: 'smooth'})
        }
    }
</script>

<svelte:window 
on:wheel|nonpassive|preventDefault = {handleScroll}/>
<div bind:this={scrollSections[0]}>
    <div class="flex flex-row items-center justify-center min-h-[calc(100dvh-70px)]">
        <div class="flex flex-row flex-wrap border-surface-500/20 lg:w-2/3 px-2 justify-center items-center">
            <h1 class="h1 mb-6 text-center lg:mr-10 text-[clamp(1.8rem,7vw,3.5rem)]">Hi, I'm Dean Blickenstaff</h1>
            <img alt="" src="/MeGlitchNoColor.gif"/>
        </div>
    </div>
    <div class="flex flex-col min-h-[calc(100dvh-70px)] justify-center items-center">
        <div class="flex flex-row justify-center items-center" bind:this={scrollSections[1]}>
            <h2 class="h2 mb-6">Highlighted Projects</h2>
        </div>
        <div class="flex flex-row flex-wrap justify-center">
            {#each projects as project}
                <Project info={project}/>
            {/each}
        </div>
    </div>
</div>
