<script lang="ts">
	import { projects } from './projectInfo'
	import Project from '../../components/Project.svelte'
	import Shell from '../../components/Shell.svelte'
</script>

<Shell>
	{#each projects as project}
		<Project info={project} />
	{/each}
</Shell>
