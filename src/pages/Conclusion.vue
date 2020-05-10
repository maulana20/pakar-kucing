<template>
	<div class="content">
		<div class="content__info">
			<div v-if="show_solusi">
				<b-card no-body>
					<b-tabs pills card>
						<b-tab title="Kesimpulan" active>
							<b-card :title="solusi_data.nm_penyakit" :img-src="solusi_data.img_src" img-alt="Kesimpulan" img-top tag="article" style="max-width: 100%;">
								<b-card-text>{{ solusi_data.solusi }}</b-card-text>
							</b-card>
						</b-tab>
						<b-tab title="Diagnosa">
							<b-list-group>
								<b-list-group-item v-for="diagnosa in diagnoseList" v-bind:key="diagnosa.kd_gejala">{{ diagnosa.nm_gejala }}</b-list-group-item>
							</b-list-group>
						</b-tab>
					</b-tabs>
				</b-card>
			</div>
			<div style="text-align: center;" v-else>
				<b-spinner style="width: 3rem; height: 3rem;" class="m-5" label="Busy"></b-spinner>
				<div>Sedang memuat ...</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: "Conclusion",
		props: ['diagnoseList', 'kdPenyakit'],
		data: function() {
			return {
				show_solusi: false
			}
		},
		mounted: function() {
			this.showDiagnose('mounted')
		},
		watch: {
			'kdPenyakit': function() { this.showDiagnose('watch') }
		},
		computed: {
			solusi_data: function() {
				var solusi_list = this.$store.getters.solusiList
				
				return solusi_list.find(data => data.kd_penyakit === this.kdPenyakit)
			}
		},
		methods: {
			showDiagnose: function(from) {
				console.log('show-diagnose from ' + from)
				this.show_solusi = false
				setInterval(() => { this.show_solusi = true }, 3000)
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
