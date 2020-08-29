<template>            
        <section class="projects_area p_120" id="proyectos">
            <div class="container">
                <div class="main_title">
					<h2>{{ $t('github.projects') }}</h2>
					<p>{{ $t('github.definition') }}</p>
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
								<h4>{{ $t('github.eurosnovos') }}</h4>
							</div> 
							<a href="https://github.com/toniferr/eurosnovos" target="_blank"> 
								<div class="overlay">
									<div class="text">{{ $t('github.eurosnovosdef') }}</div>
								</div>
							</a>
						</div>
					</div>
					<div class="col-lg-4 col-sm-6 swing">
						<div class="projects_item">
							<img class="img-fluid" src="../assets/img/projects/cryptokit.jpg" alt="">
							<div class="projects_text">
								<h4>{{ $t('github.cryptokit') }}</h4>
							</div>
							<a href="https://github.com/toniferr/cryptoKit" target="_blank">
								<div class="overlay">
									<div class="text">{{ $t('github.cryptokitdef') }}</div>
								</div>
							</a>
						</div>
					</div>
					<div class="col-lg-4 col-sm-6 spring">
						<div class="projects_item">
							<img class="img-fluid" src="../assets/img/projects/setup-makeup.jpg" alt="">
							<div class="projects_text">
								<h4>{{ $t('github.setupmakeup') }}</h4>
							</div>
							<a href="https://github.com/toniferr/setup-makeup" target="_blank">
								<div class="overlay">
									<div class="text">{{ $t('github.setupmakeupdef') }}</div>
								</div>
							</a>
						</div>
					</div>
					<div class="col-lg-4 col-sm-6 struts">
						<div class="projects_item">
							<img class="img-fluid" src="../assets/img/projects/setup-tecnorepo.jpg" alt="">
							<div class="projects_text">
								<h4>{{ $t('github.setuptecnorepo') }}</h4>
							</div>
							<a href="https://github.com/toniferr/setup-tecnorepo" target="_blank">
								<div class="overlay">
									<div class="text">{{ $t('github.setuptecnorepodef') }}</div>
								</div>
							</a>
						</div>
					</div>
					<div class="col-lg-4 col-sm-6 javascript">
						<div class="projects_item">
							<img class="img-fluid" src="../assets/img/projects/express.jpg" alt="">
							<div class="projects_text">
								<h4>{{ $t('github.express') }}</h4>
							</div>
							<a href="https://github.com/toniferr/portalExpress" target="_blank">
								<div class="overlay">
									<div class="text">{{ $t('github.expressdef') }}</div>
								</div>
							</a>
						</div>
					</div>
					<div class="col-lg-4 col-sm-6">
						<div class="projects_item">
							<img class="img-fluid" src="../assets/img/projects/peeperpattern.jpg" alt="">
							<div class="projects_text">
								<h4>{{ $t('github.peeperpattern') }}</h4>
							</div>
							<a href="https://github.com/toniferr/PeeperPattern" target="_blank">
								<div class="overlay">
									<div class="text">{{ $t('github.peeperpatterndef') }}</div>
								</div>
							</a>
						</div>
					</div>
					<div class="col-lg-4 col-sm-6">
						<div class="projects_item">
							<img class="img-fluid" src="../assets/img/projects/peepermaven.jpg" alt="">
							<div class="projects_text">
								<h4>{{ $t('github.peepermaven') }}</h4>
							</div>
							<a href="https://github.com/toniferr/PeeperMaven" target="_blank">
								<div class="overlay">
									<div class="text">{{ $t('github.peepermavendef') }}</div>
								</div>
							</a>
						</div>
					</div>
					<div class="col-lg-4 col-sm-6 javascript">
						<div class="projects_item">
							<img class="img-fluid" src="../assets/img/projects/toniferrgithub.jpg" alt="">
							<div class="projects_text">
								<h4>{{ $t('github.io') }}</h4>
							</div>
							<a href="https://github.com/toniferr/dev.toniferr.github.io" target="_blank">
								<div class="overlay">
									<div class="text">{{ $t('github.iodef') }}</div>
								</div>
							</a>
						</div>
					</div>
					<div class="col-lg-4 col-sm-6">
						<div class="projects_item">
							<img class="img-fluid" src="../assets/img/projects/peeper.jpg" alt="">
							<div class="projects_text">
								<h4>{{ $t('github.peeper') }}</h4>
							</div>
							<a href="https://github.com/toniferr/Peeper" target="_blank">
								<div class="overlay">
									<div class="text">{{ $t('github.peeperdef') }}</div>
								</div>
							</a>
						</div>
					</div>
				</div>
            </div>
        </section>
</template>