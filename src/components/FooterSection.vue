<template>
	<footer class="footer">
		<div class="footer__sticky">
			<div class="footer__menu">
				<div class="footer__action"><span @click="showModal"><b-img-lazy src="img/cat_diagnosa.png" alt="diagnosa" height="90px"/></span></div>
				<div class="footer__action"><b-img-lazy src="img/cat_tentang.png" alt="tentang" height="90px" /></div>
				<div class="footer__action"><b-img-lazy src="img/cat_keluar.png" alt="keluar" height="90px" /></div>
			</div>
			<b-modal ref="my-modal" hide-footer centered title="DIAGNOSA KE 1/16" hide-header-close no-close-on-backdrop>
				<div class="d-block">Apakah kucing mengalami menggaruk-garuk badan berlebihan ?</div>
				<b-button class="mt-2" variant="outline-danger" @click="hideModal">Close Me</b-button>&nbsp;
				<b-button class="mt-2" variant="outline-warning" @click="toggleModal">Toggle Me</b-button>
			</b-modal>
		</div>
	</footer>
</template>

<script>
export default {
	name: 'Footer-Section',
	methods: {
		showModal: function()
		{
			this.$refs['my-modal'].show()
		},
		hideModal: function()
		{
			this.$refs['my-modal'].hide()
		}
	}
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
