<script lang="ts">
	import TicTacToeButton from "./TicTacToeButton.svelte";

    interface GameState {
        game: string;
        state: Object;
    }

    interface TicTacToeGameState {
        markers: Array<string>;
        currentTurn: string;
        board: Array<string>;
        winner: string;
    }

    let { gameState = $bindable(), playerID, exportFunction } = $props<{gameState: GameState, playerID: string, exportFunction: Function}>()

    let tictactoe: TicTacToeGameState = $derived(gameState.state)

    let turn: boolean = $state(false);

    let gameOver: boolean = $state(false);

    let board: Array<string> = $derived(tictactoe.board)

    let marker: string = $derived(tictactoe.markers[playerID]);

    let winner: string = $derived(tictactoe.winner)

    $effect(() => {
        turn = (tictactoe.currentTurn == playerID)
        if(turn) {
            //quickly display some kind of turn notification
        }
    })

    $effect(() => {
        if(winner != "") {
            gameOver = true
        }
    })


    function processInput(identifier: number) {
        board[identifier] = marker;
        turn = false;
        tictactoe.currentTurn = "";
        exportFunction("TicTacToe", board)
    }
    
</script>

<div class="flex flex-col h-full items-center justify-center">
    <div class="flex flex-col w-[calc(var(--height))] items-center justify-center">
        <div class="grid grid-rows-3 grid-cols-3 w-9/12 lg:w-1/3 mt-10">
            {#each Array.from({length: 9}) as _, i}
            <TicTacToeButton value={board[i]} exportFunction={processInput} identifier={i} enabled={turn && !gameOver && board[i] == " "}/>
            {/each}
        </div>
        {#if turn && !gameOver}
            <div class="text-3xl mt-4 absolute top-[calc(100%-25vh)]">It is your turn</div>
        {/if}
        {#if gameOver}
            <div class="text-3xl mt-4 absolute top-[calc(100%-25vh)]">{winner} wins!</div>
        {/if}
        
    </div>
</div>