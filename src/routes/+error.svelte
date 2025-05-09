<script lang="ts">
	import { page } from '$app/state';
</script>
<div class="flex flex-col min-h-[calc(100vh-70px)] w-full lg:w-auto justify-center items-center pt-2 pb-2">
    <h1 class="text-8xl font-bold m-8">{page.status} </h1>
    <h1 class="text-4xl">{page.error?.message}</h1>
</div>