import type { Handle } from '@sveltejs/kit';
import { paraglideMiddleware } from '$lib/paraglide/server';

const handleParaglide: Handle = async ({ event, resolve }) =>
	await paraglideMiddleware(event.request, async ({ request, locale }) => {
		event.request = request;

		const response = await resolve(event, {
			transformPageChunk: ({ html }) => html.replace('%paraglide.lang%', locale)
		});

		response.headers.append('Access-Control-Allow-Origin', `*.limes.pink`);

		return response;
	});

export const handle: Handle = handleParaglide;
