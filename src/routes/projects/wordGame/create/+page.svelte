<script lang="ts">
    let out = ""
    let displayLink = $state("")
    let buttonClicked = $state(false)
    function encrypt(str: string){
        var finalEncrypt = ""
        for(var i = 0; i<str.length; i++){
            if(str.charCodeAt(i) < 100){
                finalEncrypt += "0"
            }
            finalEncrypt += str.charCodeAt(i)
        }
        return finalEncrypt
    }

    function doInput(){
        out = encrypt(this.value);
    }

    function showLink(){
        displayLink = "deanblickenstaff.vercel.app/projects/wordGame/gameWord/" + out
        buttonClicked = true
    }

    function copyClipboard(){
        navigator.clipboard.writeText(displayLink)
    }

</script>
<div class="flex flex-1 flex-row w-full min-h-[calc(100vh-70px)] bg-dark-400">
    <div class="flex flex-1 flex-col justify-center">
        <div class="flex flex-row justify-center text-white py-2">Enter Word</div>
        <div class="flex flex-row justify-center w-full bg-dark-400">
            <input class="input w-1/6" type="text" oninput={doInput}>
            <button class="border-dark-100 border-1 rounded-lg px-2 py-1 text-white bg-gray-700 hover:bg-yellow-400 focus:bg-lime-900" onclick={showLink}>Submit</button>
        </div>
        <div class="flex flex-row justify-center w-full bg-dark-400">
            {#if buttonClicked}
                <div class="flex flex-row bg-dark-400 my-2">
                    <div class="text-white py-1">{displayLink}</div>
                    <button onclick={copyClipboard} class="mx-3 border-dark-100 border-1 rounded-lg py-1 px-2 text-white bg-gray-700 hover:bg-yellow-400 focus:bg-lime-900"> Copy to Clipboard</button>
                </div>
            {:else}
                <div></div>
            {/if}
        </div>
    </div>
</div>