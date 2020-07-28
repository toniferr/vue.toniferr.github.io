<template>
        <footer class="footer_area p_120" id="footer">
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
                                <h3>{{text1}}</h3>
                            </div>
                            <p>{{text2}}</p>
                            <p>{{text3}}</p>
                    </aside>
                    </div>
                    <div class="col-lg-3 col-sm-12 footer-m">
                        <aside class="f_widget social_widget">
                            <div class="f_title">
                                <h3>{{text4}}</h3>
                            </div>
                            <ul class="list">
                                <li><a href="https://www.github.com/toniferr" target="_blank"><i class="fab fa-github"></i></a></li>
                                <li><a href="https://es.linkedin.com/in/antonio-ferreiro-couto" target="_blank"><i class="fab fa-linkedin"></i></a></li>
                                <li><a href="mailto:ferreirocouto@gmail.com" target="_blank"><i class="far fa-envelope"></i></a></li>
                                <li><a href="https://www.instagram.com/toni_ferreiro" target="_blank"><i class="fab fa-instagram"></i></a></li>
                                <li><a href="https://twitter.com/toni_ferr" target="_blank"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="https://www.facebook.com/toni.deutsch.3" target="_blank"><i class="fab fa-facebook"></i></a></li>
                            </ul>
                        </aside>
                    </div>
                </div>
            </div>
        </footer>
</template>

<script>
export default {
    name: 'Banner',
    data() {
        return {
            text1: 'About me',
            text2: 'I\'m Galician and I live in Galicia (ancient Roman province, later kingdom and now part of Spain). I studied computer engineering at the University of Vigo (2012-2016) and since then I have been working as a software developer.',
            text3: 'My hobbies are reading history books, seeing the stars and planets, cycling, and celebrating Real Madrid victories.',
            text4: 'Contact'
        }
    }
}
</script>