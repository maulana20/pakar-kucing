<template>
	<div class="content">
		<div class="content__image"><b-img src="img/cat.gif" /></div>
		test
	</div>
</template>
<script>
	import { MediaPakar } from '../service/media-pakar'
	
	const mediaPakar = new MediaPakar();
	
	export default {
		name: "Home",
		data: function()
		{
			return {
				gejala_list: [],
				penyakit_list: []
			}
		},
		mounted: function()
		{
			this.getGejala()
			this.getPenyakit()
		},
		methods: {
			getGejala: function()
			{
				mediaPakar.getGejala().then(response => this.gejala_list = response.items)
			},
			getPenyakit: function()
			{
				mediaPakar.getPenyakit().then(response => this.penyakit_list = response.items)
			}
		}
	}
</script>
<style lang="scss" scoped>
	.content {
		margin-top: 70px;
		&__image {
			padding-top: 10px;
			text-align: center;
			padding-bottom: 10px;
		}
	}
</style>
