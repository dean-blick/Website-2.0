<div class="page-shell">
	<slot />
</div>

<style lang="postcss">
	@reference "tailwindcss";
	@reference '../app.css';
	.page-shell {
		@apply static flex min-h-[calc(100dvh-70px)] w-full flex-col items-center pt-2 pb-2;
		@variant lg {
			@apply w-auto;
		}
	}
</style>
