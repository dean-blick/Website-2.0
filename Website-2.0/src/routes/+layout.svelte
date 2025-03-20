<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<header class="sticky top-0 z-50 border-b-[1px] border-surface-500/20 bg-surface-50/90 dark:bg-surface-950/90 backdrop-blur w-full h-[70px] flex items-center">

</header>
{@render children()}
