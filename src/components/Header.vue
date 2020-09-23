<template>
        <header class="header_area" id="index">
          <div class="main_menu" id="mainNav">
                <nav class="navbar navbar-expand-lg navbar-light">
                  <div class="container">
                    <!-- Brand and toggle get grouped for better mobile display -->
                    <a class="navbar-brand logo_h"><img src="../assets/img/logo.png" alt=""></a>
                    <!--<a class="navbar-brand logo_h"><b class="titulo-nombre">FERREIRO</b></a>  -->
                                    
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                    </button>
                    <!-- Collect the nav links, forms, and other content for toggling -->
                    <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
                      <ul class="nav navbar-nav menu_nav ml-auto">                
                        <!-- <li class="nav-item"><a class="nav-link" href="#proyectos">{{ $t('nav.projects') }}</a></li>
                        <li class="nav-item"><a class="nav-link" href="#footer">{{ $t('nav.about') }}</a></li> -->
                        <li class="nav-item dropdown">
                            <a class="nav-link" id="dropdown09" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <button class="ico_bandera flag_button nav-link btn btn-transparent">
                                <img :src="require(`@/assets/img/languages/flag_${$i18n.locale}.png`)" alt="flag" class="flag_languages w-8 h-8">
                                <span class="ml-2">{{ $i18n.locale.toUpperCase() }}</span>
                                <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path class="heroicon-ui" d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"></path></svg>
                                </button>
                            </a>
                            <div class="flag_windows dropdown-menu" aria-labelledby="dropdown09">
                                <a class="dropdown-item"  @click.prevent="setLocale('gal')" href="#en"> 
                                    <img src="../assets/img/languages/flag_gal.png" alt="galician flag" class=" h-8 w-8">
                                    <span class="ml-2">GAL</span>
                                </a>
                                <a class="dropdown-item"  @click.prevent="setLocale('es')" href="#en"> 
                                    <img src="../assets/img/languages/flag_es.png" alt="espanish flag" class=" h-8 w-8">
                                    <span class="ml-2">ES</span>
                                </a>
                                <a class="dropdown-item"  @click.prevent="setLocale('en')" href="#en"> 
                                    <img src="../assets/img/languages/flag_en.png" alt="english flag" class=" h-8 w-8">
                                    <span class="ml-2">EN</span>
                                </a>
                                <a class="dropdown-item"  @click.prevent="setLocale('pt')" href="#en"> 
                                    <img src="../assets/img/languages/flag_pt.png" alt="portuguese flag" class=" h-8 w-8">
                                    <span class="ml-2">PT</span>
                                </a>
                            </div>
                        </li>
                      </ul>
                    </div> 
                  </div>
                </nav>
            </div>
        </header>
</template>

<script>
export default {
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale
      this.$router.push({
        params: { lang: locale }
      })
      this.hideDropdown()
    }
  }
}
</script>