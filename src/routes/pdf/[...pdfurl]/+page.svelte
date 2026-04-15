<script lang="ts">
	import { page } from '$app/state';

    const gDocsUrl = `https://docs.google.com/gview?url=${encodeURIComponent(`${page.params.pdfurl}${page.url.search}`)}&embedded=true`;
</script>

<div class="wrapper">
<p>This is merely a PDF viewer. limes.pink does not control/endorse whatever content you're seeing.</p>
<iframe src="{gDocsUrl}" width="100%" height="100%" title="Google Docs PDF viewer" frameborder="0"></iframe>
</div>

<style>
    .wrapper {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-rows: fit-content(100%) auto;
    }

    p {
        display: block;
        width: 100%;
        background-color: var(--pink);
        margin: 0;
        height: fit-content;
        padding: .25rem;
        text-align: center;
    }
</style>