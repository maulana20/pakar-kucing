<template>
	<div id="app" class="container">
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<header-section />
		<b-container>
			<home v-if="is_home" />
			<tentang v-if="is_tentang" />
			<b-modal ref="diagnose-modal" hide-footer centered title="DIAGNOSA KE 1/16" hide-header-close no-close-on-backdrop>
				<div class="d-block">Apakah kucing mengalami menggaruk-garuk badan berlebihan ?</div>
				<b-button class="mt-2" variant="outline-danger" @click="$refs['diagnose-modal'].hide()">Close Me</b-button>&nbsp;
				<b-button class="mt-2" variant="outline-warning" @click="$refs['diagnose-modal'].hide()">Toggle Me</b-button>
			</b-modal>
		</b-container>
		<footer-section v-if="is_footer" />
	</div>
</template>
<script>
	import HeaderSection from './components/HeaderSection';
	import FooterSection from './components/FooterSection';
	import Home from './pages/Home';
	import Tentang from './pages/Tentang';
	
	export default {
		name: 'App',
		components: {
			HeaderSection,
			FooterSection,
			Home,
			Tentang
		},
		data: function() {
			return {
				is_footer: false,
				is_home: true,
				is_tentang: false
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
			},
			setDisplay: function() {
				this.$root.$on('is_footer', (value) => {
					this.is_footer = value
				})
				this.$root.$on('is_home', (value) => {
					this.showDisplay('is_home', value)
				})
				this.$root.$on('is_tentang', (value) => {
					this.showDisplay('is_tentang', value)
				})
			},
			showDisplay: function(data, value) {
				this.is_home = this.is_tentang = false
				this[data] = value
			},
			diagnoseOpen: function() {
				this.$refs['diagnose-modal'].show()
				this.is_footer = false
			}
		}
	}
</script>
