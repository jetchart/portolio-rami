<template>
  <div class="video-responsive">
  <iframe src="https://www.youtube.com/embed/G-6ATMhCqO0?rel=0;&autoplay=1&mute=1&loop=1" frameborder="0" allowfullscreen></iframe>
  </div>
</template>

<script>
export default {
  name: 'Reel',
  data () {
    return {
    }
  },
  mounted() {
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
