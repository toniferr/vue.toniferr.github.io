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
								<h4>{{text8}}</h4>
							</div> 
							<a href="https://github.com/toniferr/eurosnovos" target="_blank"> 
								<div class="overlay">
									<div class="text">{{text81}}</div>
								</div>
							</a>
						</div>
					</div>
					<div class="col-lg-4 col-sm-6 swing">
						<div class="projects_item">
							<img class="img-fluid" src="../assets/img/projects/cryptokit.jpg" alt="">
							<div class="projects_text">
								<h4>{{text9}}</h4>
							</div>
							<a href="https://github.com/toniferr/cryptoKit" target="_blank">
								<div class="overlay">
									<div class="text">{{text91}}</div>
								</div>
							</a>
						</div>
					</div>
					<div class="col-lg-4 col-sm-6 spring">
						<div class="projects_item">
							<img class="img-fluid" src="../assets/img/projects/setup-makeup.jpg" alt="">
							<div class="projects_text">
								<h4>{{text10}}</h4>
							</div>
							<a href="https://github.com/toniferr/setup-makeup" target="_blank">
								<div class="overlay">
									<div class="text">{{text101}}</div>
								</div>
							</a>
						</div>
					</div>
					<div class="col-lg-4 col-sm-6 struts">
						<div class="projects_item">
							<img class="img-fluid" src="../assets/img/projects/setup-tecnorepo.png" alt="">
							<div class="projects_text">
								<h4>{{text11}}</h4>
							</div>
							<a href="https://github.com/toniferr/setup-tecnorepo" target="_blank">
								<div class="overlay">
									<div class="text">{{text111}}</div>
								</div>
							</a>
						</div>
					</div>
					<div class="col-lg-4 col-sm-6 javascript">
						<div class="projects_item">
							<img class="img-fluid" src="../assets/img/projects/express.jpg" alt="">
							<div class="projects_text">
								<h4>{{text12}}</h4>
							</div>
							<a href="https://github.com/toniferr/portalExpress" target="_blank">
								<div class="overlay">
									<div class="text">{{text121}}</div>
								</div>
							</a>
						</div>
					</div>
					<div class="col-lg-4 col-sm-6">
						<div class="projects_item">
							<img class="img-fluid" src="../assets/img/projects/peeperjava.png" alt="">
							<div class="projects_text">
								<h4>{{text13}}</h4>
							</div>
							<a href="https://github.com/toniferr/PeeperJava" target="_blank">
								<div class="overlay">
									<div class="text">{{text131}}</div>
								</div>
							</a>
						</div>
					</div>
					<div class="col-lg-4 col-sm-6">
						<div class="projects_item">
							<img class="img-fluid" src="../assets/img/projects/peepermaven.png" alt="">
							<div class="projects_text">
								<h4>{{text14}}</h4>
							</div>
							<a href="https://github.com/toniferr/PeeperMaven" target="_blank">
								<div class="overlay">
									<div class="text">{{text141}}</div>
								</div>
							</a>
						</div>
					</div>
					<div class="col-lg-4 col-sm-6 javascript">
						<div class="projects_item">
							<img class="img-fluid" src="../assets/img/projects/toniferrgithub.jpg" alt="">
							<div class="projects_text">
								<h4>{{text15}}</h4>
							</div>
							<a href="https://github.com/toniferr/dev.toniferr.github.io" target="_blank">
								<div class="overlay">
									<div class="text">{{text151}}</div>
								</div>
							</a>
						</div>
					</div>
					<div class="col-lg-4 col-sm-6">
						<div class="projects_item">
							<img class="img-fluid" src="../assets/img/projects/futbolquiz.jpg" alt="">
							<div class="projects_text">
								<h4>{{text16}}</h4>
							</div>
							<a href="#" target="_blank">
								<div class="overlay">
									<div href="#" target="_blank" class="text">{{text161}}</div>
								</div>
							</a>
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
		text1: 'My personal projects',
		text2: 'These are some of my personal projects in Github. You can also take a look directly to my Github profile where I practice old and new features of programming technologies.',
		text3: 'All categories',
		text4: 'Spring',
		text5: 'Struts',
		text6: 'JavaScript',
		text7: 'Java Swing',
		text8: 'Euros Novos',
		text81: 'Spring Boot application with Thymeleaf templates and Mysql database (Maven project)',
		text9: 'CryptoKit',
		text91: 'Java Development with Swing tecnology for encryption / decryption using different algorithms (Maven project)',
		text10: 'Setup-makeup',
		text101: 'Web application with Spring MVC framework (XML configuration) and Apache Tiles 3 (Maven project)',
		text11: 'Setup-tecnorepo',
		text111: 'Web application with Struts 2 Framework and Hibernate (XML configuration) (Maven project)',
		text12: 'PortalExpress',
		text121: 'Node Application made with Express Framework and Pug engine template',
		text13: 'PeeperJava',
		text131: 'Application multi-module with different java sources version (Gradle project). Focused on the practice of new features of the java language.',
		text14: 'PeeperMaven',
		text141: 'Application multi-module focused on the practice of features of the maven project.',
		text15: 'Github.io',
		text151: 'Desarrollo con framework Vue.js de la web personal publicada en https://toniferr.github.io',
		text16: 'Fut90',
		text161: 'En Construccion'
    }
  }
}
</script>