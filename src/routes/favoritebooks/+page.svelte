<script>
	import BookList from '$lib/booklist/BookList.svelte';
	const ISBN = '4621066080,4274226379';
</script>

<svelte:head>
	<title>Favorite Books</title>
</svelte:head>

<div>
	<h2>おすすめ書籍コーナー</h2>
	<BookList isbn={ISBN} />
</div>
