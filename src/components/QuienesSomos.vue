<template>
  <div class="section-quienes-somos">
    <div v-if="!loading" class="opacity-quienes-somos">
      <div class="row">
        <div class="col quienes-somos-title">
          {{quienesSomos.title}}
        </div>
      </div>
      <div class="row">
        <div class="col" align="center">
          <p class="quienes-somos-description white-space-pre-wrap">{{quienesSomos.description}}</p>
        </div>
      </div>
    </div>
    <div v-else><i class="fa fa-spin fa-spinner"></i></div>
  </div>
</template>

<script>

import { RestService } from './../js/services/RestService.js';

export default {
  name: 'QuienesSomos',
  data () {
    return {
      quienesSomos: {},
      loading: false,
    }
  },
  mounted() {
    this.loadQuienesSomos();
  },
  methods: {
    loadQuienesSomos() {
      this.loading = true;
      RestService.getQuienesSomos$()
        .then(response => {
          this.quienesSomos = response.data[0];
          this.loading = false;
          })
        .catch(error => this.loading = false);
    },
  }
}
</script>

<style>

.section-quienes-somos {
  padding: 20px;
  width: 100%;
  height: 100%;
}

.opacity-quienes-somos {
  border-radius: 5px;
  background-color: white;
  opacity: 0.6;
}

.quienes-somos-title {
  font-family: 'Qualy';
  font-size: 3rem;
  font-weight: 800;
}

.white-space-pre-wrap {
  white-space: pre-wrap;
}

.quienes-somos-description {
  width: 60%;
  font-size: 1.2rem;
  font-weight: 800;
}

</style>
