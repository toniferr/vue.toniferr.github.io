<template>
  <div id="app">
    <Header></Header>
    <Banner></Banner>
    <Projects></Projects>
    <!--<img alt="Vue logo" src="./assets/logo.png"> -->
    <!--<Header msg="Welcome to Your Vue.js App"/> -->
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Banner from './components/Banner.vue'
import Projects from './components/Projects.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Banner,
    Projects,
    Footer
  }
}
</script>

<style>
@import './assets/css/responsive.css';
@import './assets/css/styles.css';
</style>
