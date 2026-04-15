<script lang="ts">
	import { page } from '$app/state';
	import Button from '$lib/components/inputs/Button.svelte';

	import Cookies from 'js-cookie';

	let { data } = $props();

	let userIsAware = $derived(data.pdfUserIsAware);
	let doNotShowAgain = $state(false);

	const pdfNameRegex = /[^/]+(?=\/$|$)/;
	const pdfName = pdfNameRegex.exec(page.params.pdfurl!)![0];

	const pageTitle = [pdfName, 'PDF viewer'].join(' | ');

	const gDocsUrl = `https://docs.google.com/gview?url=${encodeURIComponent(`${page.params.pdfurl}${page.url.search}`)}&embedded=true`;
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta property="og:title" content={pageTitle} />
	<meta property="twitter:title" content={pageTitle} />
	<meta
		name="description"
		content="The Google Drive PDF viewer, embedded for your convenience. limes.pink does not control, endorse, or host the embedded file, which may contain sensitive content. Only proceed if you trust the person who sent you this. If you did not expect this file, do not open it."
	/>
	<meta
		property="twitter:description"
		content="The Google Drive PDF viewer, embedded for your convenience. limes.pink does not control, endorse, or host the embedded file, which may contain sensitive content. Only proceed if you trust the person who sent you this. If you did not expect this file, do not open it."
	/>
	<meta
		property="og:description"
		content="The Google Drive PDF viewer, embedded for your convenience. limes.pink does not control, endorse, or host the embedded file, which may contain sensitive content. Only proceed if you trust the person who sent you this. If you did not expect this file, do not open it."
	/>
</svelte:head>

{#if userIsAware}
	<div class="wrapper">
		<p>
			This is merely a PDF viewer. <b
				>limes.pink does not control, endorse, or host the embedded file.</b
			>
		</p>
		<iframe
			src={gDocsUrl}
			width="100%"
			height="100%"
			referrerpolicy="no-referrer"
			sandbox="allow-scripts allow-same-origin allow-popups"
			title="Google Drive PDF viewer"
			frameborder="0"
		></iframe>
	</div>
{:else}
	<div class="curtain">
		<div class="notice">
			<h1><span>WARNING!</span></h1>
			<p>
				The page you're about to visit is merely a PDF viewer, which displays a file hosted on a
				third-party site.
			</p>
			<p>
				<span
					>limes.pink does not control, endorse, or host the embedded file, which may contain
					sensitive content.</span
				>
			</p>
			<p>
				Only proceed if you trust the person who sent you to this page. <span
					>If you did not expect this file, do not open it.</span
				>
			</p>
		</div>
		<Button
			onclick={() => {
				if (doNotShowAgain) {
					Cookies.set('pdfUserIsAware', 'true', { expires: 365 * 10 });
				}

				userIsAware = true;
			}}>I understand, take me there.</Button
		>
		<label class={{ checked: doNotShowAgain }}>
			<input type="checkbox" bind:checked={doNotShowAgain} />
			Do not show this warning again
		</label>
	</div>
{/if}

<style>
	:global(html), :global(body) {
		background: #262424;
	}
	.curtain {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		padding: 1rem 0;
		background: var(--bg-pink, #262424);
		text-align: center;
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		align-items: center;
	}

	.curtain p {
		margin: 0 0 0.5rem;
	}

	.curtain span {
		background: var(--pink);
		color: var(--bg-pink);
		font-weight: 700;
	}
	.curtain :global(button) {
		font-weight: 700;
		width: fit-content;
		color: var(--bg-pink);
	}
	.curtain label {
		display: flex;
		color: var(--text-muted);
		align-items: center;
		justify-content: center;
		gap: 0.25rem;
		margin-top: 0.5rem;
		transition: color 200ms;
		font-size: 0.8em;
	}
	.curtain :global(button):hover,
	.curtain label:hover {
		text-decoration: underline;
	}

	.curtain .notice {
		margin-bottom: 2rem;
		padding: 0 1rem;
	}

	.curtain .notice h1 {
		margin: 2rem 0;
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
		color: #fff;
		margin: 0;
		height: fit-content;
		padding: 0.25rem;
		text-align: center;
	}
</style>
