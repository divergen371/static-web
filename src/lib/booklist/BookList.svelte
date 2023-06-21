<script>
    export let isbn = "";
    const API = "https://api.openbd.jp/v1/get?isbn="

    const getBooks = async() => {
        let res = await fetch(API + isbn);
        return res.json();
    }
</script>

<div>
	{#await getBooks()}
		<!-- promise is pending -->
		<p>データを取得しています</p>
	{:then books}
		<!-- promise was fulfilled -->
		<p>データを取得しました</p>
		{#each books as book}
			<h3>{book.summary.title}</h3>
			<img src={book.summary.cover} alt="書影" />
			<hr />
		{/each}
	{/await}
</div>
