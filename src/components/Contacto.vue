<template>
  <div class="section-contacto">
    <div>
      <div class="row">
        <div class="col contacto-title">
          CONTACTO
        </div>
      </div>
      <div class="row ">
        <div class="col" align="center">
            <b-textarea rows="8" class="contacto-description" type="text" v-model="text"></b-textarea>
            <b-button class="btn btn-success contacto-description">ENVIAR</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuienesSomos',
  data () {
    return {
      text: null,
    }
  },
  mounted() {
  }
}
</script>

<style>

.section-contacto {
  padding: 20px;
  width: 100%;
  height: 100%;
}

.opacity {
  border-radius: 5px;
  background-color: white;
  opacity: 0.6;
}

.contacto-title {
  font-family: 'Qualy';
  font-size: 2.5rem;
  font-weight: 800;
  color: white;
}

.contacto-description {
  width: 50%;
  font-weight: 600;
}

</style>
