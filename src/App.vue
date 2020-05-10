<template>
	<div id="app" class="container">
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<header-section />
		<div class="content">
			<home v-if="is_home" />
			<about v-if="is_about" />
			<conclusion v-if="is_conclusion" :diagnose-list="diagnose_list" :kd-penyakit="kd_penyakit" />
			<diagnose />
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
	import Diagnose from './pages/Diagnose';
	
	export default {
		name: 'App',
		components: {
			HeaderSection,
			FooterSection,
			Home,
			About,
			Conclusion,
			Diagnose
		},
		data: function() {
			return {
				is_footer: false,
				is_home: true,
				is_about: false,
				is_conclusion: false,
				
				diagnose_list: [],
				kd_penyakit: ''
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
				this.$root.$on('is_conclusion', (value, data, kd_penyakit) => {
					this.diagnose_list = data
					this.kd_penyakit = kd_penyakit
					this.showDisplay('is_conclusion', value)
				})
			},
			showDisplay: function(data, value) {
				this.is_home = this.is_about = this.is_conclusion = false
				this[data] = value
				this.is_footer = false
			}
		}
	}
</script>
<style>
	p {
		text-align: justify;
		text-justify: inter-word;
	}
</style>
