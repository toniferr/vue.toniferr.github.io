<template>            
        <section class="projects_area p_120" id="proyectos">
            <div class="container">
                <div class="main_title">
					<h2>{{ $t('github.projects') }}</h2>
					<p>{{ $t('github.definition1') }} <a href="https://github.com/toniferr" target="_blank">Github</a> {{ $t('github.definition2') }}</p>
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
							<div class="overlay">
								<button type="button" class="btn btn-dark button-git-left"><i class="fab fa-github" aria-hidden="true"></i></button>
								<button type="button" class="btn btn-dark button-open-right"><i class="fa fa-link" aria-hidden="true"></i></button>
								<div class="badges-projects">
									<span class="badge bg-warning text-dark badge-project">spring-boot</span>
									<span class="badge bg-warning text-dark badge-project">spring-security</span>
									<span class="badge bg-warning text-dark badge-project">thymeleaf</span>
									<span class="badge bg-warning text-dark badge-project">maven</span>
									<span class="badge bg-warning text-dark badge-project">spring-data</span>
									<span class="badge bg-warning text-dark badge-project">hibernate</span>
									<span class="badge bg-warning text-dark badge-project">mysql</span>
								</div>							
							</div>
							<!--<a href="https://github.com/toniferr/eurosnovos" target="_blank"> 
								<div class="overlay">
									<button type="button" class="btn btn-light button-github"><i class="fa fa-link" aria-hidden="true"></i></button>
									<button type="button" class="btn btn-light button-link"><i class="fab fa-github" aria-hidden="true"></i></button>
									<div class="text">{{ $t('github.eurosnovosdef') }}</div>
								</div>
							</a>-->
						</div>
					</div>
					<div class="col-lg-4 col-sm-6 swing">
						<div class="projects_item">
							<img class="img-fluid" src="../assets/img/projects/cryptokit.jpg" alt="">
							<div class="projects_text">
								<h4>{{ $t('github.cryptokit') }}</h4>
							</div>
							<div class="overlay">
								<button type="button" class="btn btn-dark button-git-left"><i class="fab fa-github" aria-hidden="true"></i></button>
								<button type="button" class="btn btn-dark button-open-right"><i class="fa fa-download" aria-hidden="true"></i></button>
								<div class="badges-projects">
									<span class="badge bg-warning text-dark badge-project">java-swing</span>
									<span class="badge bg-warning text-dark badge-project">maven</span>
									<span class="badge bg-warning text-dark badge-project">bouncycastle</span>
								</div>
							</div>
							<!--
							<a href="https://github.com/toniferr/cryptoKit" target="_blank">
								<div class="overlay">
									<div class="text">{{ $t('github.cryptokitdef') }}</div>
								</div>
							</a>
							-->
						</div>
					</div>
					<div class="col-lg-4 col-sm-6 spring">
						<div class="projects_item">
							<img class="img-fluid" src="../assets/img/projects/setup-makeup.jpg" alt="">
							<div class="projects_text">
								<h4>{{ $t('github.representados') }}</h4>
							</div>
							<div class="overlay">
								<button type="button" class="btn btn-dark button-git-center"><i class="fa fa-link" aria-hidden="true"></i></button>
								<div class="badges-projects">
									<span class="badge bg-warning text-dark badge-project">spring-boot</span>
									<span class="badge bg-warning text-dark badge-project">spring-security</span>
									<span class="badge bg-warning text-dark badge-project">thymeleaf</span>
									<span class="badge bg-warning text-dark badge-project">maven</span>
									<span class="badge bg-warning text-dark badge-project">spring-data</span>
									<span class="badge bg-warning text-dark badge-project">hibernate</span>
									<span class="badge bg-warning text-dark badge-project">postgree</span>
								</div>								
							</div>
							<!-- <a href="https://github.com/toniferr/setup-makeup" target="_blank">
								<div class="overlay">
									<div class="text">{{ $t('github.setupmakeupdef') }}</div>
								</div>
							</a> -->
						</div>
					</div>
					<div class="col-lg-4 col-sm-6 javascript">
						<div class="projects_item">
							<img class="img-fluid" src="../assets/img/projects/toniferrgithub.jpg" alt="">
							<div class="projects_text">
								<h4>{{ $t('github.io') }}</h4>
							</div>
							<div class="overlay">
								<button type="button" class="btn btn-dark button-git-left"><i class="fab fa-github" aria-hidden="true"></i></button>
								<button type="button" class="btn btn-dark button-open-right"><i class="fa fa-link" aria-hidden="true"></i></button>
								<div class="badges-projects">
									<span class="badge bg-warning text-dark badge-project">vue.js</span>
									<span class="badge bg-warning text-dark badge-project">javascript</span>
									<span class="badge bg-warning text-dark badge-project">html</span>
									<span class="badge bg-warning text-dark badge-project">css</span>
									<span class="badge bg-warning text-dark badge-project">portfolio</span>
								</div>	
							</div>
							<!--<a href="https://github.com/toniferr/dev.toniferr.github.io" target="_blank">
								<div class="overlay">
									<div class="text">{{ $t('github.iodef') }}</div>
								</div>
							</a>-->
						</div>
					</div>
					<div class="col-lg-4 col-sm-6 struts">
						<div class="projects_item">
							<img class="img-fluid" src="../assets/img/projects/setup-tecnorepo.jpg" alt="">
							<div class="projects_text">
								<h4>{{ $t('github.angular') }}</h4>
							</div>
							<div class="overlay">
								<button type="button" class="btn btn-dark button-git-center"><i class="fab fa-github" aria-hidden="true"></i></button>
								<div class="badges-projects">
									<span class="badge bg-warning text-dark badge-project">angular</span>
									<span class="badge bg-warning text-dark badge-project">typescript</span>
									<span class="badge bg-warning text-dark badge-project">javascript</span>
									<span class="badge bg-warning text-dark badge-project">html</span>
									<span class="badge bg-warning text-dark badge-project">css</span>
								</div>							
							</div>
							<!--<a href="https://github.com/toniferr/setup-tecnorepo" target="_blank">
								<div class="overlay">
									<div class="text">{{ $t('github.setuptecnorepodef') }}</div>
								</div>
							</a> -->
						</div>
					</div>
					<div class="col-lg-4 col-sm-6 javascript">
						<div class="projects_item">
							<img class="img-fluid" src="../assets/img/projects/express.jpg" alt="">
							<div class="projects_text">
								<h4>{{ $t('github.express') }}</h4>
							</div>
							<div class="overlay">
								<button type="button" class="btn btn-dark button-git-center"><i class="fab fa-github" aria-hidden="true"></i></button>
								<div class="badges-projects">
									<span class="badge bg-warning text-dark badge-project">nodejs</span>
									<span class="badge bg-warning text-dark badge-project">express</span>
									<span class="badge bg-warning text-dark badge-project">mongoose</span>
									<span class="badge bg-warning text-dark badge-project">mongodb</span>
									<span class="badge bg-warning text-dark badge-project">javascript</span>
								</div>								
							</div>
							<!--<a href="https://github.com/toniferr/portalExpress" target="_blank">
								<div class="overlay">
									<div class="text">{{ $t('github.expressdef') }}</div>
								</div>
							</a> -->
						</div>
					</div>
					<div class="col-lg-4 col-sm-6">
						<div class="projects_item">
							<img class="img-fluid" src="../assets/img/projects/peeperpattern.jpg" alt="">
							<div class="projects_text">
								<h4>{{ $t('github.peeperpattern') }}</h4>
							</div>
							<div class="overlay">
								<button type="button" class="btn btn-dark button-git-center"><i class="fab fa-github" aria-hidden="true"></i></button>
								<div class="badges-projects">
									<span class="badge bg-warning text-dark badge-project">patrones de diseño</span>
									<span class="badge bg-warning text-dark badge-project">java</span>
								</div>							
							</div>
							<!--<a href="https://github.com/toniferr/PeeperPattern" target="_blank">
								<div class="overlay">
									<div class="text">{{ $t('github.peeperpatterndef') }}</div>
								</div>
							</a>-->
						</div>
					</div>
					<div class="col-lg-4 col-sm-6">
						<div class="projects_item">
							<img class="img-fluid" src="../assets/img/projects/peepermaven.jpg" alt="">
							<div class="projects_text">
								<h4>{{ $t('github.peepermaven') }}</h4>
							</div>
							<div class="overlay">
								<button type="button" class="btn btn-dark button-git-center"><i class="fab fa-github" aria-hidden="true"></i></button>
								<div class="badges-projects">
									<span class="badge bg-warning text-dark badge-project">java</span>
									<span class="badge bg-warning text-dark badge-project">maven</span>
								</div>							
							</div>
							<!--<a href="https://github.com/toniferr/PeeperMaven" target="_blank">
								<div class="overlay">
									<div class="text">{{ $t('github.peepermavendef') }}</div>
								</div>
							</a>-->
						</div>
					</div>
					<div class="col-lg-4 col-sm-6">
						<div class="projects_item">
							<img class="img-fluid" src="../assets/img/projects/peeperandroid.png" alt="">
							<div class="projects_text">
								<h4>{{ $t('github.peeperandroid') }}</h4>
							</div>
							<div class="overlay">
								<button type="button" class="btn btn-dark button-git-center"><i class="fab fa-github" aria-hidden="true"></i></button>
								<div class="badges-projects">
									<span class="badge bg-warning text-dark badge-project">java</span>
									<span class="badge bg-warning text-dark badge-project">android-studio</span>
									<span class="badge bg-warning text-dark badge-project">gradle</span>
								</div>							
							</div>
							<!--<a href="https://github.com/toniferr/PeeperAndroid" target="_blank">
								<div class="overlay">
									<div class="text">{{ $t('github.peeperandroiddef') }}</div>
								</div>
							</a>-->
						</div>
					</div>
				</div>
            </div>
        </section>
</template>