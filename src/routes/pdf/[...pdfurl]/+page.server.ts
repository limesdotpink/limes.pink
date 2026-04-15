import { redirect } from '@sveltejs/kit';

export function load(req) {
	const gDocsUrl = `https://docs.google.com/gview?url=${encodeURIComponent(`${req.params.pdfurl}${req.url.search}`)}&embedded=true`;
	redirect(307, gDocsUrl);
}
