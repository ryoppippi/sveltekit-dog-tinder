let likedDogsListRune = $state<Set<string>>(new Set());

export const likedDogsList = {
	set value(v: Set<string>) {
		likedDogsListRune = v;
	},

	get value() {
		return likedDogsListRune;
	},

	add: (dog: string) => {
		likedDogsListRune = new Set([...likedDogsListRune, dog]);
	},

	remove: (dog: string) => {
		likedDogsListRune.delete(dog);
	}
};
