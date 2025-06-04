<script lang="ts">
	interface Props {
		character?: string
		activeTile?: boolean
		tileStatus?: number
	}

	let { character = '', activeTile = false, tileStatus = 0 }: Props = $props()
</script>

<div class:border-gray-400={activeTile} class:bg-lime-900={tileStatus == 3} class:bg-yellow-400={tileStatus == 2} class:bg-gray-700={tileStatus == 1} class:bg-transparent={tileStatus == 0} class=" m-1 h-14 w-14 border-2 border-gray-600 py-1 text-white capitalize">
	<div class="h-full w-full justify-center bg-transparent text-center">{character}</div>
</div>
