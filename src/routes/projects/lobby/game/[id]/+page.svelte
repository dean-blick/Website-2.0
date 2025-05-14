<script lang="ts">
    import { onMount } from "svelte";
    import type { PageData } from "./$types";
	import TicTacToe from "../../clientLogic/TicTacToe.svelte"
    let { data }: { data: PageData} = $props();

    let isHost = $state(false);
    let playerID = $state('');
    let error = $state(false);

    interface LobbyStateObject {
        playerCount: Number;
        maxPlayers: Number;
        players: Array<string>;
        host: string;
        gameState: GameState;
    }

    interface GameState {
        game: string;
        state: Object;
    }
    

    let activeLobbyState: LobbyStateObject = $state({
        playerCount: 0,
        maxPlayers: 99,
        players: [],
        host: "",
        gameState: {game: "", state: {}}
    })

    interface SimplePlayerObject {
        playerName: string;
        playerID: string;
    }

    function playersToPlayerNames(players: Array<SimplePlayerObject>): Array<string> {
        let arr: Array<string> = [];
        players.forEach((element) => {
            arr.push(element.playerName)
        })
        return arr;
    }

    async function sendGameRequest(game: string) {
        const response = await fetch(`../streamAPI/${location.href.split('/')[6]}`, {
			method: 'POST',
			body: JSON.stringify({ isStartRequest: true, game: game, turnInfo: {} }),
			headers: {
				'Content-Type': 'application/json'
			}
		});
    }

    async function sendGameTurn(game: string, turnInfo: Array<string>) {
        //console.log("game: " + game)
        const response = await fetch(`../streamAPI/${location.href.split('/')[6]}`, {
			method: 'POST',
			body: JSON.stringify({ isStartRequest: false, game: game, turnInfo: turnInfo }),
			headers: {
				'Content-Type': 'application/json'
			}
		});
    }

    async function getLobbyData() {
        let response = await fetch(`../streamAPI/${location.href.split('/')[6]}`)
        activeLobbyState = await response.json()
        //console.log(activeLobbyState)
        setTimeout(getLobbyData, 1000)
    }

    onMount(async () => {
        let lobbyInfo = data.testData[0];
        if(lobbyInfo == undefined){
            console.log("lobby does not exist")
            return;
        }
        playerID = data.playerID;
        if (String(playerID) == String(lobbyInfo.host)) isHost = true;
        activeLobbyState.gameState.game = "InLobby";
        activeLobbyState.gameState.state = {};
        activeLobbyState.host = lobbyInfo.host;
        activeLobbyState.maxPlayers = lobbyInfo.maxPlayers;
        activeLobbyState.playerCount = lobbyInfo.playerCount;

        activeLobbyState.players = playersToPlayerNames(lobbyInfo.players);

        getLobbyData()
    })
    
</script>

<div class="flex flex-row">
    <div class="flex lg:flex-col lg:w-1/10 lg:min-h-[calc(100dvh-70px)] lg:ml-10 justify-center">
        <div class="flex flex-col lg:h-1/2 card bg-surface-900 items-center">
            <h class="mt-5 card bg-surface-800 px-10 py-2">Players:</h>
            <div class="flex flex-col">
                {#each activeLobbyState.players as player}
                    <div class="mt-2 text-wrap">
                        {player}
                    </div>
                {/each}
            </div>
            
            {#if activeLobbyState.gameState.game != "InLobby" && isHost}
                <button aria-label="back to lobby button" class="btn preset-outlined-primary-500 mt-auto mb-5" onclick={async (e) => {sendGameRequest("InLobby")}}>Back to lobby</button>
            {/if}
            {#if activeLobbyState.gameState.game == "InLobby"&& isHost}
                <button class="btn preset-outlined-primary-500 mt-auto mb-5" onclick={async (e) => {
                    sendGameRequest("TicTacToe")
                }}>Start Game</button>
            {/if}
        </div>
    </div>
    <div class="flex flex-col min-h-[calc(100dvh-70px)] lg:w-[calc(100%-20rem)] justify-center items-center">
        {#if activeLobbyState.gameState.game == "InLobby" && !error}
            <div class="flex flex-row left-20">
                
            </div>
        {:else if !error}
        <div class="flex flex-col h-full">
            {#if activeLobbyState.gameState.game == "TicTacToe"}
            <TicTacToe gameState = {activeLobbyState.gameState} playerID={playerID} exportFunction={sendGameTurn}/>
            {/if}
        </div>
        {:else}
            <div>
                The lobby no longer exists. Please create a new lobby
            </div>
        {/if}
    </div>
</div>