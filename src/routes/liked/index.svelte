<script lang="ts">
  import Lazy from 'svelte-lazy';
  import { likedDogsList } from '$lib/store';
</script>

<div class="grid h-full grid-cols-1 place-items-center gap-4 md:grid-cols-2">
  {#each $likedDogsList as src}
    <Lazy height={300} offset={0}>
      <div class="card w-96 bg-base-200 shadow-xl">
        <figure>
          <img class="h-60 object-cover" {src} alt="Dog" />
        </figure>
      </div>
    </Lazy>
  {/each}
</div>
