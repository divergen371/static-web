import { error } from '@sveltejs/kit';
import { favoriteBooks } from '$lib/store.js';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	let isbn = '';
	favoriteBooks.subscribe((val) => {
		isbn = val;
	});

	if (isbn.includes(params.slug)) {
		return { isbn: params.slug };
	}
	throw error(404, 'Not found');
}
