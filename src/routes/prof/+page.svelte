<script>
	import Profile from '$lib/Profile/profile.svelte';
    const myName = 'hoge';
	const description = "It's me!!"
</script>

<svelte:head>
	<title>自己紹介じゃ</title>
</svelte:head>

<div class="profile">
	<div><img src="IMG_6060.PNG" alt="" /></div>
	<h1>{myName}</h1>
	<div class="description">{description}</div>
	<h2>経歴</h2>
	<ul class="list-disc">
		<Profile />
	</ul>
</div>
