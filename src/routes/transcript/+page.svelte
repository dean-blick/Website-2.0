<script lang="ts">
    import type { PageData } from './$types';
    import { transcript } from './transcriptInfo';
    import TranscriptItem from '../../components/TranscriptItem.svelte';

    let { data }: { data: PageData } = $props();

    interface TranscriptInfo {
        Title: string,
        Description: string,
        Badges: Array<string>
    }
</script>


<div class="flex flex-col min-h-screen w-full lg:w-screen items-center pt-[78px]">
    {#each transcript as item}
        <TranscriptItem info={item}/>
    {/each}
</div>