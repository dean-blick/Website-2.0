<script lang="ts">
    let {info} = $props<{info: ProjectInfo}>()
    interface ProjectInfo {
        Title: string,
        Description: string,
        Badges: Array<string>,
        Link: string,
        GitHub: string
    }
</script>

<div class="flex flex-row w-[calc(100%-40px)] card preset-filled-surface-100-900 m-2 p-3 lg:w-1/3">
    <div class="flex flex-col flex-wrap lg:justify-between justify-center">
        <h1 class={"flex flex-row justify-start  font-bold " + (info.Description != "" ? ("mb-2") : ("mb-0"))}>
            {info.Title}
        </h1>
        <div class="flex flex-row w-full justify-start text-wrap text-sm opacity-75">
            {info.Description}
        </div>
        <div class="flex flex-row flex-wrap justify-start mt-1">
            {#each info.Badges as badge}
                <div class="badge preset-filled-primary-100-900 mr-2 mt-2">
                    {badge}
                </div>
            {/each}
        </div>
    </div>
    <div class="flex flex-col justify-end items-end w-[20px] min-w-[20px] ml-auto">
        {#if info.GitHub != ""}
        <a href={info.GitHub} aria-label="link" class="mb-auto">
            <img alt="GitHub" src="/mdi--github.png" class="h-[20px] w-[20px]"/>
        </a>
        {/if}
        
        {#if info.Link != ""}
            <a href={info.Link} class="flex flex-row badge preset-outlined-primary-50-950 justify-center items-center text-center">
                Go
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20"><path fill="#ffffff" d="M2 11V9h12l-4-4l1-2l7 7l-7 7l-1-2l4-4z"/></svg>
            </a>
        {/if}
        
    </div>
</div>