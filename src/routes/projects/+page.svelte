<script lang="ts">
    import { projects } from './projectInfo';
    import Project from '../../components/Project.svelte';
</script>


<div class="flex flex-col min-h-[calc(100dvh-70px)] w-full lg:w-auto items-center pt-2 pb-2">
    {#each projects as project}
        <Project info={project}/>
    {/each}
</div>