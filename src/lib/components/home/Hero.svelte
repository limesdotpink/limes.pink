<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';

	import Logotype from '../Logotype.svelte';
</script>

<div>
	<h1>
		<span class="logotype"
			><Logotype
				size="1.25em"
				class="logo"
				fillColor="var(--pink)"
				bgColor="var(--text-on-gradient)"
			/></span
		><br />
		<span>web developer?</span><br />
		<span><i>i hardly know 'er!</i></span>
	</h1>
</div>

<style>
	span.pink {
		position: relative;
		color: var(--pink);
	}

	span.pink::before {
		content: '';
		display: block;
		position: absolute;
		height: 80%;
		width: 100%;
		top: 10%;
		left: 0;
		background: var(--text-on-gradient);
		z-index: -1;
	}

	span.logotype {
		position: relative;
		height: auto;
	}

	span.logotype :global(.logo) {
		position: absolute;
		bottom: 0;
	}

	h1 {
		margin: 2rem 0;
		line-height: 1.25;
		color: var(--text-on-gradient);
	}
</style>
