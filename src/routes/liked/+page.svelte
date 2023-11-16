<script lang="ts">
	import Lazy from 'svelte-lazy';
	import { likedDogsList } from '$lib/rune.svelte.js';

	let show: string | null = null;

	function toggleShow(url: string) {
		show = show ? null : url;
	}
</script>

<div class="grid h-full grid-cols-1 place-items-center gap-4 md:grid-cols-2">
	{#each likedDogsList.value as src}
		<Lazy height={250} offset={0}>
			<div
				role="presentation"
				class="card relative w-96 bg-base-200 shadow-xl"
				on:mouseenter={() => toggleShow(src)}
				on:mouseleave={() => toggleShow(src)}
			>
				<figure>
					<img class="h-60 object-cover" {src} alt="Dog" />
				</figure>
				{#if show === src}
					<button
						class="btn btn-circle btn-error absolute right-0 top-0"
						on:click={() => likedDogsList.remove(src)}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M6 18L18 6M6 6l12 12"
							/></svg
						>
					</button>
				{/if}
			</div>
		</Lazy>
	{/each}
</div>
