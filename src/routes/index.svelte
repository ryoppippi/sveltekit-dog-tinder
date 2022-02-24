<script context="module">
  const url = 'https://dog.ceo/api/breeds/image/random';
  export async function load({ fetch }) {
    const response = await fetch(url);

    return {
      status: response.status,
      props: {
        dogRes: response.ok && (await response.json()),
        url: url,
      },
    };
  }
</script>

<!-- </script> -->
<script lang="ts">
  export let dogRes: { message: string };

  let imageUrl = dogRes.message;

  import { onMount } from 'svelte';
  import { get } from 'svelte/store';
  import { likedDogsList } from '$lib/store';

  const loadDogImage = async () => {
    const response = await fetch(url);
    if (response.ok) {
      const dogRes = await response.json();
      imageUrl = dogRes.message;
    }
  };

  const saveLikedDogsURL = () => {
    likedDogsList.set([...get(likedDogsList), imageUrl]);
  };
  onMount(async () => {
    imageUrl = dogRes.message;
  });
</script>

<div class="grid h-full place-items-center">
  <div class="card w-96 bg-base-200 shadow-xl">
    <figure>
      <img class="h-60 object-cover" src={imageUrl} alt="Dog" />
    </figure>
    <div class="card-body items-center text-center">
      <h2 class="card-title">Do You ❤️ This 🐶 ?</h2>
      <div class="card-actions justify-center ">
        <button
          class="btn-outline btn btn-secondary btn-lg"
          on:click={async () => {
            saveLikedDogsURL();
            await loadDogImage();
          }}
        >
          ❤️
        </button>
        <button
          class="btn-outline btn btn-primary btn-lg"
          on:click={async () => {
            await loadDogImage();
          }}
        >
          💔
        </button>
      </div>
    </div>
  </div>
</div>
