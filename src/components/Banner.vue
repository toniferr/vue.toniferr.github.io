<template>
        <section class="home_banner_area">
            <div class="banner_inner">
				<div class="container">
					<div class="row">
						<div class="col-lg-6">
							<div class="home_left_img">
								<img src="../assets/img/banner/luigi.png" alt="">
							</div>
						</div>
						<div class="col-lg-6">
							<div class="banner_content">
								<h5>{{text1}}</h5>
								<h2>{{text2}}</h2>
								<p>{{text3}}</p>
							</div>
						</div>
					</div>
				</div>
            </div>
        </section>
</template>

<script>
export default {
    name: 'Banner',
    data() {
        return {
            text1: 'Este soy yo',
            text2: 'Antonio Ferreiro',
            text3: 'Bueno, en realidad no. Este es mi personaje favorito del mundo de los videojuegos: Luigi!'
        }
    }
}
</script>