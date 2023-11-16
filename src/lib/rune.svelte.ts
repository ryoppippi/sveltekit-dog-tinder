function factory() {
	let likedDogsListRune = $state<Set<string>>(new Set());

	return {
		set value(v: Set<string>) {
			likedDogsListRune = v;
		},

		get value() {
			return likedDogsListRune;
		},

		add: (dog: string) => {
			likedDogsListRune = likedDogsListRune.add(dog);
		},

		remove: (dog: string) => {
			likedDogsListRune.delete(dog);
			// eslint-disable-next-line no-self-assign
			likedDogsListRune = likedDogsListRune;
			console.log({ dog, likedDogsListRune });
		}
	};
}

// TODO: wait for rune bug
// url: https://github.com/sveltejs/svelte/issues/9301

let singleton: ReturnType<typeof factory>;

export function likedDogsListF() {
	return singleton ?? (singleton = factory());
}
