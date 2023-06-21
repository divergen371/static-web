<script>
	let title = '楽しいSvelteKit';
	import { page } from '$app/stores';
	import { assets } from '$app/paths';
	const NAV_MENU = [
		{ href: '/', title: 'Home' },
		{ href: '/prof/', title: 'Profile' },
		{ href: '/faq/', title: 'FAQ' }
	];
</script>

<header>
	<img src="{assets}/favicon.png" alt="The Logo of the my website" />
	{#if '/' === $page.url.pathname}
		<h1 class="toppage-title">{title}</h1>
	{:else}
		<h1>{title}</h1>
	{/if}
	<p>HTMLとCSSとJavascriptでつくるWebの世界</p>
	<nav class="menu">
		<ul>
			{#each NAV_MENU as menu_item}
				<li>
					{#if $page.url.pathname === menu_item.href}
						<strong>{menu_item.title}</strong>
					{:else}
						<a href={menu_item.href}>{menu_item.title}</a>
					{/if}
				</li>
			{/each}
		</ul>
	</nav>
</header>

<style lang="scss">
	header {
		h1 {
			font-size: 2em;

			&.toppage-title {
				font-size: 4em;
			}
		}
	}
</style>
