<template>
        <section class="home_banner_area">
            <div class="banner_inner">
				<div class="container">
					<div class="row">
						<div class="col-lg-6">
							<div class="banner_content home_left_img">
								<h5>{{text1}}</h5>
								<h2>{{text2}}</h2>
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