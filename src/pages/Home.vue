<template>
	<div class="content">
		<div class="content__image"><b-img src="img/cat.gif" /></div>
		<div v-for="gejala in gejala_list" v-bind:key="gejala.kd_gejala">{{ gejala }}</div>
		<div v-for="penyakit in penyakit_list" v-bind:key="penyakit.kd_penyakit">{{ penyakit }}</div>
		<b-modal ref="diagnose-modal" hide-footer centered title="DIAGNOSA KE 1/16" hide-header-close no-close-on-backdrop>
			<div class="d-block">Apakah kucing mengalami menggaruk-garuk badan berlebihan ?</div>
			<b-button class="mt-2" variant="outline-danger" @click="$refs['diagnose-modal'].hide()">Close Me</b-button>&nbsp;
			<b-button class="mt-2" variant="outline-warning" @click="$refs['diagnose-modal'].hide()">Toggle Me</b-button>
		</b-modal>
	</div>
</template>
<script>
	export default {
		name: "Home",
		computed: {
			gejala_list: function() {
				return this.$store.getters.gejalaList
			},
			penyakit_list: function() {
				return this.$store.getters.penyakitList
			}
		},
		methods: {
			getStore: function() {
				this.$store.dispatch('getGejalaList')
				this.$store.dispatch('getPenyakitList')
			},
			diagnoseOpen: function() {
				this.$refs['diagnose-modal'].show()
			}
		},
		mounted: function() {
			this.getStore()
		}
	}
</script>
<style lang="scss" scoped>
	.content {
		margin-top: 20px;
		margin-bottom: 20px;
		&__image {
			padding-top: 10px;
			text-align: center;
			padding-bottom: 10px;
		}
	}
</style>
