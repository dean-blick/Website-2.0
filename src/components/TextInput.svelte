<script lang="ts">
    let currentString = $state();
    let { outFunction, placeholderText } = $props();
</script>

<div class="flex flex-row mt-4">
    <input class="input mr-6" type="text" placeholder={placeholderText} bind:value={currentString}>
    <button class="btn preset-outlined-primary-500" onclick={() => {outFunction(currentString); currentString = ""}}>Submit</button>
</div>