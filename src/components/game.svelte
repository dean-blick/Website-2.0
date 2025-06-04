<script lang="ts">
	import Line from '../components/gameLine.svelte'
	import wordsJSON from '$lib/words.json'

	const words = wordsJSON.words
	export let word = words[Math.round(Math.random() * words.length)]
	export let isCustom = false
	let wordLength = word.length
	function emptyArray(value: string | number): Array<string | number> {
		var r = []
		for (var i = 0; i < wordLength; i++) {
			r.push(value)
		}
		return r
	}
	let previous: Array<Array<string | number>>
	$: previous = []
	let lineStatus: Array<Array<string | number>>
	$: lineStatus = []
	let input: Array<string | number>
	$: input = emptyArray('')
	$: guessNumber = 0
	$: answerArray = emptyArray('')
	const guessMax = [0, 1, 2, 3, 4, 5]
	$: keyPosition = 0
	let fail = false
	let win = false
	function reset() {
		previous = []
		lineStatus = []
		input = emptyArray('')
		guessNumber = 0
		answerArray = emptyArray('')
		keyPosition = 0
		fail = false
		win = false
		word = words[Math.round(Math.random() * words.length)]
		wordLength = word.length
		console.log(wordLength)
		if (isCustom) {
			window.location.href = '/projects/wordGame'
		}
	}
	function keyPress(event: KeyboardEvent) {
		if (win) return
		if (event.key.length == 1 && keyPosition != wordLength) {
			input[keyPosition] = event.key.toLowerCase()
			keyPosition++
		}
		if (event.key == 'Backspace' && keyPosition != 0) {
			input[keyPosition - 1] = ''
			keyPosition--
		}
		if (event.key == 'Enter' && keyPosition == wordLength) {
			let inputString = input.join('')
			//Add code to flip letters and check letter positions
			answerArray = word.split('')
			var newLineStatus = emptyArray(0)
			//Exact Check
			if (inputString == word) {
				win = true
				newLineStatus = emptyArray(3)
			} else {
				//Direct Check
				for (var i = 0; i < wordLength; i++) {
					if (input[i] == answerArray[i]) {
						newLineStatus[i] = 3
						answerArray[i] = '\u0000'
					}
				}
				//Similar Check
				for (i = 0; i < wordLength; i++) {
					if (newLineStatus[i] != 0) continue
					if (answerArray.indexOf(input[i]) != -1) {
						newLineStatus[i] = 2
						answerArray[answerArray.indexOf(input[i])] = '\u0000'
					} else {
						newLineStatus[i] = 1
					}
				}
			}
			lineStatus.push(newLineStatus)
			previous.push(input)
			guessNumber++
			keyPosition = 0
			input = emptyArray('')

			if (guessNumber == 6 && !win) {
				fail = true
			}
		}
	}
</script>

<svelte:window on:keydown={keyPress} />
<div class="relative flex min-h-[calc(100vh-70px)] flex-1 justify-center">
	<div class="flex w-full flex-col justify-between lg:w-1/2">
		<div class="mt-10 flex w-full flex-col items-center">
			<div class="">
				{#each guessMax as d, i}
					{#if i == guessNumber}
						<Line rowData={input} {keyPosition}></Line>
					{:else if i < guessNumber}
						<Line rowData={previous[i]} lineStatus={lineStatus[i]}></Line>
					{:else}
						<Line rowData={emptyArray('')} lineStatus={emptyArray(0)}></Line>
					{/if}
				{/each}
			</div>
		</div>
		<div class="mb-10 flex flex-row justify-center">
			<a href="/projects/wordGame/create" class="bg-red mb-3 w-max rounded-lg border-1 border-gray-700 px-2 py-1 text-white transition-all duration-1 hover:bg-yellow-400 focus:bg-lime-900"> Make a custom game link </a>
		</div>
	</div>
	{#if fail || win}
		<div class="absolute bottom-20 flex h-full w-full items-center justify-center">
			<div class="flex flex-row justify-center">
				<div class="text-true-gray-500 flex h-24 w-72 flex-col rounded-lg border-1 border-gray-700 bg-gray-800 p-5">
					{#if fail}
						<div class="h-full">fail: the word is {word}</div>
					{:else if win}
						<div class="h-full">Correct!</div>
					{/if}
					<button class=" mt-3 w-max self-center rounded-lg border-1 border-gray-700 bg-gray-700 px-2 py-1 text-white transition-all duration-0 hover:bg-yellow-400 focus:bg-lime-900" on:click={reset}>New Game</button>
				</div>
			</div>
		</div>
	{/if}
</div>
