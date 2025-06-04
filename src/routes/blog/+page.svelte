<script lang="ts">
	import type { PageData } from './$types'

	let { data }: { data: PageData } = $props()

	let posts: Array<{ title: string; component: string }> = [
		{
			title: 'The Problem With Software Development and College',
			component: 'CSAndCollege.svelte'
		}
	]
</script>
