<script>
    /** @type {import('./$types').PageData}*/
	export let data;

	import BookList from '$lib/booklist/BookList.svelte';
</script>

<div>
	<h2>おすすめ書籍の詳細情報ページ</h2>
	<p>ISBN:{data.isbn}</p>
	<BookList isbn={data.isbn} pagetype="page" />
</div>
