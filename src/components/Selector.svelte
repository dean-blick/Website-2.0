<script lang="ts">
    import SelectorButton from "./SelectorButton.svelte";

    export let options: Array<string> = [];

    export let exportFunction: Function;

    export let switchCondition;

    let buttons: Array<SelectorButton> = [];

    function changeSelection(ident: string) {
        buttons.forEach(element => {
            if(element.identifier != ident) {
                element.Unselect()
            }
        });
        exportFunction(ident);
    }
    ///TODO: Add export boolean for type of flex container the buttons are in, either row col or grid
</script>


<div>
    {#each options as option, i}
        <SelectorButton bind:this={buttons[i]} isSelected={i==0 ? true : false} identifier={option} buttonText={option} switchCondition={switchCondition} selectorFunction={changeSelection}/>
    {/each}
</div>