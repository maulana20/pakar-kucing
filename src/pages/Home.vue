<template>
	<div class="content">
		<div class="content__image"><b-img src="img/cat.gif" /></div>
		<div class="content__info">𝒫𝒶𝓀𝒶𝓇 𝒦𝓊𝒸𝒾𝓃𝑔, 𝒷𝓊𝓀𝒶𝓃 𝓀𝓊𝒸𝒾𝓃𝑔 𝓀𝓊𝒸𝒾𝓃𝑔𝒶𝓃</div>
	</div>
</template>
<script>
	export default {
		name: "Home"
	}
</script>
<style lang="scss" scoped>
	.content {
		margin: 60px 0 20px 0;
		&__image {
			padding: 10px 0 10px 0;
			text-align: center;
		}
		&__info {
			padding: 5px 0 10px 0;
			text-align: center;
			font-size: 20px;
		}
	}
</style>
