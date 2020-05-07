<template>
	<div class="content">
		<div class="content__image"><b-img src="img/cat.gif" /></div>
		<div v-for="gejala in gejala_list" v-bind:key="gejala.kd_gejala">{{ gejala }}</div>
		<div v-for="penyakit in penyakit_list" v-bind:key="penyakit.kd_penyakit">{{ penyakit }}</div>
	</div>
</template>
<script>
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
			this.getStore()
		},
		methods: {
			getStore: function()
			{
				this.$store.dispatch('getGejalaList')
				this.$store.dispatch('getPenyakitList')
				
				this.gejala_list = this.$store.getters.gejalaList
				this.penyakit_list = this.$store.getters.penyakitList
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
