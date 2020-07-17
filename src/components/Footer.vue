<template>
        <footer class="footer_area p_120" id="footer">
            <div class="container">
                <div class="row footer_inner">
                    <div class="col-lg-5 col-sm-6">
                        <aside class="f_widget ab_widget">
                            <div class="f_title">
                                <h3>{{text1}}</h3>
                            </div>
                            <p>{{text2}}</p>
                            <p>{{text3}}</p>
                    </aside>
                    </div>
                    <div class="col-lg-5 col-sm-6">
                    </div>
                    <div class="col-lg-2">
                        <aside class="f_widget social_widget">
                            <div class="f_title">
                                <h3>{{text4}}</h3>
                            </div>
                            <ul class="list">
                                <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fab fa-facebook"></i></a></li>
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
            text2: 'Galician from Galicia (ancient Roman province, later kingdom and now part of Spain). My hobby: seeing the stars and planets.',
            text3: 'Copyright © 2020 All rights reserved',
            text4: 'Follow me!'
        }
    }
}
</script>