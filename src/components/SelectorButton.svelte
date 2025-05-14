<script lang="ts">
    export let buttonText;
    export let selectorFunction: Function;
    export let isSelected = false;
    export let identifier: string;
    export let switchCondition;


    export function Unselect() {
        isSelected = false;
    }
    function Select() {
        selectorFunction(identifier);
        isSelected = true;
    }
</script>

<button class="btn m-2 {isSelected ? "preset-filled-primary-500 " : "preset-outlined-primary-500"}" onclick={() => !isSelected && switchCondition && Select()}>{buttonText}</button>