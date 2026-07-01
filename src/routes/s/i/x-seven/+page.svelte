<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';

	import Navbar from '$lib/components/Navbar.svelte';
	import Hero from '$lib/components/home/Hero.svelte';
	import Cardlist from '../../../../lib/components/home/Cardlist.svelte';
	import ContactLinks from '../../../../lib/components/home/Contactlinks.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	console.log('stats:\n', (() => data)());
</script>

<svelte:head>
	<title>s/i/x-seven | limes.pink</title>
	<meta property="og:title" content="s/i/x-seven | limes.pink" />
	<meta property="twitter:title" content="s/i/x-seven | limes.pink" />
	<meta name="description" content="developer? i hardly know 'er!" />
	<meta property="twitter:description" content="developer? i hardly know 'er!" />
	<meta property="og:description" content="developer? i hardly know 'er!" />
	<meta property="og:image" content="https://limes.pink/img/social.png?v=20260209v2" />
	<meta property="twitter:image" content="https://limes.pink/img/social.png?v=20260209v2" />
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:image:alt" content="" />
	<meta property="og:image:alt" content="" />
</svelte:head>

<div class="wrapper">
	<div class="stuffwrapper section" id="stuff">
		<div class="inner">
			<h1><span class="coolspan">hi!</span></h1>
			<p>
				i'm kip (limes.pink) and i made the <b>discord s/i/x-seven hack</b>, based on an idea by the
				<a href="https://dootsky.re" target="_blank" >very cool and talented sky</a>, inspired by the
				<a href="https://www.youtube.com/watch?v=km8CR-fdB7o" target="_blank"
					>original discord s/e/x hack by rebane</a
				>.
			</p>

			<p>
				bandwidth is expensive, so <a href="https://ko-fi.com/limesdotpink" target="_blank"
					>please consider donating to my Ko-fi</a
				>
				if you're able. also, feel free to check out <a href="/">the rest of my website</a> while you're
				here.
			</p>
			<br />
			<p>p.s.: <a href="https://github.com/limesdotpink/klx-sevenpy" target="_blank">source code</a>.</p>
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
