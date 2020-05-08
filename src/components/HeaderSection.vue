<template>
	<header class="header">
		<div class="header__sticky">
			<div class="header__left"><div class="h2 mb-0"><span @click="showFooter()"><b-icon-list /></span></div></div>
			<div class="header__center"><b-img src="img/pakar_kucing.png" height="35px" /></div>
			<div class="header__right"><div class="h2 mb-0"><b-icon-house-fill /></div></div>
		</div>
	</header>
</template>

<script>
export default {
	name: 'Header-Section',
	data: function() {
		return {
			is_footer: true
		}
	},
	methods: {
		showFooter: function() {
			this.$root.$emit('is_footer', this.is_footer)
			this.is_footer = this.is_footer == true ? false : true
		}
	}
}
</script>
<style lang="scss" scoped>
	.header {
		color: #fff;
		&__sticky {
			position: fixed;
			top: 0; right: 0; left: 0;
			z-index: 10;
			display: table;
			margin: 0;
			height: 60px;
			background: #795548;
			width: 100%;
		}
		&__left {
			padding-left: 20px;
			display: table-cell;
			vertical-align: middle;
			text-align: left;
		}
		&__center {
			display: table-cell;
			vertical-align: middle;
			text-align: center;
		}
		&__right {
			padding-right: 15px;
			display: table-cell;
			vertical-align: middle;
			text-align: right;
		}
	}
</style>
