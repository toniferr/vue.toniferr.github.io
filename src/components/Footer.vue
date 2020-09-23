<template>
        <footer class="footer_area" id="footer">
            <div class="container">
                <div class="row footer_inner">
                    <div class="col-lg-3 col-sm-12 footer-m">
                        <aside class="f_widget social_widget">
                            <img class="foto-footer" src="../assets/img/footer/toni.jpg" alt="">
                        </aside>
                    </div>
                    <div class="col-lg-6 col-sm-12 footer-m">
                        <aside class="f_widget ab_widget">
                            <div class="f_title">
                                <h3>{{ $t('footer.about') }}</h3>
                            </div>
                            <p>{{ $t('footer.aboutprofesional') }}</p>
                    </aside>
                    </div>
                    <div class="col-lg-3 col-sm-12 footer-m">
                        <aside class="f_widget social_widget">
                            <div class="f_title">
                                <h3>{{ $t('footer.contact') }}</h3>
                            </div>
                            <ul class="list">
                                <li><a href="https://www.github.com/toniferr" target="_blank"><i class="fab fa-github"></i></a></li>
                                <li><a href="https://es.linkedin.com/in/antonio-ferreiro-couto" target="_blank"><i class="fab fa-linkedin"></i></a></li>
                                <li><a href="mailto:ferreirocouto@gmail.com" target="_blank"><i class="far fa-envelope"></i></a></li>
                                <li><a href="https://www.twitter.com/toni_ferr" target="_blank"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="https://www.instagram.com/toni_ferreiro" target="_blank"><i class="fab fa-instagram"></i></a></li>
                            </ul>
                        </aside>
                    </div>
                </div>
                <div class="row footer_inner">
                    <div class="col-lg-4 col-sm-12 footer-m">
                        <aside class="f_widget social_widget">
                        </aside>
                    </div>
                    <div class="col-lg-4 col-sm-12 footer-m">
                        <aside class="f_widget social_widget">
                            <p>{{ $t('footer.aboutweb') }} <a href="https://es.vuejs.org/">Vue.js</a></p>
                        </aside>
                    </div>
                    <div class="col-lg-4 col-sm-12 footer-m">
                        <aside class="f_widget social_widget">
                        </aside>
                    </div>
                </div>
            </div>
        </footer>
</template>