<template>
  <div>
    <div v-if="!loading" class="video-responsive">
      <iframe :src="reel.url" frameborder="0" allowfullscreen></iframe>
    </div>
    <div v-else class="spinner-reel">
      <spinner size="lg"></spinner>
    </div>
  </div>
</template>

<script>

import Spinner from './Spinner.vue'
import { RestService } from './../js/services/RestService.js';

export default {
  name: 'Reel',
  components: {Spinner, },
  data () {
    return {
      reel: {},
      loading: false,
    }
  },
  mounted() {
    this.loadReel();
  },
  methods: {
    loadReel() {
      this.loading = true;
      RestService.getReel$()
        .then(response => {
          this.reel = response.data[0];
          this.loading = false;
          })
        .catch(error => this.loading = false);
    },
  }
}
</script>

<style>

.section-reel {
  background-color: lawngreen;
}

  .video-responsive {
    height: 0;
    overflow: hidden;
    padding-bottom: 56.25%;
    padding-top: 30px;
    position: relative;
  }

  .video-responsive iframe, .video-responsive object, .video-responsive embed {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

  .spinner-reel {
    height: 10em;
    display: flex;
    align-items: center;
    justify-content: center;
  }

</style>
