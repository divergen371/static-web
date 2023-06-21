<script>
	let title = '楽しいSvelteKit';
	import { assets } from '$app/paths';
</script>

<header>
	<img src="{assets}/favicon.png" alt="The Logo of the my website" />
	<h1>{title}</h1>
	<p>HTMLとCSSとJavascriptでつくるWebの世界</p>
	<nav class="menu">
		<ul>
			<li><a href="/">Home</a></li>
			<li><a href="/prof">Profile</a></li>
			<li><a href="/faq">FAQ</a></li>
		</ul>
	</nav>
</header>

<style lang="scss">
	header {
		h1 {
			font-size: 4em;
		}
	}
</style>
