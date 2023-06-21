<script>
	const myName = 'hoge';
	const description = "It's me!!";
	import Header from '$lib/header/Header.svelte';
	import Footer from '$lib/footer/Footer.svelte';
</script>

<Header />

<div class="profile">
	<div><img src="1.3-FastAPI-Logo.jpg" alt="" /></div>
	<h1>{myName}</h1>
	<div class="description">{description}</div>
	<h2>経歴</h2>
	<ul class="list-disc">
		<li>すごい学校をすごい成績でおさめる</li>
		<li>すごい会社にすごい勢いで入社</li>
		<li>すごいので退社</li>
		<li>現在に至る</li>
	</ul>
</div>

<Footer />
