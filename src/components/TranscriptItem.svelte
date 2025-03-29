<script lang="ts">
    let {info} = $props<{info: TranscriptInfo}>()
    interface TranscriptInfo {
        Title: string,
        Description: string,
        Badges: Array<string>
    }
</script>

<div class="flex flex-row card preset-filled-surface-100-900 my-2 mx-5 p-3 w-[calc(100%-40px)] lg:w-1/3">
    <div class="flex flex-col flex-wrap lg:justify-between justify-center">
        <h1 class={info.Description != "" ? "flex flex-row justify-start mb-2": "flex flex-row justify-start"}>
            {info.Title}
        </h1>
        <div class="flex flex-row justify-start text-wrap">
            {info.Description}
        </div>
        <div class="flex flex-row flex-wrap justify-start">
            {#each info.Badges as badge}
                <div class="badge preset-filled-primary-100-900 mr-2 mt-2">
                    {badge}
                </div>
            {/each}
        </div>
    </div>
</div>