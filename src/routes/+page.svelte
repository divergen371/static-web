<script>
	import Header from '$lib/header/Header.svelte';
	import Footer from '$lib/footer/Footer.svelte';
</script>

<Header />

<main>
	<div class="hello">Hello World</div>
	<div>
		<h2>明日公開されるべき重大発表</h2>
		<p>なんとここには、明日公開されるべき重大な発表内容が掲載されます</p>
	</div>
</main>
<Footer />

<style lang="scss">
	main {
		.hello {
			font-weight: bold;
		}
	}
</style>
