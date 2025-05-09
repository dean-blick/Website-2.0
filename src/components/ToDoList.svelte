<script lang="ts">
    import { run } from 'svelte/legacy';

    import TextInput from "./TextInput.svelte";
    let listItem = {checked: false, s: ""};
    let listItems: Array<{checked: boolean, s: string}> = [{checked: false, s: "Example Item"}];
    let currentString = "";
    function newToDoItem(newString: string) {
        listItems = [{checked: false, s:newString}, ...listItems];
    }
    function removeToDoItem(index: number){
        listItems.splice(index, 1);
        listItems = listItems;
    }
    function moveToDoItem(index: number, direction: boolean) {
        if(direction && index != listItems.length - 1){
            [listItems[index + 1], listItems[index]] = [listItems[index], listItems[index + 1]];
        }else if(!direction && index != 0) {
            [listItems[index - 1], listItems[index]] = [listItems[index], listItems[index - 1]];
        }
    }
</script>
<div class="flex flex-col w-full lg:w-1/3 bg-surface-900 mb-2 p-6 card">
    <div class="overflow-y-auto w-full h-80 max-h-80 content-end flex flex-col-reverse card bg-surface-800">
        {#each listItems as item}
        <div class="flex flex-row justify-start h-8 items-center my-2 mx-2 card bg-surface-900 px-4 py-8">
            <input type="checkbox" class="checkbox mx-2 accent-primary-500"/>
            <p>{item.s}</p>
            <button class="btn preset-outlined-primary-500 ml-auto" aria-label="icon" onclick={() => moveToDoItem(listItems.indexOf(item), false)}>Down</button>
            <button class="btn preset-outlined-primary-500 ml-1" aria-label="icon" onclick={() => moveToDoItem(listItems.indexOf(item), true)}>Up</button>
            <button class="btn preset-outlined-primary-500 ml-1" aria-label="icon" onclick={() => removeToDoItem(listItems.indexOf(item))}>Delete</button>
        </div>
        {/each}
    </div>
    <div class="m-4">
        <TextInput placeholderText="To-Do Text" outFunction={newToDoItem}/>
    </div>
</div>
