<script lang="ts">
  import { onMount } from 'svelte';

  let imageUrl = '';

  const loadDogImage = async () => {
    const url = 'https://dog.ceo/api/breeds/image/random';
    const response = await fetch(url);
    imageUrl = response.ok && (await response.json()).message;
  };

  const saveLikedDog = () => {
    const listName = 'likedDogs';
    const dogsList = JSON.parse(localStorage.getItem(listName)) || [];
    dogsList.push(imageUrl);
    localStorage.setItem(listName, JSON.stringify(dogsList));
  };

  onMount(async () => {
    await loadDogImage();
  });
</script>

<div class="grid h-full place-items-center">
  <div class="card w-96 bg-base-200 shadow-xl">
    <figure><img class="h-60 object-cover" src={imageUrl} alt="Dog" /></figure>
    <div class="card-body items-center text-center">
      <h2 class="card-title">Do You ❤️ This 🐶 ?</h2>
      <div class="card-actions justify-center ">
        <button
          class="btn-outline btn btn-secondary btn-lg"
          on:click={async () => {
            await loadDogImage();
            saveLikedDog();
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
