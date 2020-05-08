<template>
	<footer class="footer">
		<div class="footer__sticky">
			<div class="footer__menu">
				<div class="footer__action"><span @click="$parent.$children[1].diagnoseOpen()"><b-img-lazy src="img/cat_diagnosa.png" alt="diagnosa" height="90px"/></span></div>
				<div class="footer__action"><b-img-lazy src="img/cat_tentang.png" alt="tentang" height="90px" /></div>
				<div class="footer__action"><span @click="$root.$emit('is_footer', false)"><b-img-lazy src="img/cat_keluar.png" alt="keluar" height="90px" /></span></div>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	name: 'Footer-Section'
}
</script>
<style lang="scss" scoped>
	.footer {
		&__sticky {
			position: fixed;
			left: 0;
			bottom: 0;
			width: 100%;
			background-color: #ffffff;
			text-align: center;
			height: 120px;
		}
		&__menu {
			display: flex;  
		}
		&__action {
			width: 500px;
			margin: 10px;
			flex-wrap: wrap;
		}
	}
</style>
