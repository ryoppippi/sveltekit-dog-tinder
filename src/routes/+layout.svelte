<script>
	import { MetaTags } from 'svelte-meta-tags';
	import { base } from '$app/paths';

	const pageTitle = 'Doginder🐶';
	const description = 'Tinder for Dogs';
	const url = 'https://ryoppippi.github.io/sveltekit-dog-tinder/';
	const imageUrl = `${base}/ogp.jpg`;
	const imageAlt = 'Doginder🐶 - Tinder for Dogs';

	const { children } = $props();
</script>

<svelte:head>
	<link
		href='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text x=%2250%%22 y=%2250%%22 style=%22dominant-baseline:central;text-anchor:middle;font-size:90px;%22>🐶</text></svg>'
		rel='icon'
	/>
	<link
		href='https://twemoji.maxcdn.com/v/13.0.2/72x72/1f638.png'
		rel='icon alternate'
		type='image/png'
	/>
</svelte:head>

<MetaTags
	{description}
	openGraph={{
		url,
		title: pageTitle,
		description,
		images: [
			{
				url: imageUrl,
				width: 778,
				height: 813,
				alt: imageAlt,
			},
		],
		site_name: pageTitle,
	}}
	title={pageTitle}
	twitter={{
		handle: '@ryoppippi',
		site: '@ryoppipi',
		cardType: 'summary_large_image',
		title: pageTitle,
		description,
		image: imageUrl,
		imageAlt,
	}}
/>

<div class='navbar bg-base-100'>
	<div class='flex-1'>
		<a class='btn btn-ghost text-xl normal-case' href={`${base}/`}>dogInder</a>
	</div>
	<div class='flex-none'>
		<ul class='menu menu-horizontal p-0'>
			<li><a href={`${base}/liked`}> ❤️ </a></li>
			<!-- <li><a>About</a></li> -->
		</ul>
	</div>
</div>

{@render children()}
