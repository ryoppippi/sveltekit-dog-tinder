<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { fade, fly, scale } from 'svelte/transition';
	import { likedDogsList } from '$lib/rune.svelte.js';

	let imageUrl = '';
	let outMoveDirection = 0;
	const dispatch = createEventDispatcher();

	const loadDogImage = async () => {
		const url = 'https://dog.ceo/api/breeds/image/random';
		const response = await fetch(url);
		if (response.ok) {
			const dogRes = await response.json();
			imageUrl = dogRes.message;
		}
		return imageUrl;
	};

	const buttonTapped = () => {
		dispatch('buttonTapped');
	};
</script>

{#await loadDogImage() then _}
	<div
		class="card w-96 bg-base-200 shadow-xl"
		in:scale|global={{ delay: 200, duration: 300 }}
		out:fly|global={{
			delay: outMoveDirection ? 100 : 0,
			duration: outMoveDirection ? 400 : 0,
			x: outMoveDirection
		}}
	>
		<figure>
			<img class="h-60 object-cover" src={imageUrl} alt="Dog" in:fade|global />
		</figure>
		<div class="card-body items-center text-center">
			<h2 class="card-title">Do You ❤️ This 🐶 ?</h2>
			<div class="card-actions justify-center">
				<button
					class="btn btn-primary btn-outline btn-lg"
					on:click={async () => {
						outMoveDirection = -500;
						buttonTapped();
					}}
				>
					💔
				</button>
				<button
					class="btn btn-secondary btn-outline btn-lg"
					on:click={async () => {
						likedDogsList.add(imageUrl);
						outMoveDirection = 500;
						buttonTapped();
					}}
				>
					❤️
				</button>
			</div>
		</div>
	</div>
{/await}
