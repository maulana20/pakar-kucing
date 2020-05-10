<template>
	<div class="content">
		<div class="content__info">
			<div class="content__circle">
				<b-img center src="https://avatars1.githubusercontent.com/u/11070656?s=460&v=4" rounded="circle" alt="Maulana Saputra" width="120px"></b-img>
			</div>
			<b-card title="Maulana Saputra" sub-title="Web Developer">
				<b-card-text>
					<p>Sistem pakar untuk mendiagnosa penyakit kulit kucing di sertai terapi penyembuhan dan cara pengobatannya.</p>
					<p>Sistem pakar ini merupakan skripsi saya yang di buat di tahun 2017 dengan kode <a href="https://ejournal.nusamandiri.ac.id/index.php/pilar/article/view/81/68" target="_blank">E-ISSN: 2527-6514</a> yang belum sempat di publish, kini saya buat ulang dengan Vue agar mudah di deploy kembali.</p>
					<p>Di dalam sistem pakar ini beberapa penyakit kulit yang sering di alami kucing diantaranya : dermatophytosis, scabies, pyoderma, infestasi kutu, dan felice acne. Gejala yang terjadi sudah di tentukan dari penyakit tersebut, diagnosa dilakukan dengan beberapa gejala yang mendekati dengan penyakit yang ada.</p>
					<p>Sekian untuk informasi mengenai sistem pakar ini semoga bermanfaat :D</p>
				</b-card-text>
			</b-card>
		</div>
	</div>
</template>
<script>
	export default {
		name: "About"
	}
</script>
<style lang="scss" scoped>
	.content {
		margin: 60px 0 20px 0;
		&__info {
			padding: 10px 0 10px 0;
		}
		&__circle {
			padding: 10px 0 20px 0;
		}
	}
	p {
		text-align: justify;
		text-justify: inter-word;
	}
</style>
