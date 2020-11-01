<template>
  <div class="section-quienes-somos">
    <div class="opacity">
      <div class="row">
        <div class="col quienes-somos-title">
          QUIENES SOMOS
        </div>
      </div>
      <div class="row">
        <div class="col-lg-3 col-md-2 col-sm-1" align="center"></div>
        <div class="col-lg-6 col-md-8 col-sm-10" align="center">
          <p class="quienes-somos-description">La Manada se trata sobre la unidad y el sentido de pertencencia. 
          Aquella fuerza que genera el grupo para enfrentar cualquier cosa. 
          Asi también como la empatía y la habilidad de complementarse los unos a los otros.
          Como La Manada, nosotros también estamos unidos y así generamos la fuerza para llevar a 
          cabo todos nuestros desafíos.
          Apoyándonos entre nosotros y complementándonos.</p>
        </div>
        <div class="col-lg-3 col-md-2 col-sm-1" align="center"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuienesSomos',
  data () {
    return {
    }
  },
  mounted() {
  }
}
</script>

<style>

.section-quienes-somos {
  padding: 20px;
  width: 100%;
  height: 100%;
}

.opacity {
  border-radius: 5px;
  background-color: white;
  opacity: 0.6;
}

.quienes-somos-title {
  font-size: 1cm;
  font-weight: 800;
}

.quienes-somos-description {
  width: 100%;
  font-weight: 600;
}

</style>
