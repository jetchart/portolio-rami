<template>
<div class="spinner-context">
      <!--<b-iconstack :font-scale="scale">
        <b-icon stacked icon="star-fill" animation="fade" :scale="0.4 * scale" ></b-icon>
        <b-icon stacked icon="arrow-clockwise" animation="spin" :scale="1 * scale"></b-icon>
      </b-iconstack>-->
      <div class="spinner-pos ">
        <img v-if="variant == 'dark'" :height="15 * scale" :width="15 * scale" src="../assets/manada-dark.png">
        <img v-if="variant == 'light'" :height="15 * scale" :width="15 * scale" src="../assets/manada-light.png">
        </div>
      <b-spinner class="spinner-pos" :class="[spinnerClass, colorClass]"></b-spinner>
    </div>
</template>

<script>

export default {
  name: 'Spinner',
  props: {
    // ['sm', 'md', 'lg', 'xl']
    size: {
      type: String,
      default: "md",
    },
    // ['light', 'dark']
    variant: {
      color: String,
      default: 'dark',
    },
  },
  data () {
    return {
      spinnerClass: null,
      scale: null,
      imageName: null,
    }
  },
  mounted() {
    if (this.size == 'sm') this.scale = 1;
    if (this.size == 'md') this.scale = 2;
    if (this.size == 'lg') this.scale = 3;
    if (this.size == 'xl') this.scale = 4;
    this.spinnerClass = 'spinner-' + this.size;
    this.colorClass = 'color-' + this.variant;
  },
  methods: {
  }
}
</script>

<style>

@keyframes example {
  0% {opacity: 0}
  25% {opacity: 0.5;}
  50% {opacity: 1;}
  75% {opacity: 0.5;}
  100% {opacity: 0;}
}

.anim {
  animation-name: example;
  animation-duration: 0.7s;
  animation-iteration-count: infinite;
}

.spinner-pos {
  position: absolute;
  color: black;
  opacity: 0.7;
  font-size: 1rem !important;
}

.color-black {
  color: black;
}

.color-light {
  color: white;
}

.spinner-context {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image {
  opacity: 1;
}

.spinner-sm {
  width: 2rem; 
  height: 2rem;
}

.spinner-md {
  width: 4rem; 
  height: 4rem;
}

.spinner-lg {
  width: 6rem; 
  height: 6rem;
}

.spinner-xl {
  width: 8rem; 
  height: 8rem;
}


</style>
