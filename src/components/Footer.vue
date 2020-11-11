<template>
  <div class="footer-nav">
    <div align="center">
      <span href="#" class="footer-title">Manada</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
    }
  },
  mounted() {
  }
}
</script>

<style>

.footer-nav {
  opacity: 0.6;
  background-color: white;
  height: 3rem;
  display:flex;
  justify-content: center;
  align-items: center;
}

.footer-title {
  font-family: 'Qualy';
  font-size: 2vh;
  font-weight: 800;
  color: black;
}

</style>
