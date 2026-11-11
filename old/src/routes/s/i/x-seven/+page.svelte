<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';

	import { page } from '$app/state';

	let ogImage = '/img/67pink.webp';

	const gifID = page.url.searchParams.get('gif');
	if (gifID) {
		ogImage = `https://klx-sevenpy.com/gifs/${gifID}.webp`;
	}
</script>

<svelte:head>
	<title>discord s/i/x-seven hack 🔥 | limes.pink</title>
	<meta property="og:title" content="discord s/i/x-seven hack 🔥 | limes.pink" />
	<meta property="twitter:title" content="discord s/i/x-seven hack 🔥 | limes.pink" />
	<meta
		name="description"
		content="1. send a gif from the featured gifs section&#10;2. send s/i/x-seven&#10;3. six seven"
	/>
	<meta
		property="twitter:description"
		content="1. send a gif from the featured gifs section&#10;2. send s/i/x-seven&#10;3. six seven"
	/>
	<meta
		property="og:description"
		content="1. send a gif from the featured gifs section&#10;2. send s/i/x-seven&#10;3. six seven"
	/>
	<meta property="og:image" content={ogImage} />
	<meta property="twitter:image" content={ogImage} />
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:image:alt" content="" />
	<meta property="og:image:alt" content="" />
	<link rel="canonical" href="https://limes.pink/s/i/x-seven" />
	<meta property="og:url" content="https://limes.pink/s/i/x-seven" />
</svelte:head>

<div class="wrapper">
	<div class="stuffwrapper section" id="stuff">
		<div class="inner">
			<h1><span class="coolspan">hi!</span></h1>
			<p>
				i'm kip (limes.pink) and i made the <b>discord s/i/x-seven hack</b>, based on an idea by the
				<a href="https://dootsky.re" target="_blank">very cool and talented sky</a>, inspired by the
				<a href="https://www.youtube.com/watch?v=km8CR-fdB7o" target="_blank"
					>original discord s/e/x hack by rebane</a
				>. to learn how this works, look at the
				<a href="https://github.com/limesdotpink/klx-sevenpy#how-this-works" target="_blank"
					>readme</a
				>.
			</p>

			<p>
				p.s.: bandwidth is expensive, so <a href="https://ko-fi.com/limesdotpink" target="_blank"
					>please consider donating to my Ko-fi</a
				>
				if you're able. also, feel free to check out <a href="/">the rest of my website</a> while you're
				here.
			</p>
		</div>
	</div>

	<div class="footer section">
		<div class="inner">
			<Footer />
		</div>
	</div>
</div>

<style>
	.wrapper {
		min-height: 100%;
		display: flex;
		flex-flow: column nowrap;
		justify-content: space-between;
	}
	.footer {
		position: relative;
		background: var(--pink);
		color: var(--bg-pink);
	}

	.section {
		display: flex;
		justify-content: center;
		padding: 5rem 0;
	}
	.section .inner {
		width: 100%;
		max-width: min(var(--desktop-max-width), 90%);
	}

	a {
		text-decoration: underline;
	}

	h1 {
		color: var(--pink);
		margin: 0 0 2.5rem;
	}

	@media screen and (max-width: 600px) {
		.section {
			padding: 2.5rem 0;
		}
	}
</style>
