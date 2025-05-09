<script lang="ts">
    import { transcript } from './transcriptInfo';
    import Project from '../../components/Project.svelte';

</script>


<div class="flex flex-col min-h-[calc(100vh-70px)] w-full lg:w-auto items-center pt-2 pb-2">
    {#each transcript as item}
        <Project info={item}/>
    {/each}
</div>