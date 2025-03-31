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


<div class="flex flex-col min-h-screen w-full lg:w-screen items-center pt-[78px]">
    {#each transcript as item}
        <Project info={item}/>
    {/each}
</div>