export const load = async ({ cookies }) => {
	const pdfUserIsAware = cookies.get('pdfUserIsAware') === 'true';

	return {
		pdfUserIsAware
	};
};
