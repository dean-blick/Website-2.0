<script lang="ts">
    import type { PageData } from './$types';
    import { projects } from './projectInfo';
    import Project from '../../components/Project.svelte';

    let { data }: { data: PageData } = $props();

    interface ProjectItem {
        Title: string,
        Description: string,
        Badges: Array<string>,
        Link: string,
        GitHub: string
    }
</script>


<div class="flex flex-col items-center lg:items-stretch lg:py-10">
    {#each projects as project}
        <Project info={project}/>
    {/each}
</div>