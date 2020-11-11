<template>
  <div class="item-component">
    <div class="item-data">
      <div class="item-title">{{item.title}}</div>
      <div class="item-description">{{item.description}}</div>
    </div>
    <div class="carousel">
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
        <b-carousel-slide v-for="(image, index) in item.images"
          :caption="image.title"
          :text="image.description"
          :img-src="image.url"
        ></b-carousel-slide>

      </b-carousel>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Item',
    props: ['item'],
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    mounted() {
      window.scrollTo(0, 0);
    },
    methods: {
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
  
  .item-title {
    font-size: 3em;
    font-weight: 800;
    opacity: 0.7;
    text-transform: uppercase;
    color: black;
  }

  .item-description {
    margin-left: 2rem;
    margin-right: 2rem;
    font-size: 2rem;
    font-weight: 600;
    opacity: 0.7;
    color: black;
  }

  .item-component {
    margin: 2rem;
    padding: 1rem;
    background-color: rgb(255, 255, 255, 0.7);
    border-radius: 5px;
  }

  .carousel {
    margin: 1rem;
  }

  .carousel-margin-bottom {
    margin-bottom: 1rem;
  }

</style>