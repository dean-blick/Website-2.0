<script lang="ts">
	import { run } from 'svelte/legacy'

	import TextInput from './TextInput.svelte'
	let listItem = { checked: false, s: '' }
	let listItems: Array<{ checked: boolean; s: string }> = [{ checked: false, s: 'Example Item' }]
	let currentString = ''
	function newToDoItem(newString: string) {
		listItems = [{ checked: false, s: newString }, ...listItems]
	}
	function removeToDoItem(index: number) {
		listItems.splice(index, 1)
		listItems = listItems
	}
	function moveToDoItem(index: number, direction: boolean) {
		if (direction && index != listItems.length - 1) {
			;[listItems[index + 1], listItems[index]] = [listItems[index], listItems[index + 1]]
		} else if (!direction && index != 0) {
			;[listItems[index - 1], listItems[index]] = [listItems[index], listItems[index - 1]]
		}
	}
</script>

<div class="bg-surface-900 card mb-2 flex w-full flex-col p-6 lg:w-1/3">
	<div class="card bg-surface-800 flex h-80 max-h-80 w-full flex-col-reverse content-end overflow-y-auto">
		{#each listItems as item}
			<div class="card bg-surface-900 mx-2 my-2 flex h-8 flex-row items-center justify-start px-4 py-8">
				<input type="checkbox" class="checkbox accent-primary-500 mx-2" />
				<p>{item.s}</p>
				<button class="btn preset-outlined-primary-500 ml-auto" aria-label="icon" onclick={() => moveToDoItem(listItems.indexOf(item), false)}>Down</button>
				<button class="btn preset-outlined-primary-500 ml-1" aria-label="icon" onclick={() => moveToDoItem(listItems.indexOf(item), true)}>Up</button>
				<button class="btn preset-outlined-primary-500 ml-1" aria-label="icon" onclick={() => removeToDoItem(listItems.indexOf(item))}>Delete</button>
			</div>
		{/each}
	</div>
	<div class="m-4">
		<TextInput placeholderText="To-Do Text" outFunction={newToDoItem} />
	</div>
</div>
