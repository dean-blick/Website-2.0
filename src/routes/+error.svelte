<script lang="ts">
	import { page } from '$app/state'
</script>

<div class="flex min-h-[calc(100vh-70px)] w-full flex-col items-center justify-center pt-2 pb-2 lg:w-auto">
	<h1 class="m-8 text-8xl font-bold">{page.status}</h1>
	<h1 class="text-4xl">{page.error?.message}</h1>
</div>
