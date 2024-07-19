import { browser } from '$app/environment';

export class LikedDogsList {
	likedDogsListRune = $state(new Set<string>());

	constructor() {
		if (!browser) {
			return;
		}
		/** get from local storage */
		const likedDogsList = localStorage.getItem('likedDogsList');
		if (likedDogsList != null) {
			this.likedDogsListRune = new Set(JSON.parse(likedDogsList) as string[]);
		}
	}

	set value(v) {
		this.likedDogsListRune = v;
	}

	get value() {
		return this.likedDogsListRune;
	}

	add(dog: string) {
		this.likedDogsListRune = this.likedDogsListRune.add(dog);
		if (browser) {
			localStorage.setItem('likedDogsList', JSON.stringify(Array.from(this.likedDogsListRune)));
		}
	}

	remove(dog: string) {
		this.likedDogsListRune.delete(dog);
		// eslint-disable-next-line no-self-assign
		this.likedDogsListRune = this.likedDogsListRune;
		if (browser) {
			localStorage.setItem('likedDogsList', JSON.stringify(Array.from(this.likedDogsListRune)));
		}
	}
}
