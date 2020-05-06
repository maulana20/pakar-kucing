<template>
	<div id="app" class="container">
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<header-section />
		<home />
		<footer-section />
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
		}
	}
</script>
