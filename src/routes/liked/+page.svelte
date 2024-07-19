<script lang='ts'>
	import { LikedDogsList } from '$lib/rune.svelte.js';

	let show: string | null = null;

	function toggleShow(url: string) {
		show = show ? null : url;
	}

	const likedDogsList = new LikedDogsList();
</script>

<div class='grid h-full grid-cols-1 place-items-center gap-4 md:grid-cols-2'>
	{#each likedDogsList.value as src (src)}
		<div
			class='card relative w-96 bg-base-200 shadow-xl'
			onmouseenter={() => toggleShow(src)}
			onmouseleave={() => toggleShow(src)}
			role='presentation'
		>
			<figure>
				<img class='h-60 object-cover' alt='Dog' {src} />
			</figure>
			{#if show === src}
				<button
					class='btn btn-circle btn-error absolute right-0 top-0'
					onclick={() => likedDogsList.remove(src)}
					type='button'
				>
					<svg
						class='h-6 w-6'
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'
					><path
						d='M6 18L18 6M6 6l12 12'
						stroke-linecap='round'
						stroke-linejoin='round'
						stroke-width='2'
					/></svg
					>
				</button>
			{/if}
		</div>
	{/each}
</div>
