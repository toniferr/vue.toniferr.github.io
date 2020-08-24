<template>
        <header class="header_area white_menu" id="index">
          <div class="main_menu" id="mainNav">
                <nav class="navbar navbar-expand-lg navbar-light">
                  <div class="container box_1620">
                    <!-- Brand and toggle get grouped for better mobile display -->
                    <a class="navbar-brand logo_h"><b class="titulo-nombre">FERREIRO</b></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                    </button>
                    <!-- Collect the nav links, forms, and other content for toggling -->
                    <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
                      <ul class="nav navbar-nav menu_nav ml-auto">  
                        <li class="nav-item">
                          <language-switcher />
                        </li>                      
                        <li class="nav-item"><a class="nav-link" href="#proyectos">{{ $t('nav.projects') }}</a></li>
                        <li class="nav-item"><a class="nav-link" href="#footer">{{ $t('nav.about') }}</a></li>
                      </ul>
                    </div> 
                  </div>
                </nav>
            </div>
        </header>
</template>

<script>
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'

export default {
  name: 'header',
  components: {
    LanguageSwitcher,
  }
}
</script>