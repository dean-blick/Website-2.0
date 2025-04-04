<script lang="ts">
	import { goto } from "$app/navigation"
    import type {PageData} from "./$types";
    import { enhance } from "$app/forms";
    import type { ActionData } from "./$types";
    import { isLoading } from "../../../stores/LoadingState.svelte";

    //This form object is like magical stuff that grabs the response from the post request.. very cool
    let { data, form }: { data: PageData, form: ActionData } = $props();

    interface dataObject {
        players: Array<{playerName: string}>,
        _id: string,
        name: string
    }

    let testData: Array<dataObject> = $derived(data.testData)

    let createLobbyName = $state("")

    let userName = $state("")

    let maxPlayers: number = $state(2)

    let isPublic = $state(true)

    //Thank you kirlich on stack overflow

    function sleep(ms: number) {
        isLoading.value = true;
		return new Promise((resolve) => setTimeout(resolve, ms))
	}

    async function JoinLobby(id: string | undefined, attempts: number) {
        await sleep(250).then(async () => {
            isLoading.value = false
            goto(`/projects/lobby/game/${id}`)
        })
    }
</script>



<div class="flex flex-col w-full h-screen pt-[70px] items-center">
    <div class="card p-3 m-2 w-[calc(100%-30px)] lg:w-1/3 bg-surface-100-900">
        <input class={"input " + (userName == "" ? ("border-[2px] border-error-500") : (""))} type="text" placeholder={"Username"} bind:value={userName}>
    </div>
    <form class="flex flex-col w-[calc(100%-30px)] lg:w-1/3 items-center card bg-surface-100-900 p-3" method="POST" action="?/addLobbyDocument" use:enhance>
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
        <button disabled={!createLobbyName || !userName} class="btn preset-filled-primary-400-600 mt-2 text-wrap disabled:hover:opacity-70"
            onclick={() => {sleep(500).then(() => {JoinLobby(form?.id, 0)})}}>
            Create Lobby
        </button>
    </form>
    {#each testData as d}
        <div class="flex flex-row mt-2 w-[calc(100%-30px)] lg:w-1/3 card bg-surface-100-900 p-3 justify-between">
            <article>
                <h2>{d.name}</h2>
                <h3 class="pl-8">Players:
                    {#each d.players as player}
                        <p class="pl-4">- {player.playerName}</p>
                    {/each}
                </h3>
            </article>
            <form class="flex" method="POST" action="?/playerJoinRequest" use:enhance>
                <input type="hidden" name="lobbyId" value={d._id}/>
                <input type="hidden" name="playerName" value={userName}/>
                <input type="hidden" name="playerID" value={data.playerID}/>
                <button disabled={!userName} class="btn preset-filled-primary-500 disabled:hover:opacity-70 self-center"
                onclick={() => {JoinLobby(d._id, 0)}}>
                Join Lobby
            </button>
            </form>
            
        </div>
    {/each}
    
</div>