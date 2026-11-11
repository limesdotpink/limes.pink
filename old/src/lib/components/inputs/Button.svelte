<script lang="ts">
	let { children, onclick, disabled = false } = $props();
</script>

<button {onclick} {disabled}>{@render children()}</button>

<style>
	button {
		appearance: none;
		background: var(--accent, var(--pink));
		border: none;
		padding: 0.3rem 0.5rem;
		/*border-radius: 4px;*/
		color: #fff;
		/*color: inherit;*/
		font-size: inherit;
		font-family: inherit;
		position: relative;
		line-height: inherit;
		width: 100%;
		min-height: 2rem;
		cursor: pointer;
	}

	button:disabled {
		opacity: 0.4;
		cursor: not-allowed;
	}
</style>
