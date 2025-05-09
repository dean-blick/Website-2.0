<script lang="ts">
    import resume from '$lib/PublicDeanBlickenstaffResume.pdf'
    let height = $state(800)
    let width = $state(600)
</script>


<svelte:window bind:innerHeight={height} bind:innerWidth={width}/>
<div class="flex flex-col min-h-[calc(100vh-70px)] w-full lg:w-auto items-center pt-2 pb-2">
    <iframe src={resume} width={width > 1000 ? width/2 : width} height={height-80} title="resume">
</div>