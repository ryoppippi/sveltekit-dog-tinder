<script lang='ts'>
	import Card from '$lib/components/card.svelte';

	let cardDummyList = $state([0]);

	const listChange = () => {
		cardDummyList = [...cardDummyList.slice(1), Math.max(...cardDummyList) + 1];
		console.log(cardDummyList); // eslint-disable-line no-console
	};
</script>

<div class='stack grid h-full place-items-center'>
	{#each cardDummyList as dummy (dummy)}
		<Card onbuttonTapped={listChange} />
	{/each}
</div>
