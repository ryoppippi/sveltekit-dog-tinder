<script>
	import '../app.css';
	import { base } from '$app/paths';
	import { MetaTags } from 'svelte-meta-tags';

	const pageTitle = 'Doginder🐶';
	const description = 'Tinder for Dogs';
	const url = 'https://ryoppippi.github.io/sveltekit-dog-tinder/';
	const imageUrl = `${base}/ogp.jpg`;
	const imageAlt = 'Doginder🐶 - Tinder for Dogs';

	const { children } = $props();
</script>

<svelte:head>
	<link
		rel="icon"
		href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text x=%2250%%22 y=%2250%%22 style=%22dominant-baseline:central;text-anchor:middle;font-size:90px;%22>🐶</text></svg>"
	/>
	<link
		rel="icon alternate"
		type="image/png"
		href="https://twemoji.maxcdn.com/v/13.0.2/72x72/1f638.png"
	/>
</svelte:head>

<MetaTags
	title={pageTitle}
	{description}
	twitter={{
		handle: '@ryoppippi',
		site: '@ryoppipi',
		cardType: 'summary_large_image',
		title: pageTitle,
		description: description,
		image: imageUrl,
		imageAlt: imageAlt
	}}
	openGraph={{
		url: url,
		title: pageTitle,
		description: description,
		images: [
			{
				url: imageUrl,
				width: 778,
				height: 813,
				alt: imageAlt
			}
		],
		site_name: pageTitle
	}}
/>

<div class="navbar bg-base-100">
	<div class="flex-1">
		<a class="btn btn-ghost text-xl normal-case" href={`${base}/`}>dogInder</a>
	</div>
	<div class="flex-none">
		<ul class="menu menu-horizontal p-0">
			<li><a href={`${base}/liked`}> ❤️ </a></li>
			<!-- <li><a>About</a></li> -->
		</ul>
	</div>
</div>

{@render children()}
