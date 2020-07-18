<template>
        <section class="home_banner_area">
            <div class="banner_inner">
				<div class="container">
					<div class="row">
						<div class="col-lg-6">
							<div class="banner_content home_left_img">
								<h5>{{text1}}</h5>
								<h2>{{text2}}</h2>
								<div class="row">
								<h2><a class="social-web-banner-m" href="https://www.github.com/toniferr" target="_blank"><i class="fab fa-github social-web-banner"></i></a></h2>
                                <h2><a class="social-web-banner-m" href="https://es.linkedin.com/in/antonio-ferreiro-couto" target="_blank"><i class="fab fa-linkedin social-web-banner"></i></a></h2>
								</div>
							</div>
						</div>
						<div class="col-lg-6">
							<div>
							</div>
						</div>¡
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
            text1: 'Hi there! I\'m',
            text2: 'Toni Ferreiro',
            text3: 'I\'m a computer engineer and I work as a software developer.'
        }
    }
}
</script>