<script>
	let title = '楽しいSvelteKit';
</script>

<header>
	<h1>{title}</h1>
	<p>HTMLとCSSとJavascriptでつくるWebの世界</p>
</header>

<main>
	<div class="hello">Hello World</div>
</main>

<footer>
	<p>Created by fukMnk</p>
</footer>

<style lang="scss">
	header {
		h1 {
			font-size: 2em;
		}
	}

	main {
		.hello {
			font-weight: bold;
		}
	}

	footer {
		p {
            @apply text-slate-500 p-2 border border-solid border-slate-300
		}
	}
</style>
