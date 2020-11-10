<template>
  <div>
    <div id="reel" class="transition-opacity"><Reel></Reel></div>
    <div>
      <div id="quienes-somos" class="row section"><QuienesSomos></QuienesSomos></div>
      <div id="portfolio" class="row section"><Portfolio></Portfolio></div>
      <div id="contacto" class="row section"><Contacto></Contacto></div>
    </div>
  </div>
</template>

<script>

import Portfolio from './Portfolio.vue'
import Reel from './Reel.vue'
import QuienesSomos from './QuienesSomos.vue'
import Contacto from './Contacto.vue'
import About from './About.vue'

export default {
  name: 'Home',
  components: { QuienesSomos, Portfolio, Reel, Contacto, About, },
  data () {
    return {
    }
  },
  mounted() {
    window.scrollTo(0, 0);
  },
}
</script>

<style>

.section {
  width: 100%;
  margin: 0px;
}

.transition-opacity {
  animation-duration: 1s;
  animation-name: transition-opacity;
}

@keyframes transition-opacity {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

</style>
