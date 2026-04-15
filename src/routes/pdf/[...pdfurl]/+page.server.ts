export const load = async ({ cookies }) => {
	const pdfUserIsAware = !!cookies.get('pdfUserIsAware');

	return {
		pdfUserIsAware
	};
};
