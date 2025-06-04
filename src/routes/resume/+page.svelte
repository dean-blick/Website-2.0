<script lang="ts">
	import resume from '$lib/PublicDeanBlickenstaffResume.pdf'
	import Shell from '../../components/Shell.svelte'
	let height = $state(800)
	let width = $state(600)
</script>

<svelte:window bind:innerHeight={height} bind:innerWidth={width} />
<Shell>
	<iframe src={resume} width={width > 1000 ? width / 2 : width} height={height - 80} title="resume"> </iframe></Shell
>
