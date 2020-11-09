<template>
  <div class="video-responsive">
  <iframe :src="reel.url" frameborder="0" allowfullscreen></iframe>
  </div>
</template>

<script>

import { RestService } from './../js/services/RestService.js';

export default {
  name: 'Reel',
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

</style>
