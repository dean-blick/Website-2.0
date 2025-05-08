<script lang="ts">
	import { goto } from "$app/navigation"
    import type {PageData} from "./$types";
    import { enhance } from "$app/forms";
    import type { ActionData } from "./$types";
    import { isLoading } from "../../../stores/LoadingState.svelte";
	import { onMount } from "svelte";

    //This form object is like magical stuff that grabs the response from the post request.. very cool
    let { data, form }: { data: PageData, form: ActionData } = $props();

    interface dataObject {
        players: Array<{playerName: string}>,
        _id: string,
        name: string
    }

    let testData: Array<dataObject> = $derived(data.testData)

    let playerID: string | undefined = ""

    let createLobbyName = $state("")

    let userName = $state("")

    let maxPlayers: number = $state(2)

    let isPublic = $state(true)

    function sleep(ms: number) {
        isLoading.value = true;
		return new Promise((resolve) => setTimeout(resolve, ms))
	}

    async function CreateLobby() {
        isLoading.value = true;
        const response = await fetch('/projects/lobby', {
			method: 'POST',
			body: JSON.stringify({isCreateLobby: true, info: { createLobbyName: createLobbyName, maxPlayers: maxPlayers, isPublic: isPublic, playerName: userName, playerID: playerID }}),
			headers: {
				'Content-Type': 'application/json'
			}
		});
        const data = await response.json()
        if(data.success == false) {
            isLoading.value = false
            console.log("create error")
        }
        else {
            isLoading.value = false
            goto(`/projects/lobby/game/${data.id}`)
        }
    }

    async function JoinLobby(id: string | undefined) {
        isLoading.value = true;
        const response = await fetch('/projects/lobby', {
			method: 'POST',
			body: JSON.stringify({isCreateLobby: false, info: { lobbyID: id, playerName: userName, playerID: playerID }}),
			headers: {
				'Content-Type': 'application/json'
			}
		});
        const data = await response.json()
        if(data.success == true) {
            isLoading.value = false
            goto(`/projects/lobby/game/${id}`)
        }
    }

    onMount(() => {
        playerID = data.playerID
    })
</script>



{#if isLoading.value}
<div class="flex absolute w-screen min-h-[calc(100vh-70px)] bg-black opacity-40 z-[20] justify-center items-center">
    <div role="status">
        <svg aria-hidden="true" class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-purple-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        <span class="sr-only">Loading...</span>
    </div>
</div>
{/if}
<div class="flex flex-col w-full min-h-[calc(100vh-70px)] pt-[70px] items-center">
    <div class="card p-3 m-2 w-[calc(100%-30px)] lg:w-1/3 bg-surface-900">
        <input class={"input " + (userName == "" ? ("border-[2px] border-error-500") : (""))} type="text" placeholder={"Username"} bind:value={userName}>
    </div>
    <div class="flex flex-col w-[calc(100%-30px)] lg:w-1/3 items-center card bg-surface-900 p-3">
        <div class="grid grid-cols-2 grid-rows-3 items-center gap-2">
            <div class="mr-1">Name of Lobby: </div>
            <input class="input mr-4" type="text" name = "lobbyName" placeholder={"lobbyName"} bind:value={createLobbyName}>
            <div class="mr-1">Maximum number of players:</div>
            <input class="input" type="number" name = "maxPlayers" placeholder={"Max Players"} bind:value={maxPlayers}>
            <div class="mr-1">Make lobby public?</div>
            <input class="checkbox" type="checkbox" name = "isPublic" placeholder={"Public?"} bind:checked={isPublic}>
        </div>
        <input type="hidden" name="playerName" value={userName}/>
        <input type="hidden" name="playerID" value={data.playerID}/>
    </div>
    <button disabled={!createLobbyName || !userName} class="btn preset-filled-primary-400-600 mt-2 mb-8 text-wrap disabled:hover:opacity-70"
        onclick={() => {CreateLobby()}}>
        Create Lobby
    </button>
    
    {#each testData as d}
        <div class="flex flex-row mt-2 w-[calc(100%-30px)] lg:w-1/3 card bg-surface-900 p-3 justify-between">
            <article>
                <h2>{d.name}</h2>
                <h3 class="pl-8">Players:
                    {#each d.players as player}
                        <p class="pl-4">- {player.playerName}</p>
                    {/each}
                </h3>
            </article>
            <div class="flex">
                <input type="hidden" name="lobbyId" value={d._id}/>
                <input type="hidden" name="playerName" value={userName}/>
                <input type="hidden" name="playerID" value={data.playerID}/>
                <button disabled={!userName} class="btn preset-filled-primary-500 disabled:hover:opacity-70 self-center"
                onclick={() => {JoinLobby(d._id)}}>
                Join Lobby
            </button>
            </div>
            
        </div>
    {/each}
    
</div>