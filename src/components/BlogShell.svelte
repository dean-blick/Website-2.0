<div class="blog-shell">
	<div class="header">
		<slot name="header" />
	</div>
	<div class="subheader">
		<slot name="subheader" />
	</div>
	<div class="content">
		<slot name="content" />
	</div>
</div>

<style lang="postcss">
	@reference "tailwindcss";
	@reference '../app.css';
	.blog-shell {
		@apply flex w-full flex-col px-6 pt-20 pb-2;
		@variant lg {
			@apply w-auto;
		}
	}
	.header {
		@apply h3;
	}
	.subheader {
		@apply h6 py-5 opacity-50;
	}
	.content {
		@apply card break-before-auto;
	}
</style>
