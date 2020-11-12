<template>
  <div class="opacity-header">
    <b-navbar toggleable type="light" variant="light">
      <b-navbar-brand class="header-title" href="#"><img height="30" width="30" src="../assets/manada.png"></b-navbar-brand>

      <b-navbar-toggle target="navbar-toggle-collapse">
        <template #default="{ expanded }">
          <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
          <b-icon v-else icon="chevron-bar-down"></b-icon>
        </template>
      </b-navbar-toggle>

      <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item @click="$router.push('/#reel')" class="header-item">Reel</b-nav-item>
          <b-nav-item @click="$router.push('/#portfolio')" class="header-item">Portfolio</b-nav-item>
          <b-nav-item @click="$router.push('/#about')" class="header-item" >About</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Header',
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

.header-item {
  font-weight: 800;
  color: white;
}

.header-title {
  font-family: 'Qualy';
  font-size: 3vh;
  font-weight: 800;
}


</style>
