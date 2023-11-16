<script lang="ts">
	import { fade, fly, scale } from 'svelte/transition';
	import { likedDogsListF } from '$lib/rune.svelte.js';

	const likedDogsList = likedDogsListF();

	// TODO: wait for eslint-plugin-svelte to support runes
	// eslint-disable-next-line no-undef
	const { onbuttonTapped } = $props<{
		onbuttonTapped: () => void;
	}>();

	let imageUrl = '';
	let outMoveDirection = 0;

	const loadDogImage = async () => {
		const url = 'https://dog.ceo/api/breeds/image/random';
		const response = await fetch(url);
		if (response.ok) {
			const dogRes = await response.json();
			imageUrl = dogRes.message;
		}
		return imageUrl;
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
					onclick={() => {
						outMoveDirection = -500;
						onbuttonTapped();
					}}
				>
					💔
				</button>
				<button
					class="btn btn-secondary btn-outline btn-lg"
					onclick={async () => {
						likedDogsList.add(imageUrl);
						outMoveDirection = 500;
						onbuttonTapped();
					}}
				>
					❤️
				</button>
			</div>
		</div>
	</div>
{/await}
