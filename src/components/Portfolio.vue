<template>
  <div class="section-portfolio">
      <div class="opacity-portfolio portfolio row">
        <div class="col portfolio-title">
          PORTFOLIO
        </div>
      </div>
      <div class="portfolio-section portfolio-section-3d">
        <div class="portfolio-section-content">
          <div class="portfolio-item-description"><span v-b-toggle.collapse-3d>3D</span></div>
          <b-collapse id="collapse-3d" class="collapse-card">
            <div class="row portfolio-item-card " align="center">
                <div class="portfolio-item" v-for="(item, index) in items3d">
                  <div class="card-image responsive-image">
                    <div class="card-content hide">
                      <div>
                        <div class="card-content-title">
                          {{item.title}}
                        </div>
                        <div class="card-content-description">
                          <small>{{item.description}}</small>
                        </div>
                        <div >
                          <button class="btn btn-sm btn-primary">Ingresar</button>
                        </div>
                      </div>
                    </div>
                    <img :src="item.imageUrl">
                  </div>
                </div>
              </div>
        </b-collapse>
      </div>
      </div>
      <div class="portfolio-section portfolio-section-ilustracion">
        <div class="portfolio-section-content">
          <div class="portfolio-item-description"><span v-b-toggle.collapse-ilustracion>ILUSTRACIÓN</span></div>
          <b-collapse id="collapse-ilustracion" class="collapse-card">
              <div class="row portfolio-item-card " align="center">
                <div class="col" v-for="(item, index) in itemsMarketingDigital">
                  <div class="card-image responsive-image">
                    <div class="card-content hide">
                      <div>
                        <div class="card-content-title">
                          {{item.title}}
                        </div>
                        <div class="card-content-description">
                          <small>{{item.description}}</small>
                        </div>
                        <div >
                          <button class="btn btn-sm btn-primary">Ingresar</button>
                        </div>
                      </div>
                    </div>
                    <img :src="item.imageUrl">
                  </div>
                </div>
              </div>
          </b-collapse>
        </div>
      </div>
      <div class="portfolio-section portfolio-section-marketing-digital">
        <div class="portfolio-section-content">
          <div class="portfolio-item-description"> <span v-b-toggle.collapse-marketing-digital>MARKETING DIGITAL</span></div>
          <b-collapse id="collapse-marketing-digital" class="collapse-card">
              <div class="row portfolio-item-card " align="center">
                <div class="col" v-for="(item, index) in itemsMarketingDigital">
                  <div class="card-image responsive-image">
                    <div class="card-content hide">
                      <div>
                        <div class="card-content-title">
                          {{item.title}}
                        </div>
                        <div class="card-content-description">
                          <small>{{item.description}}</small>
                        </div>
                        <div >
                          <button class="btn btn-sm btn-primary">Ingresar</button>
                        </div>
                      </div>
                    </div>
                    <img :src="item.imageUrl">
                  </div>
                </div>
              </div>
          </b-collapse>
        </div>
      </div>
      <div class="portfolio-section portfolio-section-motion-graphics">
        <div class="portfolio-section-content">
          <div class="portfolio-item-description"><span v-b-toggle.collapse-motion-graphics>MOTION GRAPHICS</span></div>
          <b-collapse id="collapse-motion-graphics" class="collapse-card">
              <div class="row portfolio-item-card " align="center">
                <div class="col" v-for="(item, index) in itemsMotionGraphics">
                  <div class="card-image responsive-image">
                    <div class="card-content hide">
                      <div>
                        <div class="card-content-title">
                          {{item.title}}
                        </div>
                        <div class="card-content-description">
                          <small>{{item.description}}</small>
                        </div>
                        <div >
                          <button class="btn btn-sm btn-primary">Ingresar</button>
                        </div>
                      </div>
                    </div>
                    <img :src="item.imageUrl">
                  </div>
                </div>
              </div>
          </b-collapse>
        </div>
      </div>
  </div>
</template>

<script>

import { RestService } from './../js/services/RestService.js';

export default {
  name: 'QuienesSomos',
  data () {
    return {
      items3d: [],
      itemsIlustracion: [],
      itemsMarketingDigital: [],
      marketingDigital: [],
    }
  },
  mounted() {
    RestService.getPortofolio3d$().then(response => this.items3d = response.data);
    RestService.getPortofolioIlustracion$().then(response => this.itemsIlustracion = response.data);
    RestService.getPortofolioMarketingDigital$().then(response => this.itemsMarketingDigital = response.data);
    RestService.getPortofolioMotionGraphics$().then(response => this.itemsMotionGraphics = response.data);
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
  padding-top: 2rem;
  padding-bottom: 2rem;
}
.portfolio-item-description:hover{
   font-size: 1.2em;
}

.portfolio-item-card {
  justify-content: center;
  margin-right: 0px;
  margin-left: 0px;
}

.portfolio-item {
  margin-left:0.3rem;
  margin-right:0.3rem;
  margin-top:0;
  margin-bottom:0;
  
}

.responsive-image {
  width: 12em;
  height: auto;
  margin-bottom: 0.3em;
  position: relative;
}
.responsive-image img {
  width: 100%;
  height: 100%;
}

.hide {
  opacity: 0;
  visibility: hidden;
  transition: visibility 0s, opacity 0.2s linear;
}

.card-content {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  color: black;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

.card-image:hover div {
 visibility: visible;
 opacity: 0.9; 
}

.card-footer-button {
  position: absolute;
  bottom: 0;
  width: 100%;
}

.card-content-title {
  font-weight: 800;
  font-size: 1.2rem;
  text-transform: uppercase;
}

.card-content-description {
  font-weight: 800;
  font-size: 1.1rem;
}

.collapse-card {
  margin-bottom: 3rem;
}

</style>
