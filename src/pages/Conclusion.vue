<template>
	<div class="content">
		<div class="content__info">
			<b-card no-body>
				<b-tabs pills card>
					<b-tab title="Kesimpulan" active>
						<b-card :title="penyakit_list[0].nm_penyakit" :img-src="penyakit_list[0].img_src" img-alt="Image" img-top tag="article" style="max-width: 100%;">
							<b-card-text>{{ solusi_list[0].solusi }}</b-card-text>
						</b-card>
					</b-tab>
					<b-tab title="Diagnosa">
						<b-list-group>
							<b-list-group-item v-for="diagnosa in diagnosa_list" v-bind:key="diagnosa.kd_gejala">{{ diagnosa.nm_gejala }}</b-list-group-item>
						</b-list-group>
					</b-tab>
				</b-tabs>
			</b-card>
		</div>
	</div>
</template>
<script>
	export default {
		name: "Conclusion",
		computed: {
			diagnosa_list: function() {
				return this.$store.getters.gejalaList
			},
			penyakit_list: function() {
				return this.$store.getters.penyakitList
			},
			solusi_list: function() {
				return this.$store.getters.solusiList
			}
		}
	}
</script>
<style lang="scss" scoped>
	.content {
		margin: 60px 0 20px 0;
		&__info {
			padding: 10px 0 10px 0;
		}
	}
</style>
