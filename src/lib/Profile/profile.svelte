<script>
	const PERSONAL_HISTORY = [
		{ year: '1986', history: '生まれる' },
		{ year: '2006', history: '大人になる' }
	];
</script>

{#each PERSONAL_HISTORY as items}
	<li>{items.year}:{items.history}</li>
{/each}
