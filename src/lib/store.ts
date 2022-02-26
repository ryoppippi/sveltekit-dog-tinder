import { writable } from 'svelte-local-storage-store';

export const likedDogsList = writable('likedDogsList', []);
