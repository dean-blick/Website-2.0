<script lang="ts">
	import { onMount } from 'svelte'
	import TextInput from './TextInput.svelte'
	let dataGood = $state()
	let login
	let avatar = $state('')
	let repoCount = $state()
	let followers = $state('')
	let following = $state('')
	let reposLink = $state('')
	let name = $state('')
	let createdAtDate = $state('')

	async function fetchData(profileName: string) {
		if (profileName == '') profileName = 'dean-blick'

		fetch(`https://api.github.com/users/${profileName}`).then((response) => {
			response
				.json()
				.then((json) => {
					dataGood = json
					login = json.login
					avatar = json.avatar_url
					repoCount = json.public_repos
					followers = json.followers
					following = json.following
					reposLink = `https://github.com/${profileName}?tab=repositories`
					name = json.name
					createdAtDate = json.created_at
					createdAtDate = createdAtDate.substring(0, createdAtDate.indexOf('T'))
				})
				.catch((error) => console.log(error))
		})
	}

	onMount(async () => {
		fetchData('dean-blick')
	})

	async function getGitHubProfile(profileName: string) {
		fetchData(profileName)
	}
</script>

<div class="card bg-surface-900 flex w-full flex-col items-center p-6 lg:w-1/3">
	{#await dataGood}
		<div>Waiting for profile..</div>
	{:then result}
		<div class="card bg-surface-800 flex w-full flex-col items-center pt-4">
			<h1 class="text-lg font-semibold">{name}</h1>
			<div class="flex flex-row">
				<img src={avatar} alt="" class="my-4 size-64 rounded-3xl" />
			</div>
			<div>{'Public repos: ' + repoCount}</div>
			<div>{'Followers: ' + followers}</div>
			<div>{'Following: ' + following}</div>
			<div>{'GitHub user since: ' + createdAtDate}</div>
			<div class="flex flex-row justify-between">
				<a href={reposLink} target="_blank" class="btn preset-filled-primary-500 my-4"> Go to this profile's repos page </a>
			</div>
		</div>
	{:catch error}
		<div>{'Error getting profile: ' + error.message}</div>
	{/await}

	<TextInput outFunction={getGitHubProfile} placeholderText="GitHub Username" />
</div>
