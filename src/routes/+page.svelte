<script lang="ts">
	import Card from '$lib/components/card.svelte';

	// TODO: wait for eslint-plugin-svelte to support runes
	// eslint-disable-next-line no-undef
	let cardDummyList = $state([0]);

	const listChange = () => {
		cardDummyList = [...cardDummyList.slice(1), Math.max(...cardDummyList) + 1];
		console.log(cardDummyList);
	};
</script>

<div class="stack grid h-full place-items-center">
	{#each cardDummyList as dummy (dummy)}
		<Card on:buttonTapped={listChange} />
	{/each}
</div>
