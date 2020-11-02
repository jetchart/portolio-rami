<template>
  <div class="section-portfolio">
      <div class="opacity-portfolio portfolio row">
        <div class="col portfolio-title">
          PORTFOLIO
        </div>
      </div>
      <div class="portfolio-section portfolio-section-3d">
        <div class="portfolio-section-content">
          <span class="portfolio-item-description" v-b-toggle.collapse-3d>3D</span>
          <b-collapse id="collapse-3d">
            <small>
              <div class="portfolio-item-card">Trabajo 1</div>
              <div class="portfolio-item-card">Trabajo 2</div>
              <div class="portfolio-item-card">Trabajo 3</div>
              <div class="portfolio-item-card">Trabajo 4</div>
              <div class="portfolio-item-card">Trabajo 5</div>
            ...
            </small>
        </b-collapse>
      </div>
      </div>
      <div class="portfolio-section portfolio-section-ilustracion">
        <div class="portfolio-section-content">
          <span class="portfolio-item-description" v-b-toggle.collapse-ilustracion>ILUSTRACIÓN</span>
          <b-collapse id="collapse-ilustracion">
              <small>
              <div class="portfolio-item-card">Trabajo 1</div>
              <div class="portfolio-item-card">Trabajo 2</div>
              <div class="portfolio-item-card">Trabajo 3</div>
              <div class="portfolio-item-card">Trabajo 4</div>
              <div class="portfolio-item-card">Trabajo 5</div>
              ...
              </small>
          </b-collapse>
        </div>
      </div>
      <div class="portfolio-section portfolio-section-marketing-digital">
        <div class="portfolio-section-content">
          <span class="portfolio-item-description" v-b-toggle.collapse-marketing-digital>MARKETING DIGITAL</span>
          <b-collapse id="collapse-marketing-digital">
              <small>
              <div class="portfolio-item-card">Trabajo 1</div>
              <div class="portfolio-item-card">Trabajo 2</div>
              <div class="portfolio-item-card">Trabajo 3</div>
              <div class="portfolio-item-card">Trabajo 4</div>
              <div class="portfolio-item-card">Trabajo 5</div>
              ...
              </small>
          </b-collapse>
        </div>
      </div>
      <div class="portfolio-section portfolio-section-motion-graphics">
        <div class="portfolio-section-content">
          <span class="portfolio-item-description" v-b-toggle.collapse-motion-graphics>MOTION GRAPHICS</span>
          <b-collapse id="collapse-motion-graphics">
              <small>
              <div class="portfolio-item-card">Trabajo 1</div>
              <div class="portfolio-item-card">Trabajo 2</div>
              <div class="portfolio-item-card">Trabajo 3</div>
              <div class="portfolio-item-card">Trabajo 4</div>
              <div class="portfolio-item-card">Trabajo 5</div>
              ...
              </small>
          </b-collapse>
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

.portfolio {
  margin: 0px !important;
}

.section-portfolio {
  width: 100%;
  height: 100%;
}

.opacity-portfolio {
  background-color: white;
  opacity: 0.6;
}

.portfolio-title {
  font-size: 3em;
  font-weight: 800;
}

.portfolio-section {
  min-height: 7em;
  color:white;
  font-size: 2em;
  font-weight: 800;
  display: flex;
  align-items: center;
}

.portfolio-section-content {
  width: 100%;
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

.portfolio-item-description {
  transition: font-size 0.15s linear;
}
.portfolio-item-description:hover{
   font-size: 1.2em;
}

.portfolio-item-card {
  
}

</style>
