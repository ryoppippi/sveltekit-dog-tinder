export class LikedDogsList {
	likedDogsListRune = $state<Set<string>>(new Set());

	set value(v: Set<string>) {
		this.likedDogsListRune = v;
	}

	get value() {
		return this.likedDogsListRune;
	}

	add(dog: string) {
		this.likedDogsListRune = this.likedDogsListRune.add(dog);
	}

	remove(dog: string) {
		this.likedDogsListRune.delete(dog);
		// eslint-disable-next-line no-self-assign
		this.likedDogsListRune = this.likedDogsListRune;
	}
}
