<template>
  <div class="section-quienes-somos">
    <div class="opacity-quienes-somos">
      <template v-if="!loading"> 
        <div class="row">
          <div class="col quienes-somos-title">
            {{quienesSomos.title}}
          </div>
        </div>
        <div class="row quienes-somos-row" align="center">
          <div class="col-sm-8 col-md-6 col-lg-6 " >
            <p class="quienes-somos-description white-space-pre-wrap">{{quienesSomos.description}}</p>
          </div>
        </div>
      </template>
      <b-spinner v-else></b-spinner>
    </div>
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
  min-height: 10rem;
  display:flex;
  align-items: center;
  justify-content: center;
}

.quienes-somos-title {
  font-family: 'Qualy';
  font-size: 2.5rem;
  font-weight: 800;
}

.white-space-pre-wrap {
  white-space: pre-wrap;
}

.quienes-somos-description {
  font-size: 1.2rem;
  font-weight: 800;
}

.quienes-somos-row {
  display: flex;
  justify-content: center;
  margin-left: 1rem;
  margin-right: 1rem;
}

</style>
