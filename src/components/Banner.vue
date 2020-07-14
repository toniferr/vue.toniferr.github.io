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
            text1: 'Hi there!',
            text2: 'I\'m Antonio Ferreiro',
            text3: 'I\'m a computer engineer and I work as a software developer. As you can guess, Luigi is my favorite character in the world of video games :D'
        }
    }
}
</script>