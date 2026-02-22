import type { PageServerLoad } from './$types';

import { supabase } from '$lib/server/supabaseClient';

export const load: PageServerLoad = async ({ url }) => {
	const stuffStats = {
		dcbadge: 265,
		msgithub: 412,
		nint: 73,
		ite: -1
	};

	try {
		const response = await fetch(`https://microsoftgithub.com/api/stats`);

		if (!response.ok) {
			throw new Error('Network error');
		}
		const data = await response.json();

		stuffStats.msgithub = data.rickrolled.kusers;
	} catch (error) {
		console.error('Error while fetching microsoftgithub stats:', error);
	}

	try {
		const response = await fetch(`https://api.github.com/repos/limesdotpink/dcbadge`);

		if (!response.ok) {
			throw new Error('Network error');
		}

		const data = await response.json();

		stuffStats.dcbadge = data.stargazers_count;
	} catch (error) {
		console.error('Error while fetching dcbadge stats:', error);
	}

	try {
		const response = await fetch(`https://nintendo.uk.net/api/stats`);

		if (!response.ok) {
			throw new Error('Network error');
		}
		const data = await response.json();

		stuffStats.nint = data.rickrolled.kusers;
	} catch (error) {
		console.error('Error while fetching nint stats:', error);
	}

	if (url.searchParams.get('from') === 'italiantrainexperience.com') {
		try {
			await supabase.rpc('increment_page_view', {
				page_slug: 'ite-redirect'
			});
		} catch (e) {
			console.log('[ increment_page_view ]: Supabase dead, or no config provided.', e);
		}

		try {
			const iteStats = await supabase
				.from('pages')
				.select('view_count')
				.filter('slug', 'eq', 'ite-redirect');

			const iteViewCount = iteStats?.data?.[0]?.['view_count'];

			stuffStats.ite = iteViewCount;
		} catch (e) {
			console.log('[ get viewcount ]: Supabase dead, or no config provided.', e);
		}
	}

	return stuffStats;
};
