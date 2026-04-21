import type { Handle } from '@sveltejs/kit';
import { paraglideMiddleware } from '$lib/paraglide/server';

export const handle: Handle = async ({ event, resolve }) => {
	const response = await paraglideMiddleware(event.request, async ({ request, locale }) => {
		event.request = request;

		return await resolve(event, {
			transformPageChunk: ({ html }) => html.replace('%paraglide.lang%', locale)
		});
	});

	const corsDomainRegex = /^(.*\.)?limes\.pink$/;

	console.log(event.request.headers.get('origin'))
	const origin = new URL(event.request.headers.get('origin') || 'https://example.org').hostname;

	if (corsDomainRegex.test(origin)) {
		response.headers.append('Access-Control-Allow-Origin', `https://${origin}`);
	}

	return response;
};