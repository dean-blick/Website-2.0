<script lang="ts">
	import { transcript } from './transcriptInfo'
	import Project from '../../components/Project.svelte'
	import Shell from '../../components/Shell.svelte'
</script>

<Shell>
	{#each transcript as item}
		<Project info={item} />
	{/each}
</Shell>
