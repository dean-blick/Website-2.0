<script lang="ts">
    let {info} = $props<{info: ProjectItem}>()
    interface ProjectItem {
        Title: string,
        Description: string,
        Badges: Array<string>,
        Link: string,
        GitHub: string
    }
</script>

<div class="flex flex-col flex-wrap  lg:items-center lg:justify-between lg:px-60 justify-center">
    <div class="flex flex-row justify-start">
        {info.Title}
    </div>
    <div class="flex flex-row justify-start">
        {info.Description}
    </div>
    <div class="flex flex-row justify-start">
        {#each info.Badges as badge}
            <div class="badge">
                {badge}
            </div>
        {/each}
    </div>
</div>
<div class="flex flex-col">
    <div>
        <!--Place in top right, github button-->
    </div>
    <div>
        <!--Place in bottom right, go to live demo button-->
    </div>
</div>