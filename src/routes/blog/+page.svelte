<script lang="ts">
	import Project from '../../components/Project.svelte'
	import Shell from '../../components/Shell.svelte'
	import type { PageData } from './$types'
	import type { ProjectInfo } from '../../components/Project.svelte'
	import type { Component } from 'svelte'
	import Icon from '@iconify/svelte'

	let { data }: { data: PageData } = $props()

	let mainScreen = $state(true)

	let posts: Array<ProjectInfo> = [
		{
			Title: 'The Problem With Software Development and College',
			Description: '',
			Badges: [],
			Link: 'CSAndCollege',
			GitHub: ''
		}
	]

	let CurrentBlog: Component | undefined = $state()
	async function goToBlog(component: string) {
		console.log(component)
		CurrentBlog = (await import(`../../components/blog_posts/${component}.svelte`)).default
		mainScreen = false
	}
	async function goBackToBlogs() {
		mainScreen = true
	}
</script>

{#if mainScreen}
	<Shell>
		{#each posts as project}
			<Project info={project} linkFunction={goToBlog}></Project>
		{/each}
	</Shell>
{:else}
	<Shell>
		<button onclick={goBackToBlogs} class="btn-icon preset-outlined-primary-100-900 absolute top-17 left-0 m-5">
			<Icon icon="mdi-light:arrow-left"></Icon>
		</button>
		<CurrentBlog />
	</Shell>
{/if}
