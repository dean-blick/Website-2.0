<script>
	let { value, min, max, updateFunc, disableCondition, label } = $props()

	$effect(() => {
		updateFunc(value)
	})
</script>

<div class="flex flex-row items-center justify-between">
	<div class="mx-2 my-2 text-white">
		{label}
	</div>
	<input class="mx-2 my-2 h-8 rounded-md border border-slate-100 bg-transparent pl-1 text-white disabled:opacity-50" disabled={disableCondition} type="number" bind:value {min} {max} />
	<input class="border-red mx-2 my-2 h-2 appearance-none rounded-lg border bg-transparent accent-blue-400 disabled:opacity-50" disabled={disableCondition} type="range" bind:value {min} {max} />
</div>
