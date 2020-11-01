<template>
  <div class="section-portfolio">
      <div class="opacity-portfolio row">
        <div class="col quienes-somos-title">
          PORTFOLIO
        </div>
      </div>
      <div class="portfolio-section portfolio-section-3d">
        <br><br>3D
      </div>
      <div class="portfolio-section portfolio-section-ilustracion">
       <br><br> ILUSTRACIÓN
      </div>
      <div class="portfolio-section portfolio-section-marketing-digital">
       <br><br> MARKETING DIGITAL
      </div>
      <div class="portfolio-section portfolio-section-motion-graphics">
       <br><br> MOTION GRAPHICS
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

.section-portfolio {
  width: 100%;
  height: 100%;
}

.opacity-portfolio {
  background-color: white;
  opacity: 0.6;
}

.quienes-somos-title {
  font-size: 1cm;
  font-weight: 800;
}

.quienes-somos-description {
  width: 30%;
  font-weight: 600;
}

.portfolio-section {
  height: 7em;
  color:white;
  font-size: 0.8cm;
  font-weight: 800;
}

.portfolio-section-3d {
  background-color: rgba(231, 179, 103, 0.979);
}

.portfolio-section-ilustracion {
  background-color:rgba(196, 60, 84, 0.979);
}

.portfolio-section-marketing-digital {
  background-color:rgba(131, 26, 82, 0.979);
}

.portfolio-section-motion-graphics {
  background-color:rgba(37, 44, 99, 0.979);
}

</style>
