<script lang="ts">
	import { page } from '$app/state';
	import Button from '$lib/components/inputs/Button.svelte';

	import Cookies from 'js-cookie';

	let { data } = $props();

	let userIsAware = $derived(data.pdfUserIsAware);
	let doNotShowAgain = $state(false);

	const gDocsUrl = `https://docs.google.com/gview?url=${encodeURIComponent(`${page.params.pdfurl}${page.url.search}`)}&embedded=true`;
</script>

{#if userIsAware}
	<div class="wrapper">
		<p>
			This is merely a PDF viewer. limes.pink does not control/endorse whatever content you're
			seeing.
		</p>
		<iframe src={gDocsUrl} width="100%" height="100%" title="Google Docs PDF viewer" frameborder="0"
		></iframe>
	</div>
{:else}
	<div class="curtain">
		<div class="notice">
			<h1>WARNING!</h1>
			<p>
				The page you're about to visit is merely a PDF viewer, and may contain sensitive content.
			</p>
			<p>limes.pink does not control/endorse the content embedded in this page.</p>
			<p>Make sure you trust the person who sent you to this page.</p>
		</div>
		<Button
			onclick={() => {
				if (doNotShowAgain) {
					Cookies.set('pdfUserIsAware', 'true', { expires: 365 * 10 });
				}

				userIsAware = true;
			}}>I understand, take me there</Button
		>
		<label class={{ checked: doNotShowAgain }}>
			<input type="checkbox" bind:checked={doNotShowAgain} />
			Do not show this warning again
		</label>
	</div>
{/if}

<style>
	.curtain {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		padding: 1rem 0;
		/*background: var(--bg-pink, #262424);*/
		text-align: center;
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
	}

	.curtain p {
		margin: 0 0 0.25rem;
	}

	.curtain .notice {
		margin-bottom: 1.5rem;
		padding: 0 1rem;
	}

	.curtain .notice h1 {
		margin: 0.5rem 0;
	}

	.curtain label {
		display: flex;
		color: var(--text-muted);
		align-items: center;
		justify-content: center;
		gap: 0.25rem;
		margin-top: 0.5rem;
		transition: color 200ms;
	}
	.curtain label.checked {
		color: unset;
	}

	.wrapper {
		width: 100%;
		height: 100%;
		display: grid;
		grid-template-rows: fit-content(100%) auto;
	}

	.wrapper p {
		display: block;
		width: 100%;
		background-color: var(--pink);
		margin: 0;
		height: fit-content;
		padding: 0.25rem;
		text-align: center;
	}
</style>
