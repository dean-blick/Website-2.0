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

<div class="project-container">
    <div class="project-content">
        <h1 class="project-title mb-{info.Description != "" ? ("2") : ("0")}" >
            {info.Title}
        </h1>
        <div class="project-description">
            {info.Description}
        </div>
        <div class="project-badges">
            {#each info.Badges as badge}
                <div class="project-badge">
                    {badge}
                </div>
            {/each}
        </div>
    </div>
    <div class="project-links">
        {#if info.GitHub != ""}
        <a href={info.GitHub} aria-label="link" class="mb-auto">
            <img alt="GitHub" src="/mdi--github.png" class="h-[20px] w-[20px]"/>
        </a>
        {/if}
        
        {#if info.Link != ""}
            <a href={info.Link} class="project-go">
                Go
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20"><path fill="#ffffff" d="M2 11V9h12l-4-4l1-2l7 7l-7 7l-1-2l4-4z"/></svg>
            </a>
        {/if}
        
    </div>
</div>

<style lang="postcss">
    @reference "tailwindcss";
    @reference '../app.css';
    
    .project-container {
        @apply flex flex-row w-[calc(100%-40px)] card preset-filled-surface-100-900 my-2 p-3 md:w-[45rem];
    }

    .project-content {
        @apply flex flex-col flex-wrap lg:justify-between justify-center;
    }

    .project-links {
        @apply flex flex-col justify-end items-end w-[20px] min-w-[20px] ml-auto;
    }

    .project-go {
        @apply flex flex-row badge preset-outlined-primary-50-950 justify-center items-center text-center;
    }

    .project-badges {
        @apply flex flex-row flex-wrap justify-start mt-1;
    }

    .project-badge {
        @apply badge preset-filled-primary-100-900 mr-2 mt-2;
    }

    .project-title {
        @apply flex flex-row justify-start font-bold;
    }

    .project-description {
        @apply flex flex-row w-full justify-start text-wrap text-sm opacity-75;
    }
</style>