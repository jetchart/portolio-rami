<template>
  <div class="item-component">
    <div v-if="!loading" class="item-data">
      <div class="item-title">{{item.title}}</div>
      <div class="item-description">{{item.description}}</div>
    </div>
    <div v-else class="spinner-div">
      <spinner size="lg" variant="dark"></spinner>
    </div>
    <div v-if="!loading" class="carousel">
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <b-carousel-slide v-for="(image, index) in item.images" :img-src="image.url">
          <a class="slide-link" target="_blank" :href="image.url">Ampliar</a>
        </b-carousel-slide>

      </b-carousel>
    </div>
  </div>
</template>

<script>

import Spinner from './Spinner.vue'
import { RestService } from './../js/services/RestService.js';

  export default {
    name: 'Item',
    components: {Spinner, },
    //props: ['item'],
    data() {
      return {
        slide: 0,
        sliding: null,
        item: {},
        loading: false,
      }
    },
    mounted() {
      this.getItem();
      window.scrollTo(0, 0);
    },
    methods: {
      getItem() {
        this.loading = true;
        RestService.getPortfolioItemByTypeAndId$(this.$route.params.type, this.$route.params.id).then(response => {
          this.item = response.data[0];
          this.loading = false;
        })
        .catch(error => this.loading = false);
      },
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>

<style scoped>

  .item-data {
    margin-top: 1rem; 
    margin-bottom: 1rem; 
  }

  .spinner-div {
    min-height: 20rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .item-title {
    font-size: 2.5em;
    font-family: Qualy;
    font-weight: 800;
    opacity: 0.7;
    text-transform: uppercase;
    color: black;
  }

  .item-description {
    font-size: 1.5rem;
    margin-left: 2rem;
    margin-right: 2rem;
    font-weight: 600;
    opacity: 0.7;
    color: black;
  }

  .item-component {
    margin: 1rem;
    padding: 0.5rem;
    background-color: rgb(255, 255, 255, 0.7);
    border-radius: 5px;
    margin-bottom: 6rem;
  }

  .carousel {
    margin: 1rem;
  }

  .carousel-margin-bottom {
    margin-bottom: 1rem;
  }

  .slide-link {
    color: white;
    font-size: 1.5vh;
    font-weight: 800;
    text-transform: uppercase;
  }

</style>