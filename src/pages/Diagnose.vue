<template>
	<b-modal ref="diagnose-modal" hide-footer centered :title="position" hide-header-close no-close-on-backdrop>
		<div class="d-block">{{ question }}</div>
		<b-button size="sm" class="float-right" @click="is_last ? diagnoseClose() : diagnoseOpen(index)">TIDAK</b-button>
		<b-button size="sm" class="float-right" variant="success" @click="is_last ? diagnoseClose() : diagnoseOpen(index)" style="margin-right:6px;">YA</b-button>&nbsp;
	</b-modal>
</template>
<script>
	export default {
		name: 'Diagnose',
		data: function() {
			return {
				index: 0,
				position: '',
				question: '',
				is_last: false
			}
		},
		mounted: function() {
			this.$root.$on('show-diagnose', () => {
				this.diagnoseOpen(this.index)
				return
			})
		},
		methods: {
			initData: function() {
				this.index = 0
				this.is_last = false
			},
			diagnoseOpen: function(index) {
				var gejala_list = this.$store.getters.gejalaList
				this.index = index + 1
				
				this.position = 'DIAGNOSA KE ' + this.index + '/' + gejala_list.length
				this.question = gejala_list[index].nm_gejala
				this.$refs['diagnose-modal'].show()
				this.$root.$emit('is_footer', true)
				
				if (this.index == gejala_list.length) this.is_last = true
			},
			diagnoseClose: function() {
				this.initData()
				
				this.$refs['diagnose-modal'].hide()
				this.$root.$emit('is_conclusion', true)
			}
		}
	}
</script>
