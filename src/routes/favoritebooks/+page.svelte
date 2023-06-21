<script>
	import BookList from '$lib/booklist/BookList.svelte';
	import { favoriteBooks } from '$lib/store';
	const ISBN = $favoriteBooks;
</script>

<svelte:head>
	<title>Favorite Books</title>
</svelte:head>

<div>
	<h2>おすすめ書籍コーナー</h2>
	<BookList isbn={ISBN} />
</div>
