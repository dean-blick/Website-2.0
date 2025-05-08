<script lang="ts">
    import type { PageData } from './$types';
    import { transcript } from './transcriptInfo';
    import Project from '../../components/Project.svelte';

    let { data }: { data: PageData } = $props();

    interface ProjectInfo {
        Title: string,
        Description: string,
        Badges: Array<string>,
        Link: string,
        GitHub: string
    }
</script>


<div class="flex flex-col min-h-screen w-full lg:w-auto items-center pt-2 pb-2">
    {#each transcript as item}
        <Project info={item}/>
    {/each}
</div>