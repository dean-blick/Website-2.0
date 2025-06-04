<div class="blog-shell">
	<slot name="backButton" />
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
		@apply flex w-full flex-col pt-20 pb-2;
		@variant lg {
			@apply md:w-[50rem];
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
