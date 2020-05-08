<template>
	<div id="app" class="container">
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<header-section />
		<div class="content">
			<home v-if="is_home" />
			<about v-if="is_about" />
			<conclusion v-if="is_conclusion" />
			<b-modal ref="diagnose-modal" hide-footer centered title="DIAGNOSA KE 1/16" hide-header-close no-close-on-backdrop>
				<div class="d-block">Apakah kucing mengalami menggaruk-garuk badan berlebihan ?</div>
				<b-button class="mt-2" variant="outline-danger" @click="diagnoseClose()">Close Me</b-button>&nbsp;
				<b-button class="mt-2" variant="outline-warning" @click="diagnoseClose()">Toggle Me</b-button>
			</b-modal>
		</div>
		<footer-section v-if="is_footer" />
	</div>
</template>
<script>
	import HeaderSection from './components/HeaderSection';
	import FooterSection from './components/FooterSection';
	import Home from './pages/Home';
	import About from './pages/About';
	import Conclusion from './pages/Conclusion';
	
	export default {
		name: 'App',
		components: {
			HeaderSection,
			FooterSection,
			Home,
			About,
			Conclusion
		},
		data: function() {
			return {
				is_footer: false,
				is_home: true,
				is_about: false,
				is_conclusion: false,
			}
		},
		mounted: function() {
			this.getStore(),
			this.setDisplay()
		},
		methods: {
			getStore: function() {
				this.$store.dispatch('getGejalaList')
				this.$store.dispatch('getPenyakitList')
				this.$store.dispatch('getSolusiList')
			},
			setDisplay: function() {
				this.$root.$on('is_footer', (value) => {
					this.is_footer = value
				})
				this.$root.$on('is_home', (value) => {
					this.showDisplay('is_home', value)
				})
				this.$root.$on('is_about', (value) => {
					this.showDisplay('is_about', value)
				})
			},
			showDisplay: function(data, value) {
				this.is_home = this.is_about = this.is_conclusion = false
				this[data] = value
			},
			diagnoseOpen: function() {
				this.$refs['diagnose-modal'].show()
				this.is_footer = false
			},
			diagnoseClose: function() {
				this.$refs['diagnose-modal'].hide()
				this.showDisplay('is_conclusion',true)
			}
		}
	}
</script>
