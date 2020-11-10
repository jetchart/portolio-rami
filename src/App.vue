<template>
  <div id="app" class="all-window">
    <div><Header></Header></div>
    <router-view></router-view>
    <div class="pre-footer"></div>
    <div class="footer"><Footer></Footer></div>
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

/*.slideinleft {
  animation-duration: 3s;
  animation-name: slideinleftkf;
}

@keyframes slideinleftkf {
  from {
    margin-left: 100%;
    width: 300%
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}*/

.transition-opacity {
  animation-duration: 1s;
  animation-name: transition-opacity;
}

@keyframes transition-opacity {
  from {
    opacity:0;
  }

  to {
    opacity:1;
  }
}

.no-margin {
  margin:0 !important;
}

.footer {
  position: fixed;
  width: 100%;
  bottom: 0;
}

.pre-footer {
  height: 4em;
}

</style>
