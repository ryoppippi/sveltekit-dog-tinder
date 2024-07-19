<script lang='ts'>
	import { fade, fly, scale } from 'svelte/transition';
	import { LikedDogsList } from '$lib/rune.svelte.js';

	const likedDogsList = new LikedDogsList();

	const { onbuttonTapped }: { onbuttonTapped: () => void } = $props();

	let imageUrl = $state(Promise.resolve(''));

	let outMoveDirection = $state(0);

	const loadDogImage = async () => {
		const url = 'https://dog.ceo/api/breeds/image/random';
		const response = await fetch(url);
		if (response.ok) {
			const { message } = await response.json();
			return message;
		}
		throw new Error('Network response was not ok.');
	};

	$effect(() => {
		imageUrl = loadDogImage();
	});
</script>

{#await imageUrl then imageUrl}
	<div
		class='card w-96 bg-base-200 shadow-xl'
		in:scale|global={{ delay: 200, duration: 300 }}
		out:fly|global={{
			delay: outMoveDirection ? 100 : 0,
			duration: outMoveDirection ? 400 : 0,
			x: outMoveDirection,
		}}
	>
		<figure>
			<img class='h-60 object-cover' alt='Dog' src={imageUrl} in:fade|global />
		</figure>
		<div class='card-body items-center text-center'>
			<h2 class='card-title'>Do You ❤️ This 🐶 ?</h2>
			<div class='card-actions justify-center'>
				<button
					class='btn btn-outline btn-primary btn-lg'
					onclick={() => {
						outMoveDirection = -500;
						onbuttonTapped();
					}}
					type='button'
				>
					💔
				</button>
				<button
					class='btn btn-outline btn-secondary btn-lg'
					onclick={async () => {
						likedDogsList.add(imageUrl);
						outMoveDirection = 500;
						onbuttonTapped();
					}}
					type='button'
				>
					❤️
				</button>
			</div>
		</div>
	</div>
{/await}
