<script>
	export let isbn = '';
	export let pagetype = 'list';
	import { favoriteBooks } from '$lib/store.js';

	import { fade, scale } from 'svelte/transition';
	const API = 'https://api.openbd.jp/v1/get?isbn=';

	const getBooks = async () => {
		let res = await fetch(API + isbn);
		return res.json();
	};

	const flags = {};
	$favoriteBooks.split(',').forEach((num) => {
		flags[num] = true;
	});

	const imageToggle = (key) => {
		flags[key] = !flags[key];
	};
</script>

<div>
	{#await getBooks()}
		<p>データを取得しています</p>
		{#if 'list' === pagetype}
			{#each $favoriteBooks.split(',') as isbn}
				<a href="/favoritebooks/{isbn}">{isbn} 詳細ページへ</a>
			{/each}
		{/if}
	{:then books}
		<p>データを取得しました</p>
		{#each books as book}
			<h3>{book.summary.title}</h3>
			<button on:click="{() => imageToggle(book.summary.isbn)}">Toggle</button>
			{#if flags[book.summary.isbn]}
				<img src={book.summary.cover} alt="書影" transition:scale />
			{/if}
			<hr />
			{#if 'list' === pagetype}
				<a href="/favoritebooks/{book.summary.isbn}">詳細ページへ</a>
			{:else}
				<div>
					{book.summary.author}
				</div>
				<hr />
				{#each book.onix.CollateralDetail.TextContent as content}
					{#if '00' === content.ContentAudience}
						<div transition:fade>
							{content.Text}
						</div>
						<hr />
					{/if}
				{/each}
			{/if}
		{/each}
	{/await}
</div>
