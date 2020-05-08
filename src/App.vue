<template>
	<div id="app" class="container">
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<header-section />
		<b-container>
			<home />
		</b-container>
		<footer-section v-if="is_footer" />
	</div>
</template>
<script>
	import HeaderSection from './components/HeaderSection';
	import FooterSection from './components/FooterSection';
	import Home from './pages/Home';
	
	export default {
		name: 'App',
		components: {
			HeaderSection,
			Home,
			FooterSection
		},
		data: function() {
			return {
				is_footer: false
			}
		},
		mounted: function() {
			this.$root.$on('is_footer', (value) => {
				this.is_footer = value
			})
		}
	}
</script>
