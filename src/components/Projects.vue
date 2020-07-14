<template>            
        <section class="projects_area p_120" id="proyectos">
            <div class="container">
                <div class="main_title">
					<h2>{{text1}}</h2>
					<p>{{text2}}</p>
				</div>
                <!--<div class="projects_fillter">
					<ul class="filter list">
						<li class="active" data-filter="*"><a href="#">{{text3}}</a></li>
						<li data-filter=".spring"><a href="#">{{text4}}</a></li>
						<li data-filter=".struts"><a href="#">{{text5}}</a></li>
						<li data-filter=".javascript"><a href="#">{{text6}}</a></li>
						<li data-filter=".swing"><a href="#">{{text7}}</a></li>
					</ul>
				</div> -->
				<div class="projects_inner row">
					<div class="col-lg-4 col-sm-6 spring">
						<div class="projects_item">
							<img class="img-fluid" src="../assets/img/projects/eurosnovos.jpg" alt="">
							<div class="projects_text">
								<a href="https://github.com/toniferr/eurosnovos" target="_blank"><h4>{{text8}}</h4></a>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-sm-6 swing">
						<div class="projects_item">
							<img class="img-fluid" src="../assets/img/projects/cryptokit.jpg" alt="">
							<div class="projects_text">
								<a href="https://github.com/toniferr/cryptoKit" target="_blank"><h4>{{text9}}</h4></a>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-sm-6 spring">
						<div class="projects_item">
							<img class="img-fluid" src="../assets/img/projects/setup-makeup.jpg" alt="">
							<div class="projects_text">
								<a href="https://github.com/toniferr/setup-makeup" target="_blank"><h4>{{text10}}</h4></a>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-sm-6 struts">
						<div class="projects_item">
							<img class="img-fluid" src="../assets/img/projects/setup-tecnorepo.png" alt="">
							<div class="projects_text">
								<a href="https://github.com/toniferr/setup-tecnorepo" target="_blank"><h4>{{text11}}</h4></a>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-sm-6 javascript">
						<div class="projects_item">
							<img class="img-fluid" src="../assets/img/projects/express.jpg" alt="">
							<div class="projects_text">
								<a href="https://github.com/toniferr/portalExpress" target="_blank"><h4>{{text12}}</h4></a>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-sm-6">
						<div class="projects_item">
							<img class="img-fluid" src="../assets/img/projects/peeperjava.png" alt="">
							<div class="projects_text">
								<a href="https://github.com/toniferr/PeeperJava" target="_blank"><h4>{{text13}}</h4></a>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-sm-6">
						<div class="projects_item">
							<img class="img-fluid" src="../assets/img/projects/peepermaven.png" alt="">
							<div class="projects_text">
								<a href="https://github.com/toniferr/PeeperMaven" target="_blank"><h4>{{text14}}</h4></a>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-sm-6 javascript">
						<div class="projects_item">
							<img class="img-fluid" src="../assets/img/projects/toniferrgithub.jpg" alt="">
							<div class="projects_text">
								<a href="https://github.com/toniferr/dev.toniferr.github.io" target="_blank"><h4>{{text15}}</h4></a>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-sm-6">
						<div class="projects_item">
							<img class="img-fluid" src="../assets/img/projects/futbolquiz.jpg" alt="">
							<div class="projects_text">
								<a href="#" target="_blank"><h4>{{text16}}</h4></a>
							</div>
						</div>
					</div>
				</div>
            </div>
        </section>
</template>

<script>

export default {
  data() {
    return {
		text1: 'My projects',
		text2: 'These are some of my personal projects',
		text3: 'All categories',
		text4: 'Spring',
		text5: 'Struts',
		text6: 'JavaScript',
		text7: 'Java Swing',
		text8: 'Euros Novos',
		text9: 'CryptoKit',
		text10: 'Setup-makeup',
		text11: 'Setup-tecnorepo',
		text12: 'PortalExpress',
		text13: 'PeeperJava',
		text14: 'PeeperMaven',
		text15: 'Github.io',
		text16: 'Fut90'
    }
  }
}
</script>