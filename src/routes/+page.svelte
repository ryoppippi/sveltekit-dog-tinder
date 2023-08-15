<script lang="ts">
  import Card from '$components/card.svelte';

  let cardDummyList = [0];

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


