<template>
	<div class="content">
		<div class="content__info">
			<div class="content__circle">
				<b-img center src="https://avatars1.githubusercontent.com/u/11070656?s=460&v=4" rounded="circle" alt="Maulana Saputra" width="120px"></b-img>
			</div>
			<b-card title="Maulana Saputra" sub-title="Web Developer">
				<b-card-text>Sistem pakar untuk mendiagnosa penyakit kulit kucing di sertai terapi penyembuhan dan cara pengobatannya.</b-card-text>
			</b-card>
		</div>
	</div>
</template>
<script>
	export default {
		name: "About"
	}
</script>
<style lang="scss" scoped>
	.content {
		margin: 60px 0 20px 0;
		&__info {
			padding: 10px 0 10px 0;
		}
		&__circle {
			padding: 10px 0 20px 0;
		}
	}
</style>
