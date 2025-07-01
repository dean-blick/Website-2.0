<script lang="ts">
	import { Switch } from '@skeletonlabs/skeleton-svelte'
	import { themeState } from './stores.svelte'
	let checked = $state(false)

	$effect(() => {
		const mode = localStorage.getItem('mode') || 'dark'
		checked = mode === 'dark'
		themeState.isDarkMode = checked
	})

	const onCheckedChange = (event: { checked: boolean }) => {
		const mode = event.checked ? 'dark' : 'light'
		themeState.isDarkMode = event.checked
		document.documentElement.setAttribute('data-mode', mode)
		localStorage.setItem('mode', mode)
		checked = event.checked
	}
</script>

<svelte:head>
	<script>
		const mode = localStorage.getItem('mode') || 'dark'
		document.documentElement.setAttribute('data-mode', mode)
	</script>
</svelte:head>

<Switch {checked} {onCheckedChange}></Switch>
