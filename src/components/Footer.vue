<template>
  <div class="opacity-header">
    <b-navbar toggleable type="light" variant="light" align="center">
      <b-navbar-brand href="#" class="footer-item">FOOTER</b-navbar-brand>

    </b-navbar>
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

.opacity-header {
  opacity: 0.6;
}

.footer-item {
  font-weight: 800;
  color: white;
}

</style>
