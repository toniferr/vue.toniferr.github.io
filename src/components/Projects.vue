<template>            
        <section class="projects_area p_120">
            <div class="container">
                <div class="main_title">
					<h2>{{text1}}</h2>
					<p>{{text2}}</p>
				</div>
                <div class="projects_fillter">
					<ul class="filter list">
						<li class="active" data-filter="*"><a href="#">{{text3}}</a></li>
						<li data-filter=".brand"><a href="#">{{text4}}</a></li>
						<li data-filter=".web"><a href="#">{{text5}}</a></li>
						<li data-filter=".work"><a href="#">{{text6}}</a></li>
						<li data-filter=".web"><a href="#">{{text7}}</a></li>
					</ul>
				</div>
				<div class="projects_inner row">
					<div class="col-lg-4 col-sm-6 brand web">
						<div class="projects_item">
							<img class="img-fluid" src="../assets/img/projects/eurosnovos.jpg" alt="">
							<div class="projects_text">
								<a href="#"><h4>{{text8}}</h4></a>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-sm-6 brand work">
						<div class="projects_item">
							<img class="img-fluid" src="../assets/img/projects/cryptokit.jpg" alt="">
							<div class="projects_text">
								<a href="#"><h4>{{text9}}</h4></a>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-sm-6 work">
						<div class="projects_item">
							<img class="img-fluid" src="../assets/img/projects/setup-makeup.jpg" alt="">
							<div class="projects_text">
								<a href="#"><h4>{{text10}}</h4></a>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-sm-6 brand web">
						<div class="projects_item">
							<img class="img-fluid" src="../assets/img/projects/setup-tecnorepo.png" alt="">
							<div class="projects_text">
								<a href="#"><h4>{{text11}}</h4></a>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-sm-6 brand work">
						<div class="projects_item">
							<img class="img-fluid" src="../assets/img/projects/express.jpg" alt="">
							<div class="projects_text">
								<a href="#"><h4>{{text12}}</h4></a>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-sm-6 brand work web">
						<div class="projects_item">
							<img class="img-fluid" src="../assets/img/projects/peeperjava.png" alt="">
							<div class="projects_text">
								<a href="#"><h4>{{text13}}</h4></a>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-sm-6 brand work web">
						<div class="projects_item">
							<img class="img-fluid" src="../assets/img/projects/peepermaven.png" alt="">
							<div class="projects_text">
								<a href="#"><h4>{{text14}}</h4></a>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-sm-6 brand work web">
						<div class="projects_item">
							<img class="img-fluid" src="../assets/img/projects/toniferrgithub.jpg" alt="">
							<div class="projects_text">
								<a href="#"><h4>{{text15}}</h4></a>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-sm-6 brand work web">
						<div class="projects_item">
							<img class="img-fluid" src="../assets/img/projects/futbolquiz.jpg" alt="">
							<div class="projects_text">
								<a href="#"><h4>{{text16}}</h4></a>
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
		text1: 'Mis proyectos',
		text2: 'Estos son algunos de mis proyectos personales',
		text3: 'Todas las categorias',
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