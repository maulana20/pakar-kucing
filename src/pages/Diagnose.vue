<template>
	<b-modal ref="diagnose-modal" hide-footer centered :title="diagnose.position" hide-header-close no-close-on-backdrop>
		<div class="d-block">{{ diagnose.question }}</div>
		<b-button size="sm" class="float-right" @click="diagnoseNext(diagnose.data, 'NO', index)">TIDAK</b-button>
		<b-button size="sm" class="float-right" variant="success" @click="diagnoseNext(diagnose.data, 'YES', index)" style="margin-right:6px;">YA</b-button>&nbsp;
	</b-modal>
</template>
<script>
	export default {
		name: 'Diagnose',
		data: function() {
			return {
				index: 0,
				count: 0,
				diagnose_list: [],
				diagnose: {
					position: '',
					question: '',
					data: {}
				},
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
				this.diagnose_list = []
			},
			diagnoseOpen: function(index) {
				var gejala_list = this.$store.getters.gejalaList
				
				this.count = gejala_list.length
				this.index = index + 1
				
				this.diagnose = {
					position: 'DIAGNOSA KE ' + this.index + '/' + this.count,
					question: gejala_list[index].nm_gejala + ' ?',
					data: gejala_list[index]
				}
				
				this.$refs['diagnose-modal'].show()
				this.$root.$emit('is_footer', true)
			},
			diagnoseNext: function(data, option, index) {
				if (this.is_last == true) {
					if (option == 'YES') this.diagnose_list.push(data)
					
					this.$refs['diagnose-modal'].hide()
					this.$root.$emit('is_conclusion', true)
					console.log(this.diagnose_list)
					
					this.initData()
				} else {
					if (option == 'YES') this.diagnose_list.push(data)
					
					this.diagnoseOpen(index)
					if (this.index == this.count) this.is_last = true
				}
			}
		}
	}
</script>
