<template>
  <div id="app" class="all-window">
    <div><Header></Header></div>
    <div>
      <div id="reel"><Reel></Reel></div>
      <div>
        <div id="quienes-somos" class="row section"><QuienesSomos></QuienesSomos></div>
        <div id="portfolio" class="row section"><Portfolio></Portfolio></div>
        <div id="contacto" class="row section"><Contacto></Contacto></div>
      </div>
    </div>
    <div><Footer></Footer></div>
  </div>
</template>

<script>

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Portfolio from './components/Portfolio.vue'
import Reel from './components/Reel.vue'
import QuienesSomos from './components/QuienesSomos.vue'
import Contacto from './components/Contacto.vue'
import About from './components/About.vue'

export default {
  name: 'app',
  components: { Header, QuienesSomos, Footer, Portfolio, Reel, Contacto, About, },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.section {
  width: 100%;
  margin: 0px;
}

.no-margin {
  margin:0 !important;
}

</style>
